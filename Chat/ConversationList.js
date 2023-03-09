import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCOmmunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ConversationList({ navigation }) {
  useEffect(() => {
    getFriendsList();
  }, []);

  const [friendsList, setFriendsList] = useState();
  const getFriendsList = async () => {
    await fetch("https://60f4d20e2208920017f39df5.mockapi.io/customer")
      .then((response) => response.json())
      .then((json) => {
        setFriendsList(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity onPress={() => {
        navigation.navigate("ChatScreen", {item});
      }}>
        <View style={styles.flatlistItems}>
          <View style={{ flex: 1,}}>
            <Image
              style={{ width: 45, height: 45, borderRadius: 40 }}
              source={{ uri: item.avatar }}
            />
          </View>
          <View style={{ flex: 5 }}>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>{item.name}</Text>
            <Text style={{ fontSize: 16, color: "gray" }}>{item.content}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end'}}>
          <Text style={{ fontSize: 12, color: "gray" }}>
            {item.age} phút
          </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#00AAF4" }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topBarView}>
          <View style={styles.leftTopBar}>
            <AntDesign name="search1" size={28} color="white" />
            <TextInput
              style={{
                paddingHorizontal: 10,
                paddingLeft: 15,
                width: "100%",
                fontSize: 16,
              }}
              placeholder="Tìm bạn bè, tin nhắn..."
              placeholderTextColor={"white"}
            />
          </View>

          <View style={styles.rightTopBar}>
            <MaterialCOmmunityIcons
              name="qrcode-scan"
              size={23}
              color="white"
            />
            <AntDesign name="plus" size={28} color="white" />
          </View>
        </View>

        <View style={styles.conversationsView}>
          <FlatList
            data={friendsList}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item, index) => String(index)}
            nestedScrollEnabled
          />
        </View>
      </SafeAreaView>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topBarView: {
    flex: 1,
    backgroundColor: "#00AAF4",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  leftTopBar: {
    flex: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  rightTopBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  conversationsView: {
    flex: 10,
    backgroundColor: "white",
  },
  flatlistItems: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: 'gray',
    borderWidth: 0.2,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
