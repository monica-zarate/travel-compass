import { View, StyleSheet } from "react-native";
import { Text, Input, Button, Icon } from "@rneui/themed";

export default function NewTripScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Input placeholder="Enter Trip Name" />
      <Input
        placeholder="Location"
        rightIcon={<Icon name="magnify" type="material-community" size={24} />}
      />
      <Input
        placeholder="Check-in"
        rightIcon={
          <Icon name="calendar-month" type="material-community" size={24} />
        }
      />
      <Input
        placeholder="Check-out"
        rightIcon={
          <Icon name="calendar-month" type="material-community" size={24} />
        }
      />
      <Button
        title="Create"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    backgroundColor: "#ffffff",
    minHeight: "100%",
  },
});
