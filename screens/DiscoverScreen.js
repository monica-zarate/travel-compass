import { View, StyleSheet } from "react-native";
import { Text, Input, Icon } from "@rneui/themed";

export default function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a destination"
        rightIcon={<Icon name="magnify" type="material-community" size={24} />}
      />
      <View style={styles.welcomeTxt}>
        <Text style={styles.txtSmll}>Where do you want to go? </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    backgroundColor: "#ffffff",
    minHeight: "100%",
  },
  welcomeTxt: {
    alignItems: "center",
  },
  txtSmll: {
    fontSize: 16,
  },
});
