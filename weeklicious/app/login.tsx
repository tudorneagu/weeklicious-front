import InputField from "@components/ui/InputField";
import MainButton from "@components/ui/MainButton";
import { SafeAreaView, Text, StyleSheet } from "react-native";

function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Log In Page</Text>
      <InputField label="toto" />
      <InputField placeholder="Username" isPassword={true} />
      <MainButton
        buttonText="Log In"
        ariaLabel="Log in"
        onClick={() => console.log("toto")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Login;
