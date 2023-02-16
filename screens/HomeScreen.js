import { View, FlatList, StyleSheet } from "react-native";
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
    <View>
      <View>
        <Text style={styles.h2}>Hello John</Text>
        <Text>
          Saturday, January 7th {"\n"} 7° – Cloudy {"\n"} Whistler, BC
        </Text>
      </View>
      <View>
        <Text style={styles.h2}>Current Trip</Text>
        <FlatList
          data={getCurrentTrip()}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View>
        <Text style={styles.h2}>Upcoming Trips</Text>
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
  h2: {
    color: "#151515",
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 60,
  },
  body: {
    color: "#3B3B3B",
    fontSize: 20,
  },
});
