import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import * as Speech from "expo-speech";

export default function TextSaveScreen(props) {
  const handleVoice = (textToRead) => {
    Speech.speak(textToRead);
  };

  const [text, setText] = useState();
  const [loop, setLoop] = useState(false);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   handleVoice(text);
    // }, 1000);
    // return () => {
    //   clearInterval(interval);
    // };
  }, [props, loop]);

  return (
    <View style={style.conatiner}>
      <Text
        style={{
          color: "white",
          fontSize: 30,
          textAlign: "center",
          margin: 30,
        }}
      >
        Save your Learnings
      </Text>
      <TextInput
        onChangeText={(txt) => {
          setText(txt);
        }}
        style={style.textInput}
      ></TextInput>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={style.btn}
          onPress={() => {
            setLoop(!loop);
          }}
        >
          <ImageBackground
            source={require("../../assets/loop.png")}
            style={{
              height: 70,
              width: 70,
              position: "absolute",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn}
          onPress={() => {
            handleVoice(text);
          }}
        >
          <ImageBackground
            source={require("../../assets/play.png")}
            style={{
              height: 70,
              width: 70,
              position: "absolute",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={style.btn}>
          <ImageBackground
            source={require("../../assets/download-icon.png")}
            style={{
              height: 70,
              width: 70,
              position: "absolute",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#1D263F",
    justifyContent: "center",
    marginTop:30
  },
  textInput: {
    padding: 10,
    backgroundColor: "white",
    margin: 20,
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
  },
  btn: {
    flex: 1,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 20,
  },
});
