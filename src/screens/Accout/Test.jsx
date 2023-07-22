import React, { useState } from "react";
import { Text, View, Button } from "react-native";

const Test = (props) => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Hello {props.name}</Text>
      <Text style={{ fontSize: 20 }}>{count}</Text>
      <Button title="ADD" onPress={() => setCount((prev) => prev + 1)}></Button>
    </View>
  );
};

export default Test;
