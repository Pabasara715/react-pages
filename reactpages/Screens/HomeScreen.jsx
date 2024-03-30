import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileCard from "../Components/HomeScreen/ProfileCard";
import TodayActivityGallery from "../Components/HomeScreen/TodayActivityGallery";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileCard />
      <TodayActivityGallery />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
