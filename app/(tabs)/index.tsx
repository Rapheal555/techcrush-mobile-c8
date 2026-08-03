import { Button } from "@react-navigation/elements";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

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
            <TextInput placeholderTextColor={'white'} style={myStyles.input} placeholder="type here ..." />
            <TextInput style={myStyles.input} placeholder="type here ..." />
            <TextInput style={myStyles.input} placeholder="type here" />
            <TextInput style={myStyles.input} placeholder="type here" />
          </View>

          <Button>Click me</Button>
          <ActivityIndicator size={"small"} />
          <View>
            <Image
              source={require("../../assets/images/icon.png")}
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const myStyles = StyleSheet.create({
  input: {
    borderColor: "red",
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    margin: 5,
    color:'yellow'
  
  },
  card: {
    padding: 10,
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#001933",
  },
  text: {
    color: '#ffffff'
  }
});
