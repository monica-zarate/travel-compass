// Application's Stacked Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Project imports: Three Parent-child transition screens
import HomeScreen from "./HomeScreen";
import TripDetails from "./TripDetailsScreen";
import NewTripScreen from "./NewTripScreen";

// Stack Navigator will be applied using the Stack constant around all screens.
const Stack = createNativeStackNavigator();

export default function TravelNav() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#0081A7",
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#99ffffff",
        headerStyle: {
          backgroundColor: "#0081A7",
        },
        headerTintColor: "#ffffff",
        headerTitleAlign: "center",
        tabBarShowLabel: false,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TripDetailsScreen"
        component={TripDetails}
        options={{
          title: "Trip Details",
        }}
      />
      <Stack.Screen
        name="NewTrip"
        component={NewTripScreen}
        options={{
          title: "Add New Trip",
        }}
      />
    </Stack.Navigator>
  );
}
