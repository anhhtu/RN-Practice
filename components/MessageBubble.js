import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MessageBubble = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        <Text style={styles.message}>{props.text}</Text>
      </View>
    </View>
  );
};

export default MessageBubble;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginHorizontal: 10,
    marginVertical: 5,
  },

  bubble: {
    maxWidth: 300,
    backgroundColor: '#EAEAEA',
    borderRadius: 20,
    padding: 10,
  },

  message: {
    fontSize: 17,
  },
});
