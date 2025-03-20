"use client";
console.log("AuthProvider React:", React);
import React from "react";
import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@packages/contexts/AuthContext";

const queryClient = new QueryClient();

export default function RootLayout() {
  console.log("🏗️ ClientProviders mounted");
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </QueryClientProvider>
  );
}
