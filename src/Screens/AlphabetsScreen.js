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
      { alphabet: "B", textToSpeechMsg: "B for Ballistic" },
      { alphabet: "C", textToSpeechMsg: "C for Cat" },
      { alphabet: "D", textToSpeechMsg: "D for Damon" },
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
      { alphabet: "J", textToSpeechMsg: "J for Jason Momoa" },
      { alphabet: "K", textToSpeechMsg: "K for King" },
      { alphabet: "L", textToSpeechMsg: "L for Lasun" },
    ],
  },

  {
    Row: "4",
    Data: [
      { alphabet: "M", textToSpeechMsg: "M for Momo" },
      { alphabet: "N", textToSpeechMsg: "N for Nokia" },
      { alphabet: "O", textToSpeechMsg: "O for Oscar" },
      { alphabet: "P", textToSpeechMsg: "P for Paad" },
    ],
  },

  {
    Row: "4",
    Data: [
      { alphabet: "Q", textToSpeechMsg: "Q for queen" },
      { alphabet: "R", textToSpeechMsg: "R for ram" },
      { alphabet: "S", textToSpeechMsg: "S for sonya" },
      { alphabet: "T", textToSpeechMsg: "T for tom" },
    ],
  },
  {
    Row: "4",
    Data: [
      { alphabet: "U", textToSpeechMsg: "M for Momo" },
      { alphabet: "V", textToSpeechMsg: "N for Nokia" },
      { alphabet: "W", textToSpeechMsg: "O for Oscar" },
      { alphabet: "x", textToSpeechMsg: "P for Paad" },
    ],
  },
  {
    Row: "4",
    Data: [
      { alphabet: "Y", textToSpeechMsg: "M for Momo" },
      { alphabet: "Z", textToSpeechMsg: "N for Nokia" },
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
        margin: 15,
        backgroundColor:'#1D263F'
      }}
    >
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 20,
          padding: 10,
          backgroundColor: "grey",
          borderRadius: 12,
        }}
      >
        Tap on buttons
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
    backgroundColor: "yellow",
    flex: 1,
    padding: 10,
    borderRadius: 30,
    margin: 3,
    borderWidth:1,
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
