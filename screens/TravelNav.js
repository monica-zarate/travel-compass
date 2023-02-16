import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import OngoingTripScreen from "./OngoingTripScreen";
import NewTripScreen from "./NewTripScreen";

const Stack = createNativeStackNavigator();

export default function TravelNav() {
  return (
    <Stack.Navigator 
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#0081A7',
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#99ffffff",
        headerStyle: {
          backgroundColor: '#0081A7',
        },
        headerTintColor: '#ffffff',
        headerTitleAlign: 'center',
        tabBarShowLabel: false,
      }}>
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{
          headerShown: false,
        }} />
      <Stack.Screen 
        name="OngoingTrip" 
        component={OngoingTripScreen}
        options={{
          title: 'Ongoing Trip'
        }} />
      <Stack.Screen 
        name="NewTrip" 
        component={NewTripScreen}
        options={{
          title: 'Add New Trip'
        }} />
    </Stack.Navigator>
  );
}
