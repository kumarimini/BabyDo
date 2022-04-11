import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native";
import * as Speech from "expo-speech";

const dataArr = [
  {
    Row: "1",
    Data: [
      { alphabet: "A", textToSpeechMsg: "A for Apple ", ScreenName: "Apple" },
      { alphabet: "B", textToSpeechMsg: "B for Ball", ScreenName: "Ball" },
      { alphabet: "C", textToSpeechMsg: "C for Cat", ScreenName: "Apple" },
      { alphabet: "D", textToSpeechMsg: "D for Dog", ScreenName: "Apple" },
    ],
  },

  {
    Row: "2",
    Data: [
      {
        alphabet: "E",
        textToSpeechMsg: "E for Elephant",
        ScreenName: "Apple",
      },
      { alphabet: "F", textToSpeechMsg: "F for Frog", ScreenName: "Apple" },
      { alphabet: "G", textToSpeechMsg: "G for Goat", ScreenName: "Apple" },
      { alphabet: "H", textToSpeechMsg: "H for Horse", ScreenName: "Apple" },
    ],
  },

  {
    Row: "3",
    Data: [
      {
        alphabet: "I",
        textToSpeechMsg: "I for IceCream",
        ScreenName: "Apple",
      },
      {
        alphabet: "J",
        textToSpeechMsg: "J for Jocker",
        ScreenName: "Apple",
      },
      { alphabet: "K", textToSpeechMsg: "K for Kite", ScreenName: "Apple" },
      { alphabet: "L", textToSpeechMsg: "L for Lion", ScreenName: "Apple" },
    ],
  },

  {
    Row: "4",
    Data: [
      { alphabet: "M", textToSpeechMsg: "M for Mango", ScreenName: "Apple" },
      { alphabet: "N", textToSpeechMsg: "N for Nest", ScreenName: "Apple" },
      {
        alphabet: "O",
        textToSpeechMsg: "O for Orange",
        ScreenName: "Apple",
      },
      {
        alphabet: "P",
        textToSpeechMsg: "P for Parrot",
        ScreenName: "Apple",
      },
    ],
  },

  {
    Row: "4",
    Data: [
      { alphabet: "Q", textToSpeechMsg: "Q for queen", ScreenName: "Apple" },
      {
        alphabet: "R",
        textToSpeechMsg: "R for rabbit",
        ScreenName: "Apple",
      },
      {
        alphabet: "S",
        textToSpeechMsg: "S for sparrow",
        ScreenName: "Apple",
      },
      {
        alphabet: "T",
        textToSpeechMsg: "T for tomato",
        ScreenName: "Apple",
      },
    ],
  },
  {
    Row: "4",
    Data: [
      {
        alphabet: "U",
        textToSpeechMsg: "u for umbrella",
        ScreenName: "Apple",
      },
      {
        alphabet: "V",
        textToSpeechMsg: "v for violin",
        ScreenName: "Apple",
      },
      { alphabet: "W", textToSpeechMsg: "w for watch", ScreenName: "Apple" },
      {
        alphabet: "x",
        textToSpeechMsg: "x for x-mas tree",
        ScreenName: "Apple",
      },
    ],
  },
  {
    Row: "4",
    Data: [
      { alphabet: "Y", textToSpeechMsg: "y for ysk", ScreenName: "Apple" },
      { alphabet: "Z", textToSpeechMsg: "z for zebra", ScreenName: "Apple" },
    ],
  },
];

const viewStyle = {
  flex: 2,
  flexDirection: "row",
  justifyContent: "space-between",
  padding: 5,
};

export default function AlphabetScreen({ navigation }) {
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
              ScreenName={item.ScreenName}
              navigation={navigation}
              imgUrl={item.imgUrl}
            />
          ))}
        </View>
      ))}
    </SafeAreaView>
  );
}

const AlphabetButton = ({
  alphabet,
  textToSpeechMsg,
  ScreenName,
  navigation,
  imgUrl,
}) => {
  const handleVoice = (textToSpeechMsg) => {
    Speech.speak(textToSpeechMsg);
  };
  const Navigator = (ScreenName) => {
    navigation.navigate(ScreenName);
  };
  return (
    <TouchableOpacity
      style={style.btn}
      onPress={() => {
        handleVoice(textToSpeechMsg);
        Navigator(ScreenName);
      }}
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
