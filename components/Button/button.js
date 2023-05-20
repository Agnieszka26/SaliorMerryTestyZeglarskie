import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-web";

const DefaultButton = ({ text, handlePress, size }) => {
  return (
    <Text>text</Text>
    // <Button styles={styles}
    // onPress={handlePress}
    // title={text} />
  );
};

export default DefaultButton;

const styles = StyleSheet.create({
  width: 250,
  height: 100,
  background: "#FFFFFF",
  color: "#000000",
  borderRadius: 16,
});
