import 'react-native-gesture-handler';
import React, { Component, useCallback } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from "../screens/List";
import Profile from "../screens/Profile";
import Mapa from "../screens/Mapa";
import Login from "../screens/Auth/SingIn"
import {Tabs} from "./Tabs";
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const AppStack = () => {

  const user = useSelector(state => state.user.user);

    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        { user ?
          <Stack.Screen name="AppStack" component={Tabs} />
          :
          <Stack.Screen name="Login" component={Login} />
        }
        
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Map" component={Mapa} />
      </Stack.Navigator>
    );
  }

  export default AppStack;