import { SpecialInput } from "@/components/ui/special-input";
import { myStyles } from "@/styles/main";
import { Button } from "@react-navigation/elements";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  const handleLogin = ()=>{
    router.push("/(tabs)/profile")
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={myStyles.container}>
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
          <Button
            onPressIn={handleLogin}
            color="#d604cf"
            style={myStyles.button}
          >
            Login
          </Button>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
