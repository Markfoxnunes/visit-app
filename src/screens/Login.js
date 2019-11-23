import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import MaterialIconTextbox from "../components/MaterialIconTextbox";
import MaterialIconTextbox1 from "../components/MaterialIconTextbox1";
import MaterialButtonViolet from "../components/MaterialButtonViolet";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/vc.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <MaterialIconTextbox
        style={styles.materialIconTextbox}
      ></MaterialIconTextbox>
      <MaterialIconTextbox1
        style={styles.materialIconTextbox1}
      ></MaterialIconTextbox1>
      <MaterialButtonViolet
        style={styles.materialButtonViolet}
      ></MaterialButtonViolet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 236,
    height: 200,
    marginTop: 104,
    marginLeft: 72
  },
  materialIconTextbox: {
    width: 299,
    height: 43,
    marginTop: 17,
    marginLeft: 40
  },
  materialIconTextbox1: {
    width: 299,
    height: 43,
    marginTop: 95,
    marginLeft: 42
  },
  materialButtonViolet: {
    width: 303,
    height: 60,
    marginTop: 158,
    alignSelf: "center"
  }
});

export default Untitled;
