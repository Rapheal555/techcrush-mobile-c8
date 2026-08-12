import { SpecialInput } from "@/components/ui/special-input";
import { myStyles } from "@/styles/main";
import { Button } from "@react-navigation/elements";
import { Link, useNavigation } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
 
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView> 
         
          <Button style={myStyles.button}>Click me</Button>
          <Link href={'/login'}>Go to Login</Link>
          <Link href={'/register'}>Go to Register</Link>
          <Link href={'/dashboard/profile'}>Go to Profile</Link>
          <Link href={'/dashboard/settings'}>Go to Settings</Link>
          <ActivityIndicator size={"small"} />

          <ScrollView horizontal>
            <View>
              <Image
                source={require("@/assets/images/icon.png")}
                style={{ width: 300, height: 300 }}
                resizeMode="cover"
              />

              
            </View>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
