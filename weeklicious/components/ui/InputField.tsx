import React, { useState, forwardRef } from "react";
import type { ForwardRefRenderFunction } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import type { TextInputProps } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type InputFieldProps = {
  label?: string;
  hint?: string;
  error?: string;
  isTextArea?: boolean;
  /** If true, the text is shown as secure (for passwords). */
  isPassword?: boolean;
  onChangeText?: (text: string) => void;
} & TextInputProps;

const InputField: ForwardRefRenderFunction<TextInput, InputFieldProps> = (
  {
    label = "Label",
    hint,
    error,
    isTextArea = false,
    isPassword = false,
    onChangeText,
    style,
    ...rest
  },
  ref
) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const inputRef = React.useRef<TextInput>(null);

  /**
   * When `isPassword` is true and `passwordVisible` is false,
   * the field is secured. Pressing/holding the icon
   * sets `passwordVisible` to true.
   */
  const secureTextEntry = isPassword && !passwordVisible;

  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <View style={styles.inputWrapper}>
        <TextInput
          ref={inputRef}
          style={[styles.input, style]}
          secureTextEntry={secureTextEntry}
          multiline={isTextArea}
          numberOfLines={isTextArea ? 4 : 1}
          onChangeText={onChangeText}
          {...rest}
        />

        {/* Toggle Password Visibility (only while holding press) */}
        {isPassword && (
          <TouchableOpacity
            style={styles.passwordToggle}
            onPressIn={() => setPasswordVisible(true)}
            onPressOut={() => setPasswordVisible(false)}>
            <Icon name={passwordVisible ? "eye" : "eye-slash"} size={20} />
          </TouchableOpacity>
        )}
      </View>

      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : hint ? (
        <Text style={styles.hintText}>{hint}</Text>
      ) : null}
    </View>
  );
};

export default forwardRef(InputField);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 8,
    paddingHorizontal: 20,
  },
  label: {
    marginBottom: 4,
    fontSize: 14,
    fontWeight: "600",
  },
  inputWrapper: {
    position: "relative",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    fontSize: 16,
  },
  passwordToggle: {
    position: "absolute",
    right: 12,
    // vertically center the icon
    height: "100%",
    justifyContent: "center",
  },
  errorText: {
    marginTop: 4,
    fontSize: 12,
    color: "red",
  },
  hintText: {
    marginTop: 4,
    fontSize: 12,
    color: "#666",
  },
});
