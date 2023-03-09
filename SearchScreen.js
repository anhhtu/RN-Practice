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
import VND from "./Extensions";

export default function SearchScreen() {
  const [search, setSearch] = useState("");
  const [productList, setProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);

  const getProductList = async () => {
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

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      const newData = productList.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredProductList(newData);
      setSearch(text);
    } else {
      setFilteredProductList([]);
      setSearch(text);
    }
  };

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
        <Text style={{ color: "white" }}>{VND.format(item.price)}</Text>
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
            searchFilterFunction(text);
          }}
          value={search}
        />
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          Search
        </Text>
      </View>

      <View style={styles.productView}>
        <FlatList
          data={filteredProductList}
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
