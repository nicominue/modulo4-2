import React, { Component, useCallback, useState, useEffect} from "react";
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
import MapView, { Marker } from 'react-native-maps';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ASPECT_RATIO = width / height;
const LATITUDE = -29.4372435;
const LONGITUDE = -66.894294;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default Mapa = (props) => {
  const [ region, setRegion ] = useState({
    latitude:LATITUDE,
    longitude:LONGITUDE,
    latitudeDelta:LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  })

  useEffect(() => {
    // _getLocation();
  }, [])

  onRegionChange = region => {
    this.setState({ region });
  };

  return (
    <View style={styles.container}>
      <Header />
      <MapView
      initialRegion={region}
      style={styles.map}
      />
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
  map: {
    ...StyleSheet.absoluteFillObject,
    width,
    height,
    alignSelf:'center'
    },
});
