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

export default function App() {
  console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    alignItems: "center",
  },
});
