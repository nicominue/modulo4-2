import React, { useState } from "react";
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
import Header from "../../../components/Header";
import { Input, Icon, Button} from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { actions } from '../../../Store/actions';
import { useSelector, useDispatch } from 'react-redux';

//import { styles } from './styles'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default Singin = () => {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState(""); 

    const dispatch = useDispatch();
const onChangeEmail = (value) => {
    setEmail(value);
}

const onChangePw = (value) => {
    setPw(value);
}

const _singIn = async () => {
    try {
      await AsyncStorage.setItem('user', true);
    } catch (e) {
      // saving error
    }
    dispatch(actions.user.setUser(true));
}

  return (
    <View style={styles.container}>
      
     <View style={{flexDirection:'column', width }}>
         <View style={{marginVertical:'10%'}}>
         <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18, color:'#606060'}}>Ingresar a Pilar Tecno</Text>
         <Text>{email}</Text>
         <Text>{pw}</Text>
         </View>
        <Input
            placeholder="Correo Electronico"
            leftIcon={{type: 'font-awesome', name: 'user'}}
            onChangeText={value=>onChangeEmail(value)}
            />
        <Input
            placeholder="Contraseña"
            leftIcon={{type: 'font-awesome', name: 'lock'}}
            onChangeText={value=>onChangePw(value)}
            keyboardType='number-pad'
            secureTextEntry
            autoCorrect={false}
            value={pw}
            enablesReturnKeyAutomatically
            rightIcon={pw?{type: 'font-awesome-5', name: 'eye-slash'}: {type: 'font-awesome-5', name: 'eye'}} onPress={()=>{
               setPw(!pw)
            }}
            />
         <View style={{alignItems:'center'}}>
            <Button
               title='Ingresar'
               onPress={()=>_singIn()}
               containerStyle={{width: '50%', backgroundColor: '#00a680'}}
            />
            </View>
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
});
