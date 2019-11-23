import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import UntitledComponent from "../components/UntitledComponent";
import MaterialUnderlineTextbox3 from "../components/MaterialUnderlineTextbox3";
import MaterialButtonViolet3 from "../components/MaterialButtonViolet3";

function Untitled4(props) {
  return (
    <View style={styles.container}>
      <UntitledComponent style={styles.untitledComponent1}></UntitledComponent>
      <MaterialUnderlineTextbox3
        style={styles.materialUnderlineTextbox1}
      ></MaterialUnderlineTextbox3>
      <MaterialUnderlineTextbox3
        style={styles.materialUnderlineTextbox2}
      ></MaterialUnderlineTextbox3>
      <MaterialUnderlineTextbox3
        style={styles.materialUnderlineTextbox3}
      ></MaterialUnderlineTextbox3>
      <MaterialButtonViolet3
        style={styles.materialButtonViolet3}
      ></MaterialButtonViolet3>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  untitledComponent1: {
    width: 315,
    height: 200,
    marginTop: 101,
    marginLeft: 30
  },
  materialUnderlineTextbox1: {
    width: 308,
    height: 43,
    marginTop: 52,
    marginLeft: 30
  },
  materialUnderlineTextbox2: {
    width: 308,
    height: 43,
    marginTop: 33,
    marginLeft: 30
  },
  materialUnderlineTextbox3: {
    width: 308,
    height: 43,
    marginTop: 36,
    marginLeft: 30
  },
  materialButtonViolet3: {
    width: 327,
    height: 59,
    marginTop: 127,
    alignSelf: "center"
  }
});

export default Untitled4;
