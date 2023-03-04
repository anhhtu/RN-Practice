import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <View style={styles.receiverInfo}>
          <Ionicons name="chevron-back-outline" size={32} />
          <View>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                marginHorizontal: 10,
              }}
              source={{
                uri: "https://i.pinimg.com/564x/7a/83/d5/7a83d5ee7174fcfaece28dccd7e4128e.jpg",
              }}
            />
            <View style={styles.greenDot}></View>
          </View>
          <View style={{ height: 45, justifyContent: "space-evenly" }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>_anhh.tu</Text>
            <Text style={{ fontSize: 12, fontWeight: "500", color: "#757575" }}>
              Active now
            </Text>
          </View>
        </View>
        <View style={styles.iconsContainer}>
          <Feather name="phone" size={28} />
          <Feather name="video" size={28} />
          <Feather name="info" size={28} />
        </View>
      </View>
      <View style={styles.conversationView}></View>
      <View style={styles.inputRow}></View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  titleRow: {
    flex: 1.6,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingBottom: 10,
  },
  receiverInfo: {
    width: 200,
    flexDirection: "row",
    alignItems: "center",
  },
  iconsContainer: {
    width: 130,
    height: 45,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  greenDot: {
    backgroundColor: "#56CA37",
    width: 11,
    height: 11,
    position: "absolute",
    left: 38,
    top: 28,
    borderRadius: 30,
  },

  conversationView: {
    flex: 12,
    borderWidth: 1,
    borderColor: "#DBDBDB",
  },

  inputRow: {
    flex: 2,
  },
});
