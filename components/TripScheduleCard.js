import { View, StyleSheet } from "react-native";
import { Text, ListItem, Image } from "@rneui/themed";

// The Trip Schedule Card Component is making use of the received data, to print out the information needed for each card.
// Since some of the keys on the trip schedule objects are empty for some cases, I'm making use of a logical operator to include the Text tags only if that key has a value, to prevent from having blank spaces.
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
