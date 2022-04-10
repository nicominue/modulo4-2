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
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import { Input, Icon, Button} from "react-native-elements";
import { actions } from "../../Store/actions";
//import { styles } from './styles'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default Profile = () => {

  const dispatch = useDispatch()

  const _singOut = async () => {
    try {
      await AsyncStorage.setItem('user', false);
    } catch (e) {
      // saving error
    }
    dispatch(actions.user.setUser(false));
  }
  return (
        <View style={styles.container}>
         <Header />
         <Image
            style={styles.avatar}
            source={require("../../assets/images/avatar.jpg")}
          />
          <View style={styles.body}>
            <Text style={styles.name}>Martin Albarracín</Text>
            <Text style={styles.age}>Edad: 25</Text>
            </View>
         <View style={{marginTop:20, alignItems:'center', width:'90%'}}>
            <Button
               title='Salir'
               onPress={()=>_singOut()}
               containerStyle={{width: '50%', backgroundColor: '#00a680'}}
            />
            </View>           
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
  avatar: {
    width: width / 3,
    height: width / 3,
    borderRadius: width / 3 / 2,
    borderWidth: 1,
    borderColor: '#000',
  },
  body: { 
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 10,
  },
  age:{
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
