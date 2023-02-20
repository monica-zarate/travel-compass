// Native & RNEUI library elements
import { View, FlatList, StyleSheet } from "react-native";
import { Button, Text, Icon } from "@rneui/themed";

// Project imports: component & data
import TripCard from "../components/TripCard";
import { getTrips } from "../data/trips-data";

export default function HomeScreen({ navigation }) {
  // I'm making use of two Flat Lists, one is nested inside the Header component of another.
  // The reason why the Home Screen is one FlatList with List Header & List Footer Components is how I was able to resolve making the screen scrollable, while still having more elements outside of each list item on the screen.

  // Filtering current and upcoming trips from the received data
  const getCurrentTrip = () => {
    return getTrips().filter((__) => __.isActive === true);
  };

  const getUpcomingTrips = () => {
    return getTrips().filter((__) => __.isActive === false);
  };

  // Render card will pass an object and the navigation information to the Trip Card component, to print a card per item.
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
