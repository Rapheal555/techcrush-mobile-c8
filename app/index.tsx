import { myStyles } from "@/styles/main";

import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  // setInterval(() => {
  //   router.navigate("/login");
  // }, 3000);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={myStyles.splash}>
      <Text style={myStyles.splashText}>Techcrush Mobile</Text>
    </View>
  );
}
