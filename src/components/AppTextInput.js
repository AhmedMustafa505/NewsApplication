import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, style, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width: "100%" }, style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={"grey"}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={"grey"}
        style={styles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "#031431",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    color: "black",
  },
});

export default AppTextInput;
