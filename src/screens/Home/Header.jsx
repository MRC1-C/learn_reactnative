import React from "react";
import { Text } from "react-native";
import { View } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "blue",
        padding: 20,
      }}
    >
      <Text>Header</Text>
    </View>
  );
};

export default Header;
