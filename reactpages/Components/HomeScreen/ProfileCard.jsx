import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import * as Progress from "react-native-progress";

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

const ProfileCard = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Image
          style={styles.profileImage}
          source={require("../../assets/HomeScreen/Profile_pic.jpg")}
        />
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.name}>Anya & Ciri</Text>
          <Text style={styles.quote}>
            A bond of joy and love of anya princes, ciri
          </Text>
        </View>
        <CircularProgress
          value={10}
          activeStrokeWidth={5}
          inActiveStrokeWidth={5}
          strokeLinecap="squre"
          radius={screenwidth / 14}
          inActiveStrokeColor={"#fff"}
          progressValueColor={"#fff"}
          valueSuffix={"x"}
          activeStrokeColor="#ff959a"
          title="Time"
          titleFontSize={8}
          titleColor="#fff"
        />
      </View>
      <View style={styles.barcontainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.quote}>Achievement Level</Text>
          <Text style={styles.quote}>70</Text>
        </View>
        <Progress.Bar
          color="white"
          unfilledColor="rgba(255, 255, 255, 0.5)"
          borderWidth={0}
          progress={0.7}
          width={screenwidth - 80}
          height={4}
        />
      </View>
    </View>
  );
};

export default ProfileCard;
const styles = StyleSheet.create({
  maincontainer: {
    display: "flex",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#ff5e64",
    width: screenwidth - 50,
    padding: 10,
  },
  barcontainer: {
    marginTop: 4,
    color: "#fff",
  },

  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  profileImage: {
    width: screenwidth / 5,
    height: screenwidth / 5,
    borderRadius: screenwidth / 6,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },

  quote: {
    color: "white",
    fontSize: 10,
    display: "flex",
    lineHeight: 20,
  },
  welcomeTextContainer: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
});