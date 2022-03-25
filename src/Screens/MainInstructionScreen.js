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
    Row: "1",
    Data: [
      { name: "Alphabets", ScreenName: "Alphabets" },
      { name: "Months", ScreenName: "Months" },
    ],
  },
  {
    Row: "2",
    Data: [
      { name: "The Days of the Week", ScreenName: "week" },
      { name: "Fruits" },
    ],
  },
  {
    Row: "3",
    Data: [{ name: "Vegetables" }, { name: "Months" }],
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
        margin: 15,
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
          fontSize: 20,
          color: "white",
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
              //   audio={item.audio}
              ScreenName={item.ScreenName}
              navigation={navigation}
            />
          ))}
        </View>
      ))}
    </SafeAreaView>
  );
}

const MainInstruction = ({ ScreenName, name, navigation }) => {
  const handleVoice = (text) => {
    Speech.speak("lets study" + text);
  };
  const Navigator = (ScreenName) => {
    navigation.navigate(ScreenName);
  };
  return (
    <View style={style.row}>
      <TouchableOpacity
        style={style.box}
        onPress={() => {
          handleVoice(ScreenName);
          Navigator(ScreenName != undefined ? ScreenName : " ");
        }}
      >
        <Text style={style.text}>{name}</Text>
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
