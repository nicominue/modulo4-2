import React, { Component, useCallback } from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Icon}  from 'react-native-elements';
import {theme} from '../constants';
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import List from "../screens/List";
import Mapa from "../screens/Mapa";
//import Header from "../components/Header";

const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => {
  const {colors} = theme;
  return (

    <Tab.Navigator
      headerMode="none"
      activeColor= {colors.active}
      inactiveColor={colors.inactive}
      barStyle={{ backgroundColor: colors.bar }}
    >
      <Tab.Screen name="Casa" component={Home} 
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name={'home'} type="font-awesome-5" size={20} color={color} />
        ),
      }} />
      <Tab.Screen name="Perfil" component={Profile} 
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name={'user'} type="font-awesome-5" color={color} size={20} />
        ),
      }} />
      <Tab.Screen name="Mapa" component={Mapa}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name={'map'} type="font-awesome-5" color={color} size={20} />
        ),
      }} /> 
      <Tab.Screen name="Lista" component={List} 
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name={'marker'} type="font-awesome-5" color={color} size={20} />
        ),
      }} />
    </Tab.Navigator>
  );
}
