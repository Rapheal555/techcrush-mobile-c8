import { SpecialInput } from "@/components/ui/special-input";
import { myStyles } from "@/styles/main";
import { Text, View } from "react-native";
import { useLogin } from "@/store/loginStore";

export default function Profile() {
 
  const {
      firstName,
      lastName,
      email,
      password,
    } = useLogin((state) => state);

  return (
    <View style={myStyles.card}>
      <Text style={myStyles.text}>First Name : {firstName}</Text>
      <Text style={myStyles.text}>Last Name: {lastName}</Text>
      <Text style={myStyles.text}>Email: {email}</Text>
      <Text style={myStyles.text}>Password: {password}</Text>
    </View>
  ); 
}
