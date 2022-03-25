import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  SafeAreaView,
} from "react-native";

export default function FruitScreen() {
  return (
    
      <View style={{ flexDirection: "column", flex: 6 }}>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <View
            style={{ backgroundColor: "red", flex: 1, marginRight: 5 }}
          ></View>
          <View
            style={{ backgroundColor: "blue", flex: 1, marginLeft: 5 }}
          ></View>
        </View>

        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <View
            style={{ backgroundColor: "white", flex: 1, marginRight: 5 }}
          ></View>
          <View
            style={{ backgroundColor: "black", flex: 1, marginLeft: 5 }}
          ></View>
        </View>

        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <View
            style={{ backgroundColor: "gray", flex: 1, marginRight: 5 }}
          ></View>
          <View
            style={{ backgroundColor: "yellow", flex: 1, marginLeft: 5 }}
          ></View>
        </View>
      </View>
   
  );
}
