"use client";
console.log("AuthProvider React:", React);
import React from "react";
import { Text, View } from "react-native";
import { useCurrentUser } from "@packages/hooks/authHooks";

export default function Home() {
  const { data, isLoading } = useCurrentUser();
  console.log("🏠 Home useCurrentUser:", { data, isLoading });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{isLoading ? "Loading…" : JSON.stringify(data)}</Text>
    </View>
  );
}
