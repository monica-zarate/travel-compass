import { View, StyleSheet } from "react-native";
import { Text, ListItem, Image } from "@rneui/themed";

export default function TripScheduleCard({ itemData }) {
  return (
    <ListItem containerStyle={{ padding: 0 }}>
      <ListItem.Content style={styles.container}>
        <View style={styles.card}>
          <Image source={itemData.icon} style={styles.icon} />
          <View>
            <Text>{itemData.title}</Text>
            <Text style={styles.txtSmall}>{itemData.description}</Text>
            {itemData.time && (
              <Text style={styles.txtSmall}>{itemData.time}</Text>
            )}
            {itemData.duration && (
              <Text style={styles.txtSmall}>{itemData.duration}</Text>
            )}
            {itemData.address && (
              <Text style={styles.txtSmall}>{itemData.address}</Text>
            )}
          </View>
        </View>
      </ListItem.Content>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EAEAEA",
    padding: 16,
  },
  card: {
    flexDirection: "row",
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  txtSmall: {
    fontSize: 16,
  },
});
