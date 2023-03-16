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
  ImageBackground,
} from "react-native";
import stateStore from "./stateStore";
import { Camera, CameraType } from "expo-camera";

export default function Account({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [uri, setUri] = useState();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState();

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const takePicture = async () => {
    if (!camera) {
      return;
    }
    console.log("not null");
    const photo = await camera.takePictureAsync();
    setUri(photo.uri);
    console.log(photo, "photo");
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  var camera = new Camera();

  useEffect(async () => {
    await Camera.requestCameraPermissionsAsync();
  }, []);

  const CameraPreview = ({ photo }) => {
    console.log("sdsfds", photo);
    return (
      <View
        style={{
          backgroundColor: "transparent",
          flex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <ImageBackground
          source={{ uri: photo && photo.uri }}
          style={{
            flex: 1,
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ borderRadius: 20, backgroundColor: "cyan" }}
        onPress={toggleCameraType}
      >
        <Text style={{ padding: 15, paddingHorizontal: 30 }}>Flip</Text>
      </TouchableOpacity>

      <View
        style={{
          width: "100%",
          height: 400,
          borderWidth: 1,
          marginVertical: 20,
        }}
      >
        <Camera
          style={styles.camera}
          type={type}
          ref={(r) => {
            camera = r;
          }}
        ></Camera>
      </View>
      <View style={{ borderWidth: 2, width: "100%", height: 250 }}>
        <CameraPreview photo={capturedImage} />
      </View>

      <TouchableOpacity
        style={{ borderRadius: 20, backgroundColor: "cyan" }}
        onPress={takePicture}
      >
        <Text style={{ padding: 15, paddingHorizontal: 30 }}>Shot</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ABFD",
    justifyContent: "center",
    alignItems: "center",
  },

  camera: {
    width: "100%",
    height: "100%",
  },
});
