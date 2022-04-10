import React, { Component, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Pressable,
  ImageBackground,
  Alert,
  Image
} from "react-native";
import  Header from '../../components/Header';
import {theme} from '../../constants';
import {Icon} from  'react-native-elements';
//import { styles } from './styles'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


export default Home = ({navigation}) => {

  const {headerHeight} = theme;

  const _onPress = () => {
    Alert.alert('Ya te encuentras en home', [
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground
        style={styles.mainContent}
        source={require("../../assets/images/background/oreo.png")}
      >
        <Header />
        <View style={{paddingTop:headerHeight}}>
          <View style={styles.rowContent}>
            
            <Pressable
                          style={[styles.buttonContent, { backgroundColor: "green" }]}
              onPress={() => _onPress() }
          >
              <Text style={styles.title}>Home</Text>

            </Pressable>
            <Pressable
              style={[styles.buttonContent, { backgroundColor: "yellow" }]}
              onPress={() => navigation.navigate("Perfil")}
            >
              <Text style={styles.title}>Perfil</Text>
            </Pressable>
          </View>
          <View style={styles.rowContent}>
            <Pressable
              style={[styles.buttonContent, { backgroundColor: "purple" }]}
              onPress={() => navigation.navigate("Lista")}
            >
              <Text style={styles.title}>Lista</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonContent, { backgroundColor: "brown" }]}
              onPress={() => navigation.navigate("Mapa")}
            >
              <Text style={styles.title}>Mapa</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContent: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 100,
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
  modalContent: {
    //flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    margin: 50,
    padding: 40,
    borderRadius: 10,
  },
  modalText: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
