import { getMethod } from "@/lib/api-client";
import { myStyles } from "@/styles/main";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

export default function Home() {
  const [data, setData] = useState<any>();
  //  const api = ApiClient()

  useEffect(() => {
    async function fetchData() {
      const result = await getMethod("users");
      setData(result);
    }
    fetchData();
  }, []);

  if (!data) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView>
      <View>
        {data?.users?.map((user: any, index: number) => (
          <View key={index} style={myStyles.card}>
            <Text>
              Name: {user.firstName} {user.lastName}
            </Text>
            <Text>Email: {user.email}</Text>
            <Text>Age: {user.age}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
