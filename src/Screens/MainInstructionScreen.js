import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native";
import * as Speech from "expo-speech";

const dataArr = [

  {
    Data: [
      {
        name: "Alphabets",
        ScreenName: "Alphabets",
        audio: "lets learn alphabets",
        imgUrl: require("../../assets/abcd.png"),
      },
      {
        name: "Months",
        ScreenName: "Months",
        audio: "lets learn months",
        imgUrl: require("../../assets/monthspng.png"),
      },
    ],
  },
  {
    Data: [
      {
        name: "Week",
        ScreenName: "week",
        audio: "lets learn the days of the week",
        imgUrl: require("../../assets/one-week.png"),
      },
      {
        name: "Fruits",
        ScreenName: "Fruit ",
        audio: "lets learn fruits",
        imgUrl: require("../../assets/apple.png"),
      },
    ],
  },
  {
    Data: [
      {
        name: "Vegetables",
        ScreenName: "TextSave",
        audio: "lets learn vegetables",
        imgUrl: require("../../assets/vegetablepng1.png"),
      },
      {
        name: "Pre Math",
        ScreenName: " ",
        audio: "lets learn pre maths",
        imgUrl: require("../../assets/Symbols.png"),
      },
    ],
  },
];

const ViewStyle = {
  flexDirection: "row",
  flex: 6,
};
export default function MainInstructionScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        margin: 5,
        backgroundColor: "#1D263F",
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
        Home School
        {"\n"}(select what you want to learn)
      </Text>
      {dataArr.map((elem) => (
        <View style={ViewStyle}>
          {elem.Data.map((item) => (
            <MainInstruction
              name={item.name}
              audio={item.audio}
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

const MainInstruction = ({ ScreenName, name, navigation, audio, imgUrl }) => {
  const handleVoice = (audio) => {
    Speech.speak(audio);
  };
  const Navigator = (ScreenName) => {
    navigation.navigate(ScreenName);
  };
  return (
    <View style={style.row}>
      <TouchableOpacity
        style={style.box}
        onPress={() => {
          handleVoice(audio);
          Navigator(ScreenName);
        }}
      >
        <Text style={style.text}>{name}</Text>
        <ImageBackground
          source={imgUrl}
          style={{
            height: 110,
            width: 110,
            alignSelf: "center",
            marginBottom:10
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  box: {
    backgroundColor: "white",
    flex: 1,
    marginTop: 10,
    margin: 5,
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 5,
    shadowRadius: 4.65,

    elevation: 10,
    borderWidth: 2,
  },
  row: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    textAlign: "center",
    margin: 10,
    fontSize: 20,
    padding: 5,
    letterSpacing: 1,
  },
});
