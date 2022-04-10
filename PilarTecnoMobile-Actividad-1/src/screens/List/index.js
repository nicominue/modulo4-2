import React, { Component, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  ImageBackground,
  Image,
} from "react-native";
import Header from "../../components/Header";
//import { styles } from './styles'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default List = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Listas</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContent: {
    width: width / 3,
    height: height / 3,
    margin: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContent: {
    flex: 1,
    width,
    height,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rowContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
