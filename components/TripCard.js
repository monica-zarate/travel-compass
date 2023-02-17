import { StyleSheet, ImageBackground, View } from "react-native";
import { Text, ListItem } from "@rneui/themed";

export default function TripCard({ itemData, navigationRef }) {
  return (
    <ListItem
      onPress={() =>
        navigationRef.navigate("TripDetailsScreen", { detailId: itemData.id })
      }
    >
      <ImageBackground
        source={itemData.image}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ListItem.Content style={styles.container}>
          <View>
            <Text style={styles.cardText}>{itemData.name}</Text>
          </View>
          <View style={styles.tripDetails}>
            <Text style={styles.cardTextSmll}>{itemData.dates}</Text>
            <Text style={styles.cardTextSmll}>{itemData.location}</Text>
          </View>
        </ListItem.Content>
      </ImageBackground>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    flex: 1,
    justifyContent: "space-between",
  },
  tripDetails: {
    width: 280,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  cardText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  cardTextSmll: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
