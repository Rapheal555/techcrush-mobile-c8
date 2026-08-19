import { SpecialInput } from "@/components/ui/special-input";
import { myStyles } from "@/styles/main";
import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { useLogin } from "@/store/loginStore";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [password, setPassword] = useState("");

  const {
    updateFirstName,
    updateEmail,
    updateLastName,
    updatePassword,
    firstName,
    lastName,
    email,
    password,
  } = useLogin((state) => state);

  const router = useRouter();
  const handleLogin = () => {
    router.replace("/(tabs)/profile");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={myStyles.container}>
        <View style={myStyles.card}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <SpecialInput
              value={firstName}
              onChangeText={(text) => updateFirstName(text)}
              label="First Name"
              placeholder="Enter first name"
            />
            <SpecialInput
              value={lastName}
              onChangeText={(text) => updateLastName(text)}
              label="Last Name"
              placeholder="Enter last name"
            />
          </View>

          <SpecialInput
            value={email}
            onChangeText={(text) => updateEmail(text)}
            label="Email"
            placeholder="Enter email"
          />
          <SpecialInput
            value={password}
            onChangeText={(text) => updatePassword(text)}
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
