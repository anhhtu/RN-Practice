import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import MessageBubble from "../components/MessageBubble";

const ChatScreen = ({ route }) => {
  const { item } = route.params;

  const [messageInput, setMessageInput] = useState(null);
  const [messageList, setMessageList] = useState([]);

  const handleSendMessage = () => {
    messageInput === null
      ? setMessageList(messageList)
      : setMessageList([...messageList, messageInput]);
    setMessageInput(null);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <View style={styles.receiverInfo}>
          <TouchableOpacity>
            <Ionicons name="chevron-back-outline" size={34} />
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <View>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 40,
                  marginHorizontal: 10,
                }}
                source={{
                  uri: item.avatar,
                }}
              />
              <View style={styles.greenDot}></View>
            </View>
            <View style={{ height: 45, justifyContent: "space-evenly" }}>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                {item.name}
              </Text>
              <Text
                style={{ fontSize: 12, fontWeight: "500", color: "#757575" }}
              >
                Hoạt động {item.age} phút trước
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Feather name="phone" size={26} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="video" size={28} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="info" size={28} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.conversationView}>
        <ScrollView>
          {messageList.map((item, index) => {
            return <MessageBubble key={index} text={item} />;
          })}
        </ScrollView>
      </View>

      <KeyboardAvoidingView
        style={styles.inputRow}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.inputArea}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#0685FA",
                  height: 40,
                  width: 40,
                  borderRadius: 40,
                  marginLeft: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: 4,
                }}
              >
                <Fontisto name="camera" size={22} color="white" />
              </View>
            </TouchableOpacity>
            <TextInput
              placeholder="Message..."
              value={messageInput}
              onChangeText={(text) => setMessageInput(text)}
              style={{
                paddingLeft: 10,
                width: 260,
                height: 40,
              }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                handleSendMessage();
              }}
            >
              <Text
                style={{
                  padding: 10,
                  color: "#0685FA",
                  fontSize: 18,
                  fontWeight: "600",
                }}
              >
                Send
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.inputIconsContainer}>
            <TouchableOpacity>
              <Feather name="mic" size={21} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="picture-o" size={26} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name="sticker-emoji" size={27} />
            </TouchableOpacity>
          </View> */}
        </View>
      </KeyboardAvoidingView>
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
    paddingHorizontal: 16,
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
    borderWidth: 0.5,
    borderColor: "#FFF",
  },

  conversationView: {
    flex: 12,
    borderColor: "#DBDBDB",
    borderTopWidth: 1,
  },

  inputRow: {
    flex: 2,
    justifyContent: "center",
  },
  inputArea: {
    backgroundColor: "#F6F6F6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 50,
    marginHorizontal: 15,
    borderRadius: 40,
  },
  inputIconsContainer: {
    flexDirection: "row",
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "space-around",
    width: 120,
  },
});
