import { View, FlatList, StyleSheet } from "react-native";
import { Button, Text, Icon } from "@rneui/themed";

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
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.sectionWrap}>
              <Text h2>Hello John</Text>
              <Text>
                Saturday, January 7th {"\n"}7° – Cloudy {"\n"}Whistler, BC
              </Text>
            </View>
            <View style={styles.sectionWrap}>
              <Text h2>Current Trip</Text>
              <FlatList
                data={getCurrentTrip()}
                renderItem={renderCard}
                keyExtractor={(item) => item.id}
              />
            </View>
            <View>
              <Text h2>Upcoming Trips</Text>
            </View>
          </>
        }
        data={getUpcomingTrips()}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <View style={styles.btn}>
            <Button
              title="Add New Trip"
              onPress={() => navigation.navigate("NewTrip")}
            />
          </View>
        }
      />
      <View style={styles.cta}>
        <Icon
          name="plus-thick"
          type="material-community"
          color="#ffffff"
          onPress={() => navigation.navigate("NewTrip")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 32,
    backgroundColor: "#ffffff",
    flex: 1,
  },
  sectionWrap: {
    marginBottom: 32,
  },
  cta: {
    width: 50,
    height: 50,
    backgroundColor: "#F07167",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 32,
    bottom: 32,
    elevation: 3,
  },
  btn: {
    marginBottom: 172,
  },
});
