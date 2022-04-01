import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native";
import * as Speech from "expo-speech";

const dataArr = [
  {
    Row: "1",
    Data: [
      { alphabet: "A", textToSpeechMsg: "A for Apple" },
      { alphabet: "B", textToSpeechMsg: "B for Ball" },
      { alphabet: "C", textToSpeechMsg: "C for Cat" },
      { alphabet: "D", textToSpeechMsg: "D for Dog" },
    ],
  },

  {
    Row: "2",
    Data: [
      { alphabet: "E", textToSpeechMsg: "E for Elephant" },
      { alphabet: "F", textToSpeechMsg: "F for Frog" },
      { alphabet: "G", textToSpeechMsg: "G for Goat" },
      { alphabet: "H", textToSpeechMsg: "H for Horse" },
    ],
  },

  {
    Row: "3",
    Data: [
      { alphabet: "I", textToSpeechMsg: "I for IceCream" },
      { alphabet: "J", textToSpeechMsg: "J for Jocker" },
      { alphabet: "K", textToSpeechMsg: "K for Kite" },
      { alphabet: "L", textToSpeechMsg: "L for Lion" },
    ],
  },

  {
    Row: "4",
    Data: [
      { alphabet: "M", textToSpeechMsg: "M for Mango" },
      { alphabet: "N", textToSpeechMsg: "N for Nest" },
      { alphabet: "O", textToSpeechMsg: "O for Orange" },
      { alphabet: "P", textToSpeechMsg: "P for Parrot" },
    ],
  },

  {
    Row: "4",
    Data: [
      { alphabet: "Q", textToSpeechMsg: "Q for queen" },
      { alphabet: "R", textToSpeechMsg: "R for rabbit" },
      { alphabet: "S", textToSpeechMsg: "S for sparrow" },
      { alphabet: "T", textToSpeechMsg: "T for tomato" },
    ],
  },
  {
    Row: "4",
    Data: [
      { alphabet: "U", textToSpeechMsg: "u for umbrella" },
      { alphabet: "V", textToSpeechMsg: "v for violin" },
      { alphabet: "W", textToSpeechMsg: "w for watch" },
      { alphabet: "x", textToSpeechMsg: "x for x-mas tree" },
    ],
  },
  {
    Row: "4",
    Data: [
      { alphabet: "Y", textToSpeechMsg: "y for ysk" },
      { alphabet: "Z", textToSpeechMsg: "z for zebra" },
    ],
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
        marginTop: 30,
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
        ALPHABETS
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
  parentView: {
    flex: 1,
    flexDirection: "row",
  },
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
