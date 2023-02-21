import React from "react";
import { useEffect, useState } from "react";
import { Divider } from "@rneui/base";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function ProductDetail({ route, navigation }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>
          Detail
        </Text>
      </View>

      <View style={styles.productView}>
        <Image
          style={{ width: deviceWidth - 60, height: deviceWidth - 60 }}
          source={{ uri: item.imagePhone }}
        />
        <Text style={{ fontSize: 35, fontWeight: "600", marginTop: 20 }}>
          {item.name}
        </Text>
        <Text style={{ fontSize: 25, fontWeight: "600", color: "#EE0033" }}>
          {item.price} đ
        </Text>
        <Divider style={{ marginTop: 20 }} width={1} color={"black"} />
        <View
          style={{
            borderWidth: 1,
            borderColor: "#C4C4C4",
            borderRadius: 10,
            marginTop: 30,
            padding: 10,
            height: 140,
          }}
        >
          <Text
            style={{
              position: "absolute",
              top: -10,
              left: 20,
              color: "#007EBB",
              backgroundColor: "white",
              paddingHorizontal: 5,
            }}
          >
            Product details:
          </Text>
          <Text style={{ paddingTop: 10, paddingHorizontal: 10 }}>
            {item.dependencies}
          </Text>
        </View>
      </View>

      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#A5A5A5",
          }}
          onPress={() => {
            navigation.navigate("Cart", {item});
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Add to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#00ABFD",
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Buy now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

let deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  titleRow: {
    flex: 2,
    backgroundColor: "#00ABFD",
    justifyContent: "center",
    width: deviceWidth,
    paddingLeft: 40,
  },

  productView: {
    flex: 13,
    padding: 20,
  },

  bottomButtons: {
    flex: 1,
    flexDirection: "row",
  },
});
