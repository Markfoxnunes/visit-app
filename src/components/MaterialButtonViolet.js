import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonViolet(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}>LOGIN</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    width: 63,
    height: 28,
    color: "#fff",
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "space-between",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 18,
    marginLeft: 25
  }
});

export default MaterialButtonViolet;
