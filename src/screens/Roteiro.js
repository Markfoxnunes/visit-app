import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CupertinoHeaderWithAddButton from "../components/CupertinoHeaderWithAddButton";
import MaterialCheckbox from "../components/MaterialCheckbox";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialUnderlineTextbox1 from "../components/MaterialUnderlineTextbox1";
import MaterialUnderlineTextbox2 from "../components/MaterialUnderlineTextbox2";
import MaterialToast2 from "../components/MaterialToast2";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";

function Untitled2(props) {
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithAddButton
        style={styles.cupertinoHeaderWithAddButton}
      ></CupertinoHeaderWithAddButton>
      <View style={styles.materialCheckboxStackColumnRow}>
        <View style={styles.materialCheckboxStackColumn}>
          <View style={styles.materialCheckboxStack}>
            <MaterialCheckbox
              style={styles.materialCheckbox}
            ></MaterialCheckbox>
            <MaterialCheckbox
              style={styles.materialCheckbox1}
            ></MaterialCheckbox>
            <MaterialCheckbox
              style={styles.materialCheckbox2}
            ></MaterialCheckbox>
            <MaterialCheckbox
              style={styles.materialCheckbox3}
            ></MaterialCheckbox>
          </View>
          <MaterialCheckbox style={styles.materialCheckbox4}></MaterialCheckbox>
        </View>
        <View style={styles.materialUnderlineTextboxColumn}>
          <MaterialUnderlineTextbox
            style={styles.materialUnderlineTextbox}
          ></MaterialUnderlineTextbox>
          <MaterialUnderlineTextbox1
            style={styles.materialUnderlineTextbox1}
          ></MaterialUnderlineTextbox1>
        </View>
      </View>
      <View style={styles.materialCheckbox5ColumnRow}>
        <View style={styles.materialCheckbox5Column}>
          <MaterialCheckbox style={styles.materialCheckbox5}></MaterialCheckbox>
          <MaterialCheckbox style={styles.materialCheckbox6}></MaterialCheckbox>
          <MaterialCheckbox style={styles.materialCheckbox7}></MaterialCheckbox>
          <MaterialCheckbox style={styles.materialCheckbox8}></MaterialCheckbox>
        </View>
        <View style={styles.materialUnderlineTextbox2Stack}>
          <MaterialUnderlineTextbox2
            style={styles.materialUnderlineTextbox2}
          ></MaterialUnderlineTextbox2>
          <MaterialUnderlineTextbox2
            style={styles.materialUnderlineTextbox3}
          ></MaterialUnderlineTextbox2>
          <MaterialUnderlineTextbox2
            style={styles.materialUnderlineTextbox4}
          ></MaterialUnderlineTextbox2>
          <MaterialUnderlineTextbox2
            style={styles.materialUnderlineTextbox5}
          ></MaterialUnderlineTextbox2>
        </View>
      </View>
      <MaterialToast2 style={styles.materialToast2}></MaterialToast2>
      <MaterialButtonViolet1
        style={styles.materialButtonViolet1}
      ></MaterialButtonViolet1>
      <MaterialIconTextButtonsFooter
        style={styles.materialIconTextButtonsFooter1}
      ></MaterialIconTextButtonsFooter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoHeaderWithAddButton: {
    width: 344,
    height: 44,
    marginTop: 36,
    alignSelf: "center"
  },
  materialCheckbox: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox1: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox2: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckbox3: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  materialCheckboxStack: {
    width: 40,
    height: 40
  },
  materialCheckbox4: {
    width: 40,
    height: 40
  },
  materialCheckboxStackColumn: {
    width: 40,
    marginTop: 10
  },
  materialUnderlineTextbox: {
    width: 282,
    height: 43,
    marginLeft: 1
  },
  materialUnderlineTextbox1: {
    width: 283,
    height: 43,
    marginTop: 4
  },
  materialUnderlineTextboxColumn: {
    width: 283,
    marginLeft: 4
  },
  materialCheckboxStackColumnRow: {
    height: 90,
    flexDirection: "row",
    marginTop: 39,
    marginLeft: 21,
    marginRight: 27
  },
  materialCheckbox5: {
    width: 40,
    height: 40
  },
  materialCheckbox6: {
    width: 40,
    height: 40
  },
  materialCheckbox7: {
    width: 40,
    height: 40
  },
  materialCheckbox8: {
    width: 40,
    height: 40
  },
  materialCheckbox5Column: {
    width: 40
  },
  materialUnderlineTextbox2: {
    top: 0,
    left: 4,
    width: 283,
    height: 43,
    position: "absolute"
  },
  materialUnderlineTextbox3: {
    top: 38,
    left: 4,
    width: 283,
    height: 43,
    position: "absolute"
  },
  materialUnderlineTextbox4: {
    top: 77,
    left: 0,
    width: 283,
    height: 43,
    position: "absolute"
  },
  materialUnderlineTextbox5: {
    top: 114,
    left: 0,
    width: 283,
    height: 43,
    position: "absolute"
  },
  materialUnderlineTextbox2Stack: {
    width: 287,
    height: 157
  },
  materialCheckbox5ColumnRow: {
    height: 160,
    flexDirection: "row",
    marginLeft: 21,
    marginRight: 27
  },
  materialToast2: {
    width: 322,
    height: 48,
    marginTop: 13,
    alignSelf: "center"
  },
  materialButtonViolet1: {
    width: 327,
    height: 59,
    marginTop: 182,
    marginLeft: 21
  },
  materialIconTextButtonsFooter1: {
    width: 352,
    height: 56,
    marginTop: 5,
    alignSelf: "center"
  }
});

export default Untitled2;
