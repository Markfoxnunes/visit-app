import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialMapView from "../components/MaterialMapView";
import MaterialSearchBar from "../components/MaterialSearchBar";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialMapViewStack}>
        <MaterialMapView style={styles.materialMapView}></MaterialMapView>
        <MaterialSearchBar style={styles.materialSearchBar}></MaterialSearchBar>
      </View>
      <MaterialIconTextButtonsFooter
        style={styles.materialIconTextButtonsFooter}
      ></MaterialIconTextButtonsFooter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialMapView: {
    top: 0,
    left: 0,
    width: 375,
    height: 674,
    position: "absolute"
  },
  materialSearchBar: {
    top: 37,
    width: 364,
    height: 56,
    position: "absolute",
    borderColor: "#000000",
    borderWidth: 0,
    borderStyle: "dashed",
    left: 6
  },
  materialMapViewStack: {
    width: 375,
    height: 674
  },
  materialIconTextButtonsFooter: {
    width: 352,
    height: 56,
    marginTop: 2,
    alignSelf: "center"
  }
});

export default Untitled1;
