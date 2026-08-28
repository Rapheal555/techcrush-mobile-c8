import { SpecialInput } from "@/components/ui/special-input";
import { myStyles } from "@/styles/main";
import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { useLogin } from "@/store/loginStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

import db from "@/store/db"

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

  useEffect(() => {
    const loadData = async () => {
      const storedFirstName = await AsyncStorage.getItem("firstName");
      const storedLastName = await AsyncStorage.getItem("lastName");
      const storedEmail = await AsyncStorage.getItem("email");
      const storedPassword = await AsyncStorage.getItem("password");
      updateFirstName(storedFirstName || "");
      updateLastName(storedLastName || "");
      updateEmail(storedEmail || "");
      updatePassword(storedPassword || "");
    };

    loadData();
  }, []); 

  

  const storeData = async ()=>{

    try{ 
     
      await AsyncStorage.setItem("firstName", firstName);
      await AsyncStorage.setItem("lastName", lastName);
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("password", password);
    } catch(error){
      console.log(error)
    }
      
    
  }

  const router = useRouter();
 
  const handleLogin = async () => { 
    await storeData();   
   
  
  //  await db.runAsync(
  //    "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)",
  //    firstName,
  //    lastName,
  //    email,
  //    password,
  //  );


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
