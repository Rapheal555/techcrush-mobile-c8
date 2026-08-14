
import { Tabs } from "expo-router";


export const unstable_settings = {
  anchor: "profile",
};

export default function Layout() {
 

  return (
   <Tabs>

       <Tabs.Screen name="profile" options={{ headerShown: true }} />
       <Tabs.Screen name="settings" options={{ headerShown: true }} />
       
   </Tabs>
   
  );
}
