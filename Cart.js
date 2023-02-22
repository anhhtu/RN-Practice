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
  Alert,
} from "react-native";
import stateStore from "./stateStore";

export default function Cart({ route, navigation }) {
  const [productList, setProductList] = useState();
  const [productNum, setProductNum] = useState();
  const [totalPrice, setTotalPrice] = useState();

  const count = stateStore(state => state.count);

  let VND = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });

  const getProductList = async () => {
    await fetch("https://60c7a3edafc88600179f5766.mockapi.io/w")
      .then((response) => response.json())
      .then((json) => {
        setProductList(json);
        setProductNum(json.length);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  let list = stateStore(state => state.list);

  useEffect(() => {
    getProductList();
    console.log("htbhhb", list)
  }, []);

  const onDelete = (deleteID) => {
    console.log(deleteID);
    const newList = new Array();
    productList.forEach((element) => {
      if (element.id != deleteID) {
        newList.push(element);
      }
    });
    setProductList(newList);
    setProductNum(newList.length);
  };

  const onDeleteAPI = async (deleteID) => {
    fetch("https://60c7a3edafc88600179f5766.mockapi.io/w/" + deleteID, {
      method: "DELETE",
    }).then((res) => {
      res.json();
      console.log(JSON.stringify(res));
    });
    getProductList();
  };

  //Change products quantity
  const updateItem = (item, isPlus) => {
    if (isPlus == true) {
      item.quantityBuy = item.quantityBuy + 1;
    } else {
      item.quantityBuy = item.quantityBuy - 1;
    }

    const requestOption = {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(item),
    };

    fetch(
      "https://60c7a3edafc88600179f5766.mockapi.io/w/" + item.id,
      requestOption
    )
      .then((response) => {
        response.json();
        if (response.status == 200) {
          getProductList();
        }
        console.log(response.status, "status");
      })
      .then((data) => {
        console.log(data);
      });
  };

  const renderPost = (item) => {
    return (
      <View style={styles.product}>
        <Image
          style={{ width: 120, height: 120 }}
          source={{ uri: item.imagePhone }}
        />
        <View style={{ justifyContent: "flex-start", marginLeft: 20 }}>
          <Text style={{ paddingBottom: 10, fontSize: 20, fontWeight: "bold" }}>
            {item.name}
          </Text>
          <Text style={{ color: "red" }}>{VND.format(item.price)}</Text>
          <Text style={{ color: "#707070", paddingTop: 10 }}>
            100 products left
          </Text>
        </View>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "column",
            height: 120,
          }}
        >
          <TouchableOpacity
            style={{ alignSelf: "flex-start", padding: 20 }}
            onPress={() => onDeleteAPI(item.id)}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1828/1828778.png",
              }}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{ backgroundColor: "#F0F0F0", width: 20 }}
              onPress={() => updateItem(item, false)}
            >
              <Text style={{ fontSize: 20, alignSelf: "center" }}>-</Text>
            </TouchableOpacity>
            <Text>{item.quantityBuy}</Text>
            <TouchableOpacity
              style={{ backgroundColor: "#F0F0F0", width: 20 }}
              onPress={() => updateItem(item, true)}
            >
              <Text style={{ fontSize: 20, alignSelf: "center" }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          My Cart   {count}
        </Text>
      </View>

      <View style={styles.productView}>
        <Text
          style={{ paddingBottom: 10, paddingLeft: 10, fontWeight: "bold" }}
        >
          Total: {productNum} products
        </Text>
        <FlatList
          key={"#"}
          data={productList}
          renderItem={({ item }) => renderPost(item)}
          keyExtractor={(item) => "#" + item.id}
          numColumns={1}
          nestedScrollEnabled
        />
        <View style={styles.totalPriceView}>
          <Text>Total Price: </Text>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={{ color: "white", fontSize: 17, fontWeight: "500" }}>
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

let deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  titleRow: {
    flex: 1,
    backgroundColor: "#00ABFD",
    width: deviceWidth,
    padding: 20,
    paddingTop: 30,
    justifyContent: "center",
  },

  productView: {
    flex: 8,
    backgroundColor: "#F7F7F7",
    width: deviceWidth,
    padding: 10,
  },

  totalPriceView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  checkoutButton: {
    backgroundColor: "#00ABFD",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 15,
  },

  product: {
    backgroundColor: "white",
    flexDirection: "row",
    height: (deviceWidth - 45) / 2,
    width: deviceWidth - 45,
    paddingLeft: 30,
    alignItems: "center",
    alignSelf: "center",
    margin: 5,
    borderRadius: 10,
  },
});
