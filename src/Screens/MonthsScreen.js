import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import * as Speech from "expo-speech";

export default function MonthsScreen() {
  const handleVoice = (text) => {
    Speech.speak(text);
  };
  return (
    <SafeAreaView style={style.container}>
      <View style={{ flex: 1, backgroundColor: "#d9d9d9",borderWidth:1,margin:15,borderRadius:10 }}>
        <Text
          style={{
            color: "black",
            textAlign: "center",
            fontSize: 30,
            padding: 10,
            
          }}
        >
          Months of the Year 
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <TouchableOpacity
          style={style.btn}
          onPress={() => handleVoice("January")}
        >
          <Text style={style.text}>January</Text>
          <Text style={{ textAlign: "center" }}>Total Days 31.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn}
          onPress={() => handleVoice("Fabruary")}
        >
          <Text style={style.text}>February</Text>
          <Text style={{ textAlign: "center" }}>Total Days 28.</Text>
          <Text style={{ textAlign: "center", fontSize: 12 }}>
            (29 In a Leap Year)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn}
          onPress={() => handleVoice("March")}
        >
          <Text style={style.text}>March</Text>
          <Text style={{ textAlign: "center" }}>Total Days 31.</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <TouchableOpacity
          style={style.btn}
          onPress={() => handleVoice("April")}
        >
          <Text style={style.text}>April</Text>
          <Text style={{ textAlign: "center" }}>Total Days 30.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btn} onPress={() => handleVoice("May")}>
          <Text style={style.text}>May</Text>
          <Text style={{ textAlign: "center" }}>Total Days 31.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btn} onPress={() => handleVoice("June")}>
          <Text style={style.text}>June</Text>
          <Text style={{ textAlign: "center" }}>Total Days 30.</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <TouchableOpacity style={style.btn} onPress={() => handleVoice("July")}>
          <Text style={style.text}>July</Text>
          <Text style={{ textAlign: "center" }}>Total Days 31.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn}
          onPress={() => handleVoice("August")}
        >
          <Text style={style.text}>August</Text>
          <Text style={{ textAlign: "center" }}>Total Days 31.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn}
          onPress={() => handleVoice("September")}
        >
          <Text style={style.text}>September</Text>
          <Text style={{ textAlign: "center" }}>Total Days 30.</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <TouchableOpacity
          style={style.btn}
          onPress={() => handleVoice("October")}
        >
          <Text style={style.text}>October</Text>
          <Text style={{ textAlign: "center" }}>Total Days 31.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn}
          onPress={() => handleVoice("November")}
        >
          <Text style={style.text}>November</Text>
          <Text style={{ textAlign: "center" }}>Total Days 30.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn}
          onPress={() => handleVoice("December")}
        >
          <Text style={style.text}>December</Text>
          <Text style={{ textAlign: "center" }}>Total Days 31.</Text>
        </TouchableOpacity>
      </View>
      <View style={{ margin: 5 }}></View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D263F",
  },
  text: {
    textAlign: "center",
    margin: 10,
    fontSize: 18,
    paddingTop: 35,
    fontWeight: "bold",
  },

  btn: {
    backgroundColor: "white",
    flex: 1,
    padding: 5,
    borderRadius: 30,
    margin: 1,
    height: 140,
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 5,
    shadowRadius: 4.65,

    elevation: 10,
    borderWidth:2
  },
});
