import { SpecialInput } from "@/components/ui/special-input";
import { myStyles } from "@/styles/main";
import { Text, View } from "react-native";

export default function Home() {
  return (
    
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
          <Text style={myStyles.text}>This is  Profile</Text>
          <Text style={myStyles.text}>This is  Profile</Text>
          <Text style={myStyles.text}>This is  Profile</Text>
          <Text style={myStyles.text}>This is  Profile</Text>
        </View>
     
  );
}
