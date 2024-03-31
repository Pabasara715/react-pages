import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Avatar() {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => console.log("Go back")}
        style={styles.backButton}
      >
        <Text>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Select an Avatar</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Let's personalize your edcub profile.</Text>
      <Text style={styles.subtitle}>Choose your preferred avatar.</Text>

      {/* Circle shape */}
      <View style={styles.circle} />

      {/* Avatar Buttons */}
      <View style={styles.avatarContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.avatarButton}>
            <Image
              source={require("../LoginScreen/Avatar_Button_1.png")}
              style={styles.avatarImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatarButton}>
            <Image
              source={require("../LoginScreen/Avatar_Button_2.png")}
              style={styles.avatarImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatarButton}>
            <Image
              source={require("../LoginScreen/Avatar_Button_3.png")}
              style={styles.avatarImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatarButton}>
            <Image
              source={require("../LoginScreen/Avatar_Button_4.png")}
              style={styles.avatarImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.avatarButton}>
            <Image
              source={require("../LoginScreen/Avatar_Button_5.png")}
              style={styles.avatarImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatarButton}>
            <Image
              source={require("../LoginScreen/Avatar_Button_6.png")}
              style={styles.avatarImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatarButton}>
            <Image
              source={require("../LoginScreen/Avatar_Button_7.png")}
              style={styles.avatarImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatarButton}>
            <Image
              source={require("../LoginScreen/Avatar_Button_8.png")}
              style={styles.avatarImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#FF6E77",
    position: "absolute",
    top: 200,
    alignSelf: "center",
    backgroundColor: "transparent",
    zIndex: 1,
  },
  avatarContainer: {
    justifyContent: "center",
    marginTop: 250,
    marginBottom: 40,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  avatarButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "gray", // Placeholder color, you can change it to your desired color
    marginHorizontal: 5, // Add marginHorizontal to increase the gap
    justifyContent: "center",
    alignItems: "center",
  },
  avatarImage: {
    width: 70,
    height: 70,
  },
  nextButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 10, // Adjusted marginTop
    backgroundColor: "#FF6E77",
    alignItems: "center",
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
