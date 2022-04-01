import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native";
import * as Speech from "expo-speech";

const dataArr = [
  {
    Row: "1",
    Data: [{ alphabet: "Sunday", textToSpeechMsg: "Sunday" }],
  },

  {
    Row: "2",
    Data: [{ alphabet: "Monday", textToSpeechMsg: "Monday" }],
  },

  {
    Row: "3",
    Data: [{ alphabet: "Tuesday", textToSpeechMsg: "Tuesday" }],
  },

  {
    Row: "4",
    Data: [{ alphabet: "Wednesday", textToSpeechMsg: "Wednesday" }],
  },

  {
    Row: "5",
    Data: [{ alphabet: "Thursday", textToSpeechMsg: "Thursday" }],
  },
  {
    Row: "6",
    Data: [{ alphabet: "Friday", textToSpeechMsg: "Friday" }],
  },
  {
    Row: "7",
    Data: [{ alphabet: "Saturday", textToSpeechMsg: "Saturday" }],
  },
];

const viewStyle = {
  flex: 2,
  flexDirection: "row",
  justifyContent: "space-between",
  padding: 5,
};

export default function AlphabetScreen() {
  return (
    <SafeAreaView
      style={{
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#1D263F",
        marginTop:30
      }}
    >
      <Text
        style={{
          backgroundColor: "grey",
          borderWidth: 1,
          borderRadius: 5,
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 25,
          color: "yellow",
        }}
      >
        THE DAYS OF THE WEEK
      </Text>

      {dataArr.map((elem) => (
        <View style={viewStyle}>
          {elem.Data.map((item) => (
            <AlphabetButton
              alphabet={item.alphabet}
              textToSpeechMsg={item.textToSpeechMsg}
            />
          ))}
        </View>
      ))}
    </SafeAreaView>
  );
}

const AlphabetButton = ({ alphabet, textToSpeechMsg }) => {
  const handleVoice = (text) => {
    Speech.speak(text);
  };
  return (
    <TouchableOpacity
      style={style.btn}
      onPress={() => handleVoice(textToSpeechMsg)}
    >
      <Text style={style.text}>{alphabet}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  text: {
    textAlign: "center",
    margin: 10,
    fontSize: 25,
  },
  btn: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    borderRadius: 30,
    margin: 3,
    borderWidth: 1,
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 5,
    shadowRadius: 4.65,

    elevation: 10,
  },
});
