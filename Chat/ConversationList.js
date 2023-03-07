import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCOmmunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ConversationList = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#00AAF4" }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topBarView}>
          <View style={styles.leftTopBar}>
            <AntDesign name="search1" size={28} color="white" />
            <TextInput
              style={{ paddingHorizontal: 10, paddingLeft: 15, width: '100%', fontSize: 16 }}
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
            <FlatList/>
        </View>
      </SafeAreaView>
    </View>
  );
};

const renderItem = (item) => {
    return (
        <View style={styles.flatlistItems}></View>
    );
}

export default ConversationList;

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
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightTopBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  conversationsView: {
    flex: 10,
    backgroundColor: "white",
  },
});
