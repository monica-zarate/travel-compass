import { View, StyleSheet } from "react-native";
import { Text, Image } from "@rneui/themed";

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image
          source={require("../assets/icons/settings-icon.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>Settings</Text>
      </View>
      <View style={styles.section}>
        <Image
          source={require("../assets/icons/files-icon.png")}
          style={styles.iconWide}
        />
        <Text style={styles.text}>Travel Documents</Text>
      </View>
      <View style={styles.section}>
        <Image
          source={require("../assets/icons/emergency-contacts-icon.png")}
          style={styles.iconWide}
        />
        <Text style={styles.text}>Emergency Contacts</Text>
      </View>
      <View style={styles.section}>
        <Image
          source={require("../assets/icons/help-icon.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>Help</Text>
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
  section: {
    flexDirection: "row",
    backgroundColor: "#EAEAEA",
    padding: 24,
    alignItems: "center",
    marginBottom: 24,
    borderRadius: 5,
    elevation: 3,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 28,
  },
  iconWide: {
    width: 32,
    height: 24,
    marginRight: 20,
  },
  text: {
    fontWeight: "bold",
    color: "#3B3B3B",
    fontSize: 16,
  },
});
