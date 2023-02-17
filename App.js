import * as React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { ThemeProvider } from "@rneui/themed";
import { travelCompassTheme } from "./themes/travelCompassTheme";

import TravelNav from "./screens/TravelNav";
import DiscoverScreen from "./screens/DiscoverScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import AccountScreen from "./screens/AccountScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={travelCompassTheme}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
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
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Discover"
              component={DiscoverScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="compass"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Notifications"
              component={NotificationsScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="bell"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Account"
              component={AccountScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="account"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
