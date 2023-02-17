import { View, FlatList, StyleSheet } from "react-native";
import { Text, Button, Image } from "@rneui/themed";

import TripScheduleCard from "../components/TripScheduleCard";

import { getTripById, getTripSchedule } from "../data/trips-data";

export default function TripDetailsScreen({ route, navigation }) {
  const { detailId } = route.params;
  const currTrip = getTripById(detailId);
  const renderItem = ({ item }) => (
    <TripScheduleCard itemData={item} navigationRef={navigation} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.headerWrap}>
              <View style={styles.header}>
                <Text h2>{currTrip.name}</Text>
                <Text>{currTrip.location}</Text>
                <Text style={styles.smallTxt}>{currTrip.dates}</Text>
              </View>
              <View style={styles.iconsWrap}>
                <View style={styles.iconItem}>
                  <Image
                    source={require("../assets/icons/transportation-icon.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.smallTxt}>Flights</Text>
                </View>
                <View style={styles.iconItem}>
                  <Image
                    source={require("../assets/icons/accommodation-icon.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.smallTxt}>Hotel</Text>
                </View>
                <View style={styles.iconItem}>
                  <Image
                    source={require("../assets/icons/activities-icon.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.smallTxt}>Activities</Text>
                </View>
                <View style={styles.iconItem}>
                  <Image
                    source={require("../assets/icons/food-icon.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.smallTxt}>Food</Text>
                </View>
              </View>
            </View>
            <View style={styles.schedTitle}>
              <Text>Saturday, January 7th</Text>
            </View>
          </>
        }
        data={getTripSchedule()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <View style={styles.btn}>
            <Button
              title="Back To My Trips"
              onPress={() => navigation.navigate("HomeScreen")}
            />
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 32,
    backgroundColor: "#ffffff",
    flex: 1,
  },
  headerWrap: {
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  header: {
    marginBottom: 16,
  },
  iconsWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconItem: {
    alignItems: "center",
  },
  smallTxt: {
    fontSize: 16,
  },
  icon: {
    width: 70,
    height: 70,
  },
  schedTitle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  btn: {
    marginBottom: 172,
  },
});
