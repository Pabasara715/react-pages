import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Platform,
  Dimensions,
} from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./Navigations/TabNavigation";
export default function App() {
  console.log(Dimensions.get("screen"));

  return (
    <NavigationContainer>
      <TabNavigation />
      {/* <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    alignItems: "center",
  },
});
