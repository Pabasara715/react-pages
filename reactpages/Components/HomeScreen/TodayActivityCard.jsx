import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TagComponent from "./TagComponent";

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

const TodayActivityCard = (props) => {
  return (
    <ImageBackground
      source={{
        uri: props.imgUrl,
      }}
      style={styles.container}
      imageStyle={{ borderRadius: 15 }}
    >
      <LinearGradient
        style={styles.headingAndSub}
        colors={[props.colour, "transparent"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0.3, 1]}
      >
        <View style={styles.subcontainer}>
          <Text style={styles.heading}>{props.heading}</Text>
          <Text style={styles.heading}>{props.rate}</Text>
        </View>
        <View style={styles.subheading}>
          <Text style={styles.subheading}>{props.subHeading}</Text>
        </View>
      </LinearGradient>

      <View style={[styles.tagviews, { backgroundColor: props.colour }]}>
        <Image
          style={styles.profileImage}
          source={require("../../assets/HomeScreen/Profile_pic.jpg")}
        />

        {props.tags.map((tag, index) => (
          <TagComponent key={index} tag={tag} />
        ))}
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
    margin: 10,
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
    flexDirection: "row",
    color: "white",
    width: "100%",
    flexWrap: "wrap",
    alignItems: "center",
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
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flex: 0.2,
    overflow: "scroll",
  },
  profileImage: {
    width: screenwidth / 15,
    height: screenwidth / 15,
    borderRadius: screenwidth / 15,
    marginBottom: 4,
  },
});
