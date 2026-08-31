import { useLogin } from "@/store/loginStore";
import { myStyles } from "@/styles/main";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSQLiteContext } from "expo-sqlite";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function Profile() {

  const [users, setUsers] = useState<User[]>([]);
  const db = useSQLiteContext();
   
  useEffect(() => {
    async function setup() {
      const result = await db.getAllAsync<User>("SELECT * FROM users");
      setUsers(result);
    }
    setup();
  }, []);

  // const {
  //     firstName,
  //     lastName,
  //     email,
  //     password,
  //   } = useLogin((state) => state);

  

  

  return (
    <View>
      {users.map((user, index) => (
        <View key={index} style={myStyles.card}>
          <Text style={myStyles.text}>First Name : {user.firstName}</Text>
          <Text style={myStyles.text}>Last Name: {user.lastName}</Text>
          <Text style={myStyles.text}>Email: {user.email}</Text>
          <Text style={myStyles.text}>Password: {user.password}</Text>
        </View>
      ))}
    </View>
  );
}
 