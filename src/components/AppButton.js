import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#152b53",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#031431",
  },
  text: {
    color: "#fafbfd",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
