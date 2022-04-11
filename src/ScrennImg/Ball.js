import React from "react";

import { View, Text, StyleSheet, Image ,TouchableOpacity} from "react-native";

export default function Ball() {
  return (
    <View style={style.container}>
      <Text style={style.text}>BALL</Text>
      <View style={style.imgcontainer}>
        <Image style={style.img} source={require("../../assets/ball.jpg")} />
        <View style={style.lines}>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 30,
              fontWeight: "bold",
              letterSpacing: 2,
            }}
          >
            5 lines on Ball
          </Text>
          <Text
            style={{ color: "red", fontSize: 20, marginTop: 30, margin: 10 }}
          >
            1.Apple is a delicious fruit.{"\n"}
            2.It is perfect for your health. {"\n"}
            3.The apple is very flavored. {"\n"}
            4.The apple grows on the tree. {"\n"}
            5.Eating apples gives us the strength to fight against diseases.
          </Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginTop: 30,
    borderRadius:20
  },
  text: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 50,
    fontWeight: "bold",
    color: "orange",
    letterSpacing: 9,
  },
  imgcontainer: {
    flex: 1,
    backgroundColor: "white",
  },
  img: {
    alignSelf: "center",
    width: 270,
    height: 300,
  },
  lines: {
    flex: 1,
  },
});
