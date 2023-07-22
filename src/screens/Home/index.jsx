import React from "react";
import { ScrollView, Text } from "react-native";
import PostComponents from "../../components/PostComponents";
import Header from "./Header";
export default function Home({ navigation }) {
  return (
    <ScrollView>
      <Header />
    </ScrollView>
  );
}
