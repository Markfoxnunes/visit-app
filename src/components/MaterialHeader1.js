import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialHeader1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.leftIconButton}>
        <MaterialCommunityIconsIcon
          name="menu"
          style={styles.leftIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <View style={styles.leftIconButtonFiller}></View>
      <TouchableOpacity style={styles.rightIconButton}>
        <MaterialCommunityIconsIcon
          name="dots-vertical"
          style={styles.rightIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(63,81, 81,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  leftIconButton: {
    padding: 11,
    marginLeft: 5,
    marginTop: 5
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 24
  },
  leftIconButtonFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rightIconButton: {
    alignItems: "center",
    padding: 11,
    marginRight: 5,
    marginTop: 5
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 24
  }
});

export default MaterialHeader1;
