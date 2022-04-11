import React, { Component, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert
} from "react-native";
import { Header as HeaderRN, Icon } from "react-native-elements";
import { theme } from '../constants';
import { styles } from "../screens/Home";
//import { styles } from './styles'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


export default Header = (props) => {

  const {colors, headerHeight} = theme
  const { leftIcon, leftAction, title } = props

  const _rocket = () => {
    Alert.alert('Cohete', 'Presionaste el cohete', 
    [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
    ]);
    }

  return (
    <View style={{position: 'absolute', top:0}}>    
    <HeaderRN
    barStyle="light-content"
    containerStyle={{height: headerHeight}}
    backgroundColor={colors.bar}
    leftComponent={{
        icon: 'menu',
        color: '#fff',
    }}
    rightComponent={
        <View style={styles.headerRight}>
            <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => _rocket()}
            >
                <Icon type="antdesign" name="rocket1" color="#fff" size={30} />
            </TouchableOpacity>
        </View>
    }
    centerComponent={{ text: title?title: 'PilarTecno', style: { color: '#fff' } }}
    />
    </View>
    )
    }