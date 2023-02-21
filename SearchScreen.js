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

export default function SearchScreen() {
  const [productList, setProductList] = useState();
  const getProductList = async (text) => {
    await fetch(
      "https://api.themoviedb.org/3/search/keyword?api_key=e9e9d8da18ae29fc430845952232787c&page=1&query=" +
        text
    )
      .then((response) => response.json())
      .then((json) => {
        setProductList(json.results);
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
      <View style={styles.product}>
        <Text
          style={{
            color: "white",
            paddingBottom: 10,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Text>
        <Text style={{ color: "white" }}>{item.id}.000vnd</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <TextInput
          style={styles.searchBarInput}
          placeholder="Enter here"
          onChangeText={(text) => {
            getProductList(text);
          }}
        />
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          Search
        </Text>
      </View>

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
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  titleRow: {
    flex: 1,
    backgroundColor: "#00ABFD",
    flexDirection: "row",
    width: deviceWidth,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },

  searchBarInput: {
    backgroundColor: "white",
    height: 47,
    width: deviceWidth - 150,
    borderRadius: 10,
    marginRight: 30,
  },

  productView: {
    flex: 6,
    backgroundColor: "black",
    borderWidth: 1,
    width: deviceWidth,
    alignItems: "center",
  },

  product: {
    backgroundColor: "#242526",
    height: (deviceWidth - 45) / 2,
    width: (deviceWidth - 45) / 2,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 10,
  },
});
