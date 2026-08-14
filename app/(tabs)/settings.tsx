import { SpecialInput } from "@/components/ui/special-input";
import { myStyles } from "@/styles/main";
import { Text, View } from "react-native";

export default function Settings() {
  return (
    <View style={{ backgroundColor: "#808080", height: "100%", width: "100%" }}>
      <View style={myStyles.card}>
        <SpecialInput
          label="Email"
          placeholder="Enter email"
          placeholderTextColor="red"
        />
        <SpecialInput
          secureTextEntry={true}
          label="Password"
          placeholder="Enter Password"
        />
        <Text style={myStyles.text}>This is Settings</Text>
        <Text style={myStyles.text}>This is Settings</Text>
        <Text style={myStyles.text}>This is Settings</Text>
        <Text style={myStyles.text}>This is Settings</Text>
      </View>
    </View>
  );
}
