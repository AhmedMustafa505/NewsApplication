import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import NewsScreen from "../screens/NewsScreen";
import LoginScreen from "../screens/LoginScreen";
import ArticleScreen from "../screens/ArticleScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#031431" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="News" component={NewsScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Article" component={ArticleScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
