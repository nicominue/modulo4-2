import "react-native-gesture-handler";
import React, { Component, useCallback } from "react";
import { View, Text } from "react-native";
import AppStack from "../routes/app";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "../Store";

export default App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};
