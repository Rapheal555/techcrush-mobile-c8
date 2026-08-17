import { SpecialInput } from "@/components/ui/special-input";
import { myStyles } from "@/styles/main";
import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const router = useRouter();
  const handleLogin = () => {
    router.replace("/(tabs)/profile");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={myStyles.container}>
        <View style={myStyles.card}>
          <Text>{firstName}</Text>
          <Text>{email}</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <SpecialInput
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
              label="First Name"
              placeholder="Enter first name"
            />
            <SpecialInput label="Last Name" placeholder="Enter last name" />
          </View>

          <SpecialInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            label="Email"
            placeholder="Enter email"
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
