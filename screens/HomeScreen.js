import { View, FlatList, StyleSheet, PixelRatio } from "react-native";
import { Button, Text } from "@rneui/themed";

import TripCard from "../components/TripCard";
import { getTrips } from "../data/trips-data";

export default function HomeScreen({ navigation }) {
  const getCurrentTrip = () => {
    return getTrips().filter((__) => __.isActive === true);
  };

  const getUpcomingTrips = () => {
    return getTrips().filter((__) => __.isActive === false);
  };

  const renderCard = ({ item }) => (
    <TripCard itemData={item} navigationRef={navigation} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.greet}>
        <Text h2>Hello John</Text>
        <Text>
          Saturday, January 7th {"\n"}7° – Cloudy {"\n"}Whistler, BC
        </Text>
      </View>
      <View>
        <Text h2>Current Trip</Text>
        <FlatList
          data={getCurrentTrip()}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View>
        <Text h2>Upcoming Trips</Text>
        <FlatList
          data={getUpcomingTrips()}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
        />
      </View>
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 32,
    paddingBottom: 344,
    backgroundColor: "#ffffff",
  },
  greet: {
    marginBottom: 32,
  },
});
