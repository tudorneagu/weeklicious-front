import axiosInstance from "./axiosInstance";
import { setAccessToken, clearAccessToken } from "./tokenService";
import type { LoginProps, UserInfoProps, RegisterProps } from "../types/user";
import axios from "axios";

const authService = {
  login: async ({ email, password }: LoginProps): Promise<UserInfoProps> => {
    try {
      const response = await axiosInstance.post("/users/login", {
        email,
        password,
      });
      const { accessToken } = response.data;
      setAccessToken(accessToken);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.response?.data || error.message);
        throw error.response?.data || { message: error.message };
      }
      throw new Error("An unknown error occurred");
    }
  },

  refreshAccessToken: async () => {
    try {
      const response = await axiosInstance.post("/users/refresh");
      const { accessToken } = response.data;
      setAccessToken(accessToken);
      return accessToken;
    } catch (error) {
      // handle error if needed
    }
  },

  logout: async () => {
    await axiosInstance.post("/users/logout");
    clearAccessToken();
  },

  register: async ({
    firstName,
    lastName,
    email,
    birthdate,
    gender,
    password,
    confirmPassword,
  }: RegisterProps) => {
    try {
      const newUser = await axiosInstance.post(
        "/users/register",
        {
          firstName,
          lastName,
          email,
          birthdate,
          gender,
          password,
          confirmPassword,
        },
        { withCredentials: true }
      );
      return newUser.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.response?.data || error.message);
        throw error.response?.data || { message: error.message };
      }
      throw new Error("An unknown error occurred");
    }
  },

  getUser: async () => {
    try {
      const response = await axiosInstance.get("/users/info");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.response?.data || error.message);
        throw error.response?.data || { message: error.message };
      }
      throw new Error("An unknown error occurred");
    }
  },
};

export default authService;
