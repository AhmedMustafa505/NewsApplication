import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import LoadingScreen from "./src/screens/LoadingScreen";
import MainNavigator from "./src/navigators/MainNavigator";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { firebaseConfig } from "./src/env/firebase";

firebase.initializeApp(firebaseConfig);
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const accessToken = await AsyncStorage.getItem("accessToken");
      if (accessToken !== null) {
        setUser({ accessToken });
      }
      setIsLoading(false);
    };
    checkLoginStatus();
    // Listen for Firebase auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Unsubscribe from the listener when the component unmounts
    return unsubscribe;
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      {user ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
