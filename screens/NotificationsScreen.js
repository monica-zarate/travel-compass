import { View, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text>No new notifications</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 32,
    backgroundColor: "#ffffff",
    minHeight: "100%",
  },
});
