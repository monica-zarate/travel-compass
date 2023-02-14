import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import OngoingTripScreen from "./OngoingTripScreen";
import NewTripScreen from "./NewTripScreen";

const Stack = createNativeStackNavigator();

export default function TravelNav() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="OngoingTrip" component={OngoingTripScreen} />
      <Stack.Screen name="NewTrip" component={NewTripScreen} />
    </Stack.Navigator>
  );
}
