import React, { Component, useCallback, useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  ImageBackground,
} from "react-native";
import { Icon, Image, Button } from "react-native-elements";
import Header from "../../components/Header";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ASPECT_RATIO = width / height;
const LATITUDE = -29.4372435;
const LONGITUDE = -66.894294;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default Mapa = (props) => {
  const [mapType, setMapType] = useState("standard");

  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  useEffect(() => {
    // _getLocation();
  }, []);

  onRegionChange = (region) => {
    setRegion(region);
  };

  const fitCoordinates = async() => {
    console.log('centrando mapa')
    this._getLocation()
    }

  _getLocation = async () => {
    await Geolocation.getCurrentPosition(
      async (posicion) => {
        const longitude = posicion.coords.longitude;
        const latitude = posicion.coords.latitude;
        this.mapRef.animateToRegion(
          {
            latitude,
            longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
          },
          1000
        );
        setRegion({ region: { ...region, longitude, latitude } });
        console.log(
          "posicion actual... Latitud: " +
            `${JSON.stringify(longitude)}` +
            " latitud: " +
            `${JSON.stringify(latitude)}`
        );
      },
      (error) => {
        console.log("");
        console.log("");
        console.log("");
        console.log("");
        console.log(error.code, error.message);
      },
      {
        accuracy: {
          android: "high",
          ios: "best",
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
      }
    );
  };

  const changeMapType = () => {
    if (mapType === "standard") {
      setMapType("satellite");
    } else {
      setMapType("standard");
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <MapView
        initialRegion={region}
        style={styles.map}
        mapType={mapType}
        onRegionChangeComplete={(region) => onRegionChange(region)}
      ></MapView>
      <View
        style={{
          position: "absolute",
          zIndex: 2,
          marginTop: height / 7,
          right: "1%",
          flexDirection: "row",
          backgroundColor: "white",
          borderRadius: 100,
          width: width / 10,
          alignSelf: "flex-end",
          margin: 20,
          marginRight: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon
          name="crosshairs"
          type="font-awesome"
          color="#8d2d84"
          size={width / 10}
          onPress={() => fitCoordinates()}
        />
      </View>
      <View style={styles.markerFixed}>
        <Image
          style={styles.marker}
          source={require("../../assets/images/location.png")}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 10,
          top: 100,
          position: "absolute",
          width: "100%",
        }}
      >
        <Button title="Change Map Type" onPress={() => changeMapType()} />
      </View>

      <SafeAreaView style={styles.footer}>
        <Text style={styles.region}>
          longitud:
          {JSON.stringify(region.longitude)}
          {"\n"}latitud:
          {JSON.stringify(region.latitude)}
        </Text>
      </SafeAreaView>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    bottom: 30,
    position: "absolute",
    width: "100%",
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
    alignSelf: "center",
  },
  markerFixed: {
    left: "50%",
    marginLeft: -24,
    marginTop: -48,
    position: "absolute",
    top: "50%",
  },
  marker: {
    height: 48,
    width: 48,
  },
  region: {
    color: "#fff",
    lineHeight: 20,
    margin: 20,
    alignSelf: "center",
  },
});
