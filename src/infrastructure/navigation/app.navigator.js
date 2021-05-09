import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../components/utilities/safe-area.component";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, View } from "react-native";
import { RestaurantsNavigator } from "./restaurant.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

        <Button title="Logout" onPress={() => onLogout()} />
      </View>
    </SafeArea>
  );
};

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
      activeTintColor: "dodgerblue",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="Home" component={RestaurantsNavigator} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

export const AppNavigator = () => {
  return <Tabs />;
};
