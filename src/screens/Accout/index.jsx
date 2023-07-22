import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import Test from "./Test";

// props state
export default function Accout() {
  return (
    <View>
      <Test name="Q" />
      <Test name="H" />
      <Text>Accout</Text>
    </View>
  );
}
