import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingScreen from "./LoadingScreen";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import Title from "../components/Title";
import { HomeScreenStyles } from "../config/styles";

function HomeScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is already logged in
    const checkLoginStatus = async () => {
      const accessToken = await AsyncStorage.getItem("accessToken");
      if (accessToken !== null) {
        // User is already logged in
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
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      await AsyncStorage.removeItem("accessToken");
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Screen>
      <Title>This is an app to review all news</Title>
      <View style={HomeScreenStyles.buttonContainer}>
        {user && (
          <AppButton
            title="Review Daily News"
            onPress={() => navigation.navigate("News")}
          />
        )}
        {user ? (
          <AppButton title="Logout" onPress={handleLogout} />
        ) : (
          <AppButton
            title="Login"
            onPress={() => navigation.navigate("Login")}
          />
        )}
      </View>
    </Screen>
  );
}

export default HomeScreen;
