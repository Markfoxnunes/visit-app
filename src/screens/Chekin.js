import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import UntitledComponent from "../components/UntitledComponent";
import MaterialUnderlineTextbox3 from "../components/MaterialUnderlineTextbox3";
import MaterialUnderlineTextbox4 from "../components/MaterialUnderlineTextbox4";
import MaterialUnderlineTextbox5 from "../components/MaterialUnderlineTextbox5";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";

function Untitled3(props) {
  return (
    <View style={styles.container}>
      <UntitledComponent style={styles.untitledComponent}></UntitledComponent>
      <MaterialUnderlineTextbox3
        style={styles.materialUnderlineTextbox3}
      ></MaterialUnderlineTextbox3>
      <MaterialUnderlineTextbox4
        style={styles.materialUnderlineTextbox4}
      ></MaterialUnderlineTextbox4>
      <MaterialUnderlineTextbox5
        style={styles.materialUnderlineTextbox5}
      ></MaterialUnderlineTextbox5>
      <MaterialButtonViolet1
        style={styles.materialButtonViolet1}
      ></MaterialButtonViolet1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  untitledComponent: {
    width: 315,
    height: 200,
    marginTop: 101,
    marginLeft: 30
  },
  materialUnderlineTextbox3: {
    width: 308,
    height: 43,
    marginTop: 55,
    marginLeft: 25
  },
  materialUnderlineTextbox4: {
    width: 305,
    height: 43,
    marginTop: 37,
    marginLeft: 28
  },
  materialUnderlineTextbox5: {
    width: 305,
    height: 43,
    marginTop: 34,
    marginLeft: 30
  },
  materialButtonViolet1: {
    width: 327,
    height: 59,
    marginTop: 122,
    alignSelf: "center"
  }
});

export default Untitled3;
