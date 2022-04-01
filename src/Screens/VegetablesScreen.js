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
        name: "Tomato",
        imgUrl: require("../../assets/Tomato.png"),
      },
      {
        name: "Onion",
        imgUrl: require("../../assets/onion.png"),
      },
      {
        name: "Pumpkin",
        imgUrl: require("../../assets/Pumpkin.png"),
      },
    ],
  },
  {
    Data: [
      {
        name: "Potato",
        imgUrl: require("../../assets/potato.png"),
      },
      {
        name: "Peas",
        imgUrl: require("../../assets/peas.png"),
      },
      {
        name: "Lemon",
        imgUrl: require("../../assets/lemon.png"),
      },
    ],
  },
  {
    Data: [
      {
        name: "Okra",
        imgUrl: require("../../assets/okra.png"),
      },
      {
        name: "Cabbage",
        imgUrl: require("../../assets/cabbage.png"),
      },
      {
        name: "Ginger",
        imgUrl: require("../../assets/ginger.png"),
      },
    ],
  },
  {
    Data: [
      {
        name: "Eggplant",
        imgUrl: require("../../assets/eggplant.png"),
      },
      {
        name: "Chili",
        imgUrl: require("../../assets/chili.png"),
      },
      {
        name: "Carrot",
        imgUrl: require("../../assets/carrot.png"),
      },
    ],
  },
];

const ViewStyle = {
  flexDirection: "row",
  flex: 6,
};
export default function VegetablesScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop:30,
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
        VEGETABLES
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
            width: 70,
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
