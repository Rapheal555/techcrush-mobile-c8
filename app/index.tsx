
import { myStyles } from "@/styles/main";

import {  useRouter,usePathname } from "expo-router";
import {  Text, View } from "react-native";



export default function HomeScreen() {

  
 const navigator = useRouter();
 const pathname = usePathname();
 
  setInterval(() => { 
    if(pathname === "/"){
      navigator.navigate("/login") 
      
    }
  }, 3000);
 
  return ( 
    <View style={myStyles.splash}>
     <Text style={myStyles.splashText}>Techcrush Mobile</Text>
    </View>
  );
}
