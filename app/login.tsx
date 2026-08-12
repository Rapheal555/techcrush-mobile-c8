import { SpecialInput } from "@/components/ui/special-input";
import { myStyles } from "@/styles/main";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
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

          <Text style={myStyles.text}>This is Login</Text>
          <Text style={myStyles.text}>This is Login</Text>
          <Text style={myStyles.text}>This is Login</Text>
          <Text style={myStyles.text}>This is Login</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
