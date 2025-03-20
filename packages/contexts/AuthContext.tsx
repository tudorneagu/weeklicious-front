"use client";
console.log("AuthProvider React:", React);
import React, { createContext, useContext } from "react";
import { useLogin, useLogout, useCurrentUser } from "../hooks/authHooks";
import type { UserInfoProps, LoginProps } from "../types/user";

interface AuthContextProps {
  user: UserInfoProps | null;
  isAuthenticated: boolean;
  login: (credentials: LoginProps) => Promise<UserInfoProps>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: user, isLoading } = useCurrentUser();
  console.log("AuthProvider init");
  const loginMutation = useLogin();
  const logoutMutation = useLogout();

  const login = async (credentials: LoginProps): Promise<UserInfoProps> => {
    return await loginMutation.mutateAsync(credentials);
  };

  const logout = async (): Promise<void> => {
    await logoutMutation.mutateAsync();
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user: user || null,
        isAuthenticated,
        login,
        logout,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
