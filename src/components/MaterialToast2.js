import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function MaterialToast2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text numberOfLines={1} style={styles.text1}>
        Preencha seu roteiro de visita
      </Text>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText}>UNDO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#323232",
    flexDirection: "row",
    alignItems: "center",
    opacity: 1,
    justifyContent: "space-between",
    paddingRight: 24,
    paddingLeft: 24,
    minWidth: 288,
    borderRadius: 2
  },
  text1: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  button2: {},
  buttonText: {
    color: "#4CAF50",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

export default MaterialToast2;
