import React from "react";
import { render } from "react-dom";

import { View, Text, Image } from "react-native";
import { Component } from "react";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(async () => {
      // navigation.navigate("login");
      const AuthToken = await AsyncStorage.getItem("Token");
      console.log("here-----", AuthToken);
      console.log("hi.............hello.....")
      const Token = await axios.post("http://192.168.29.51:5000/Auth", {
        AuthToken: AuthToken,
      });
      console.log("hello-----------",Token)
      if (
        AuthToken
          ? navigation.navigate("MainInstruction")
          : navigation.navigate("login")
      );
      console.log("hi..................")
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
      source={require("../../assets/Babydo.png")}
    />
  );
}
