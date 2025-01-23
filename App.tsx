import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Quiz from "./pages/Quiz";
import Home from "./pages/Home";
import Levels from "./pages/Levels";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Quiz" component={Quiz}></Stack.Screen>
        <Stack.Screen name="Levels" component={Levels}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
