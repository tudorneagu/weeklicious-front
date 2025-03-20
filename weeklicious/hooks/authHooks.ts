"use client";

import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import authService from "@packages/services/authService";
import type { LoginProps, UserInfoProps } from "@packages/types/user";
import { setAccessToken } from "@packages/services/tokenService";

export const useCurrentUser = () => {
  console.log("useCurrentUser init");
  return useQuery<UserInfoProps, Error>({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const userData = await authService.getUser();
      return userData.data;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
};

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation<UserInfoProps, Error, LoginProps>({
    mutationFn: async (credentials: LoginProps) => {
      const response = await authService.login(credentials);
      // Set the access token from the response
      setAccessToken(response.accessToken);
      // Return the user data for further processing
      return response.data;
    },
    onSuccess: (data) => {
      // Update the query cache with the user data using a consistent query key
      queryClient.setQueryData(["currentUser"], data);
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, void>({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      // Optionally clear or invalidate any user-related queries
      queryClient.removeQueries({ queryKey: ["currentUser"] });
    },
    onError: (error) => {
      console.error("Logout error:", error);
    },
  });
}
