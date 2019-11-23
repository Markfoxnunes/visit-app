import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function UntitledComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/heliar.jpeg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 315,
    height: 200
  }
});

export default UntitledComponent;
