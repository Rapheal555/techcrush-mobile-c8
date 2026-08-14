
import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';




export default function Layout() {
 

  return (
    <Tabs>
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: true,
          title: "Profile",
          tabBarIcon: () => <Ionicons name="person" size={24} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: true,
          title: "Settings",
          tabBarIcon: () => <Ionicons name="settings" size={24} />,
        }}
      />
     
    </Tabs>
  );
}
 