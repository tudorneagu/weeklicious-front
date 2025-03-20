"use client";
import InputField from "@components/ui/InputField";
import MainButton from "@components/ui/MainButton";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { useLogin } from "@packages/hooks/authHooks";

function Login() {
  const loginMutation = useLogin(); // useLogin() returns a mutation object

  const onSubmit = async (values: { email: string; password: string }) => {
    loginMutation.mutate(values, {
      onSuccess: () => {
        console.log("Login successful");
        // navigate("/");
      },
      onError: (error) => {
        console.error("Login failed:", error);
        // Handle error state here
      },
    });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <Text>Log In Page</Text>
      <InputField label="toto" />
      <InputField placeholder="Username" isPassword={true} />
      <MainButton
        buttonText="Log In"
        ariaLabel="Log in"
        onClick={(event) => {
          onSubmit({ email: "tudor@example.com", password: "password123" });
        }}
      />
    </SafeAreaView>
  );
}

export default Login;
