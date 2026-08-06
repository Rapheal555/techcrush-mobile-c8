import { myStyles } from "@/styles/main";
import { TextInput } from "react-native";

type SpecialInputProps = {
  placeholder?: string;
  placeholderTextColor?: string;
};

export const SpecialInput = ({
  placeholder = "Type here...",
  placeholderTextColor = "yellow",
}: SpecialInputProps) => {
  return (
    <TextInput
      placeholderTextColor={placeholderTextColor}
      style={myStyles.input}
      placeholder={placeholder}
    />
  );
};
