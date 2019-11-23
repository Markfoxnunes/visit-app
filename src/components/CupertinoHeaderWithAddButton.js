import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function CupertinoHeaderWithAddButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftWrapper}></View>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          Roteiro
        </Text>
      </View>
      <View style={styles.rightWrapper}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFF4",
    flexDirection: "row",
    paddingRight: 8,
    paddingLeft: 8
  },
  leftWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#000",
    fontSize: 17,
    fontFamily: "roboto-regular",
    lineHeight: 17
  },
  rightWrapper: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  }
});

export default CupertinoHeaderWithAddButton;
