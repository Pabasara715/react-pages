import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  StatusBar,
  SafeAreaProvider,
  Platform,
  Dimensions,
} from "react-native";

import HomeScreen from "./Screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./Navigations/TabNavigation";
import Login from "./Screens/LoginScreen/SignUp";
import LoginNavigation from "./Navigations/LoginNavigation";
export default function App() {
  console.log(Dimensions.get("screen"));

  
  return (
    <NavigationContainer>
      <LoginNavigation />
    </NavigationContainer> 
  );
}
