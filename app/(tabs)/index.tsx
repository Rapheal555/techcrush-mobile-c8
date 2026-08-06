import { SpecialInput } from "@/components/ui/special-input";
import { myStyles } from "@/styles/main";
import { Button } from "@react-navigation/elements";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={myStyles.card}>
            <Text style={myStyles.text}>This is a sample Text</Text>
            <Text style={myStyles.text}>This is a sample Text 123</Text>
          </View>
          <View style={myStyles.card}>
            <SpecialInput placeholder="Enter email" placeholderTextColor="red" />
            <SpecialInput placeholder="Enter Password" />
            <SpecialInput />
            <SpecialInput />
            <SpecialInput />
          </View>

          <Button>Click me</Button>
          <ActivityIndicator size={"small"} />

          <ScrollView horizontal>
            <View>
              <Image
                source={require("@/assets/images/icon.png")}
                style={{ width: 300, height: 300 }}
                resizeMode="cover"
              />

              <Image
                source={{
                  uri: "https://reactnativeexpert.com/wp-content/uploads/2025/07/Bottom-Navigation-Bar.webp",
                }}
                style={{ width: 300, height: 200 }}
              />
            </View>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
