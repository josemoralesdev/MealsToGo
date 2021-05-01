import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../components/utilities/safe-area.component";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { RestaurantsNavigator } from "./restaurant.navigator";

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "restaurant",
  Settings: "settings",
  Map: "ios-map",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const Tabs = () => (
  <Tab.Navigator
    screenOptions={createScreenOptions}
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="Home" component={RestaurantsNavigator} />
    <Tab.Screen name="Map" component={Map} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};
