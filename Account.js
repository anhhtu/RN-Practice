import React from "react";
import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import stateStore from "./stateStore";


export default function Account({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>ACCOUNT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ABFD",
    justifyContent: "center",
    alignItems: "center",
  },
});
