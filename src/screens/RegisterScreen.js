import React from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppTextInput from "../components/AppTextInput";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Formik } from "formik";
import * as Yup from "yup";
import { LoginScreenStyles } from "../config/styles";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import Title from "../components/Title";

function RegisterScreen({ navigation }) {
  const handleRegistration = async (values) => {
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password);
      const accessToken = response.user.refreshToken;
      await AsyncStorage.setItem("accessToken", accessToken);
      navigation.navigate("Home");
    } catch (error) {
      let errorMessage = error.message.substring(10);
      alert(errorMessage);
      console.log(errorMessage);
    }
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format")
      .label("Email"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters")
      .label("Password"),
  });
  return (
    <Screen>
      <Title>{"Register using your email"}</Title>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleRegistration(values)}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <View style={LoginScreenStyles.container}>
            <View>
              <AppTextInput
                placeholder="Email"
                icon="email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
                textContentType="emailAddress"
              />
              {touched.email && (
                <Text style={LoginScreenStyles.error}>{errors.email}</Text>
              )}
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
                textContentType="password"
                secureTextEntry
              />
              {touched.password && (
                <Text style={LoginScreenStyles.error}>{errors.password}</Text>
              )}
            </View>

            <AppButton title="Register" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </Screen>
  );
}

export default RegisterScreen;
