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
  Dimensions,
} from "react-native";

export default function Login({ navigation }) {
  const [productList, setProductList] = useState();
  const getProductList = async (text) => {
    await fetch("https://60c7a3edafc88600179f5766.mockapi.io/listPhone")
      .then((response) => response.json())
      .then((json) => {
        setProductList(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getProductList();
  }, []);

  const renderPost = (item) => {
    return (
      <TouchableOpacity onPress={() => {
        navigation.navigate("ProductDetail", {item});
      }}>
        <View style={styles.product}>
          <Image
            style={{ width: 120, height: 120 }}
            source={{ uri: item.imagePhone }}
          />
          <Text
            style={{
              fontSize: 16,
              marginTop: 15,
              paddingLeft: 20,
              alignSelf: "flex-start",
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginTop: 5,
              paddingLeft: 20,
              alignSelf: "flex-start",
              color: "#EE0033",
            }}
          >
            {item.price} đ
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Image source={require("./assets/logo.png")} style={styles.titleLogo} />
        <Text style={styles.titleText}>Tech Store</Text>
      </View>

      <TextInput
        style={styles.searchBarInput}
        placeholder="Enter here"
        onFocus={() => {
          navigation.navigate("SearchScreen");
        }}
      />

      <View style={styles.productView}>
        <FlatList
          data={productList}
          renderItem={({ item }) => renderPost(item)}
          keyExtractor={(item) => item.id}
          numColumns={2}
          nestedScrollEnabled
        />
      </View>
    </View>
  );
}

let deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "#242526",
    justifyContent: "center",
    alignItems: "center",
  },

  titleRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00ABFD",
    width: "100%",
    paddingTop: 15,
  },

  titleLogo: {
    width: 110,
    height: 110,
  },

  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },

  searchBarInput: {
    height: 47,
    width: deviceWidth - 28,
    margin: 12,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
  },

  productView: {
    flex: 6,
    backgroundColor: "#242526",
    borderWidth: 1,
    width: deviceWidth,
    alignItems: "center",
  },

  product: {
    backgroundColor: "white",
    height: deviceWidth / 2 + 20,
    width: (deviceWidth - 45) / 2,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 10,
  },
});
