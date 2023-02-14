import * as React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// fonts here

import { ThemeProvider } from "@rneui/themed";
import { travelCompassTheme } from "./themes/travelCompassTheme";

import TravelNav from "./screens/TravelNav";
import DiscoverScreen from "./screens/DiscoverScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import AccountScreen from "./screens/AccountScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  // useFonts() hook & conditional to show the Activity Indicator
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={travelCompassTheme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: "#0081A7",
              tabBarInactiveTintColor: "000000",
            }}
          >
            <Tab.Screen
              name="Home"
              component={TravelNav}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen name="Discover" component={DiscoverScreen} />
            <Tab.Screen name="Notifications" component={NotificationsScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
