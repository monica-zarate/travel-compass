import { View, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";

// The Notifications Screen was not in the wireframes, but it's been included for the sake of the Bottom Tabs Navigation.
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
