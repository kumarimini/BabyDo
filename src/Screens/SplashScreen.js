import React from "react";
import { render } from "react-dom";

import { View, Text, Image } from "react-native";
import { Component } from "react";
import { useEffect,useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

export default function SplashScreen({navigation}) {
  // constructor(props)
  // {
  //     super(props);
  //     setTimeout(()=>
  //     {
  //         this.props.navigation.navigate("login");
  //     },2000);
  //  };
  const [showSplashScreen, SetShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetShowSplashScreen(false);
      navigation.navigate("login")
    }, 2000);
  }, []);

  return (
    <Image
      style={{
        justifyContent: "center",
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
      source={require("../../assets/HomeSchool.png")}
    />
  );
}
