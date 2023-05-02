import React from "react";
import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: "#031431",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 8,
    borderWidth: 3,
    margin: 20,
    padding: 15,
    borderColor: "#031431",
  },
});

export default Title;
