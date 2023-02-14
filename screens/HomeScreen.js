import { View } from "react-native";
import { Button, Text } from "@rneui/themed";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>This is the Home Screen</Text>
      <Button
        title="Ongoing Trip"
        onPress={() => navigation.navigate("OngoingTrip")}
      />
      <Button
        title="Add New Trip"
        onPress={() => navigation.navigate("NewTrip")}
      />
    </View>
  );
}
