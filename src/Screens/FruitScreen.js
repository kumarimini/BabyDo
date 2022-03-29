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
        name: "Mango",
        imgUrl: require("../../assets/Mango.png"),
      },
      {
        name: "Banana",
        imgUrl: require("../../assets/banana.png"),
      },
      {
        name: "Sapota",
        imgUrl: require("../../assets/Sapota.png"),
      },
    ],
  },
  {
    Data: [
      {
        name: "Guava",
        imgUrl: require("../../assets/guava.jpg"),
      },
      {
        name: "Orange",
        imgUrl: require("../../assets/orange.jpg"),
      },
      {
        name: "Apple",
        imgUrl: require("../../assets/applepng.jpg"),
      },
    ],
  },
  {
    Data: [
      {
        name: "Grapes",
        imgUrl: require("../../assets/grapes.jpg"),
      },
      {
        name: "Coconut",
        imgUrl: require("../../assets/coco.jpg"),
      },
      {
        name: "Jackfruit",
        imgUrl: require("../../assets/jackfruit.png"),
      },
    ],
  },
  {
    Data: [
      {
        name: "Peach",
        imgUrl: require("../../assets/peach.jpg"),
      },
      {
        name: "Cherry",
        imgUrl: require("../../assets/cherry.jpg"),
      },
      {
        name: "Pear",
        imgUrl: require("../../assets/pear.jpg"),
      },
    ],
  },
];

const ViewStyle = {
  flexDirection: "row",
  flex: 6,
};
export default function FruitScreen({ navigation }) {
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
        FRUITS
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
            height: 50,
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
