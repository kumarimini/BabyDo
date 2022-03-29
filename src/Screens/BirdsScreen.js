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
        name: "Peacock",
        imgUrl: require("../../assets/peacock.png"),
      },
      {
        name: "Parrot",
        imgUrl: require("../../assets/parrot.png"),
      },
      {
        name: "Pigeon",
        imgUrl: require("../../assets/pigeon.png"),
      },
    ],
  },
  {
    Data: [
      {
        name: "Sparrow",
        imgUrl: require("../../assets/sparrow.png"),
      },
      {
        name: "Crow",
        imgUrl: require("../../assets/crow.png"),
      },
      {
        name: "Myna",
        imgUrl: require("../../assets/myna.png"),
      },
    ],
  },
  {
    Data: [
      {
        name: "Bulbul",
        imgUrl: require("../../assets/bulbul.png"),
      },
      {
        name: "Dove",
        imgUrl: require("../../assets/dove.jpg"),
      },
      {
        name: "Shikra",
        imgUrl: require("../../assets/shikra.png"),
      },
    ],
  },
  {
    Data: [
      {
        name: "Crane",
        imgUrl: require("../../assets/crane.jpg"),
      },
      {
        name: "Ostrich",
        imgUrl: require("../../assets/ostrich.jpg"),
      },
      {
        name: "Duck",
        imgUrl: require("../../assets/duck.jpg"),
      },
    ],
  },
];

const ViewStyle = {
  flexDirection: "row",
  flex: 6,
};
export default function BirdsScreen({ navigation }) {
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
        BIRDS
      </Text>
      {dataArr.map((elem) => (
        <View style={ViewStyle}>
          {elem.Data.map((item) => (
            <MainInstruction
              name={item.name}
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

const MainInstruction = ({ name, imgUrl }) => {
  const handleVoice = (name) => {
    Speech.speak(name);
  };
  return (
    <View style={style.row}>
      <TouchableOpacity
        style={style.box}
        onPress={() => {
          handleVoice(name);
        }}
      >
        <Text style={style.text}>{name}</Text>
        <ImageBackground
          source={imgUrl}
          style={{
            height: 60,
            width: 50,
            alignSelf: "center",
            marginBottom: 10,
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
