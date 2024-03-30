import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;
const colorList = [
  { offset: "0%", color: "#231557", opacity: "1" },

  { offset: "100%", color: "#FFF800", opacity: "0" },
];

const TodayActivityCard = (props) => {
  return (
    <ImageBackground
      source={require("../../assets/HomeScreen/greenkid.jpg")}
      style={styles.container}
      imageStyle={{ borderRadius: 15 }}
    >
      <LinearGradient
        style={styles.headingAndSub}
        colors={["green", "rgba(0, 255, 0, 0)"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0.5, 1]}
      >
        <View style={styles.subcontainer}>
          <Text style={styles.heading}>{props.heading}</Text>
          <Text style={styles.heading}>{props.rate}</Text>
        </View>
        <View style={styles.subheading}>
          <Text style={styles.subheading}>{props.subHeading}</Text>
        </View>
      </LinearGradient>

      <View style={styles.tagviews}>
        <View style={styles.subcontainer}>
          <Text style={styles.heading}>{props.heading}</Text>
          <Text style={styles.heading}>{props.rate}</Text>
        </View>
        <View style={styles.subheading}>
          <Text style={styles.subheading}>{props.subHeading}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TodayActivityCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    width: screenwidth / 1.5,
    height: screenwidth,
    objectFit: "contain",
    margin: 20,
  },
  headingAndSub: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 0.4,
  },

  subcontainer: {
    display: "flex",
    color: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    color: "white",
    fontSize: 12,
    paddingBottom: 10,
  },
  subheading: {
    width: "100%",
    fontSize: 15,
    display: "flex",
    justifyContent: "flex-start",
    color: "white",
    fontWeight: "bold",
    lineHeight: 18,
  },
  tagviews: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "green",
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flex: 0.2,
  },
});
