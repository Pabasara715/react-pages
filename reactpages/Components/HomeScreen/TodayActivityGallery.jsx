import React from "react";
import { View, Text } from "react-native";
import TodayActivityCard from "./TodayActivityCard";

const TodayActivityGallery = () => {
  return (
    <View>
      <TodayActivityCard
        heading="Activity 01"
        subHeading="Plants, flowers, hearbs, or vegetables and learn about gardening"
        rate={10}
      />
    </View>
  );
};

export default TodayActivityGallery;
