import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function Login({ navigation }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const validate = () => {
    var isCorrect = false;
    if (username == "A" && password == "a") {
      isCorrect = true;
    }
    if (isCorrect) {
      navigation.navigate("HomeScreen", {
        user: {
          name: username,
          pass: password,
          fullName: "Giáp Văn Thành Đạt",
          msv: "PH20617",
        },
      });
    } else {
      Alert.alert("Đăng nhập không thành công");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inlineContainerTop}>
        <Image
          source={{
            uri: "https://lh3.googleusercontent.com/P_jBkatqxXZwXmsE9oqiikQ0uxx6RcgqJSrqAw0Ln_Ox0n_jsbFRBm1XVmH21XLe9CaSTftdUNIq155NnuAJTpX6ZDvpuUI8YKNZn6D4PCRijnpcnatBhOZp5N9mB9Rsf60j7F3doh6nnc5XGdQj7EZ3Wlt8ObktVbodIFe_vHBI3kdRIP1FtBWEQ24zi6Aui6LmXqSVh33cP-jWQg8QKAZKVAAeRi_jcvxuqPKxwCPK5tcpsUjoRy5F_jdRqhwfi6oXEDXqROAg0QwmF1GrsFHX6InCR8CKFU3m-ka33wvC-hW0i6twQb_uMJQqkaYHxQ58bZrFzZ0J7it14XD5iQ9THy0FwKUY8EXOuGHbwXmvKocC3bg_wSDE8r2kDdYMao-yw5p9SPpto2aYvoFZdE7P48iXmre5xfL-j1LMw-5L3LPs1jlhJ-WvFzpWGvZzsCE_L6F5VI4ny9Yel4-NpFcBt0R_Kr9Hi38bMOiamuHclQQu-NeruVp5ioOYJLPk7e2B3kjU2yrlxA-nLTtmmG8L-KeHeaCYsZe3YxJywGIcOaAqCXjko6easMzp0TwBZkpQx02cgy-L3lTGj2YYWuP6pGC_pE1_Ch-Eo_Ave3Tlr4SQwh6R-mqkNmxUhcMo_b0i0bVU7yWCLEkP6EzXdO3pRQI48K8Pvc12tGjDXfk3dOCa1k0qipI4vE-bWnaUT8X7b_jMRuF9FnW5Na00bIZ2AADe44cNrDDD2df7pbtO2cj7kAaZOM9zzB20eqci1sIyN_TnwDQQUzSjSoNswTGpZ6HaRhTVN1_aTb43p7KMd0ltA6_ZphczYiYZvIYdQ6Afu2bkGRPSFkI4IQ2U_YB-eHrW8kLqJkOVnaplrT6Em9Wu_LckUfIqZ6ifQh0MCcVlDd155POnrZg5kqTvgWU9JC4jk6oBr0VW434QRgBcOm-TcOKeAJx5N2anzm8SJ_AkrSwzR4NT2YRYSrOXfPDXM2b1xGl60TpuQ3ov4aPCwKiTqp8oynKSka3vXRZuBjcVnVL0e1PDn71TSilQM_M2=w856-h652-no?authuser=0",
          }}
          style={{ width: 300, height: 150, marginTop: 70 }}
        />
        <Text style={styles.innerText}>Chào mừng bạn đến với</Text>
        <Text style={styles.innerText1}>Tech Store</Text>

        <Text style={styles.text}>ĐĂNG NHẬP</Text>
        <TextInput
          style={styles.input}
          placeholder="Tài khoản"
          placeholderTextColor="#808080"
          onChangeText={(text) => {
            setUsername(text);
            console.log(username, "username");
          }}
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setPassword(text);
            console.log(password, "password");
          }}
          placeholder="Mật khẩu"
          placeholderTextColor="#808080"
          secureTextEntry={true}
          keyboardType=""
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // validate();
            navigation.navigate("Tab");
          }}
        >
          <Text style={{ color: "#000000", alignSelf: "center", fontSize: 20 }}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => {}}>
          <Text style={{ color: "#000000", alignSelf: "center", fontSize: 12 }}>
            Chưa có tài khoản?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 256,
            height: 34,
            borderRadius: 20,
            backgroundColor: "#00ABFD",
            alignContent: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "#ffffff", alignSelf: "center", fontSize: 20 }}>
            Đăng kí
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  inlineContainerTop: {
    alignItems: "center",
    justifyContent: "center",
    height: "70%",
    backgroundColor: "#00ABFD",
    padding: 10,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },

  text: {
    color: "while",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },

  input: {
    width: "85%",
    height: 44,
    borderRadius: 10,
    borderColor: "#c4c4c4",
    backgroundColor: "white",
    borderWidth: 1,
    paddingLeft: 8,
    marginTop: 20,
  },

  button: {
    marginTop: 30,
    width: 256,
    height: 44,
    borderRadius: 20,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
  },
  innerText: {
    color: "white",
    fontSize: 15,
    marginTop: -10,
  },
  innerText1: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5,
    color: "white",
  },
  cssButton: {
    fontSize: 12,
  },
});
