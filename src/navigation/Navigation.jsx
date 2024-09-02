import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Header from "../compontents/Header";
import publicRoute from "../routes/index.jsx";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home1">
        <Stack.Screen name="Home1" component={Header} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;