import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import SettingScreen from "../Screens/SettingScreen";
import Memories from "../Screens/Memories";
import { Ionicons } from "@expo/vector-icons";
import HeaderComponent from "../Components/HomeScreen/HeaderComponent";
import ActivityNavitgation from "./ActivityNavitgation";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "ActivityNavitgation") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Memories") {
            iconName = focused ? "images" : "images-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="ActivityNavitgation"
        component={ActivityNavitgation}
        options={{ headerShown: false }}
      />

      <Tab.Screen name="Memories" component={Memories} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
