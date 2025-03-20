import { Pressable, Text } from "react-native";
import type { GestureResponderEvent } from "react-native";
type MainButtonProps = {
  buttonText: string;
  ariaLabel: string;
  variant?: "button" | "link";
  type?: "button" | "submit" | "reset";
  width?: string;
  bgColor?: string;
  linkTo?: string;
  onClick: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  textSize?: string;
};

const MainButton = ({
  buttonText,
  ariaLabel,
  type = "button",
  onClick,
  disabled = false,
}: MainButtonProps) => {
  return (
    <Pressable
      accessibilityLabel={ariaLabel}
      onPress={onClick}
      disabled={disabled}>
      <Text>{buttonText}</Text>
    </Pressable>
  );
};

export default MainButton;

// const styles = StyleSheet.create({
// 	container: {
