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
  let count = stateStore(state => state.count);
  let countPlus = stateStore(state => state.addCount);

  return (
    <View style={styles.container}>
      <Text>ACCOUNT</Text>
      <Text
        style={{ margin: 20, color: "white", fontSize: 20, fontWeight: "bold" }}
      >
        {count}
      </Text>
      <TouchableOpacity onPress={countPlus(6)}>
        <Text style={{ padding: 30, backgroundColor: "white" }}>Plus</Text>
      </TouchableOpacity>
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
