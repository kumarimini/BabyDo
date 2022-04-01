import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Component } from "react";

import axios from "../config/axios";
import { SafeAreaView } from "react-native-safe-area-context";

class LoginScreen extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      username: " ",
      password: " ",
    };
  }
  navigation=this.props.navigation;

  navi() {
    this.navigation.navigate("signup");
  }

  callLogin =async()=>{
    console.log("------Function was Called--------");
   try{
    const loggedInData= await axios.post("http://192.168.29.51:5000/login", {
      email: this.state.username,
      password: this.state.password,
    })
    if(loggedInData.data.success){
      console.log(loggedInData.data.success)
      this.navigation.navigate("MainInstruction")
    }
    else{
      console.log("-------incorrect---------")
    }
     }
   catch(err){
     console.log("Err :",err.message)
   }
  }

  _handlePress() {
    console.log("------Working------");
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(this.state.username) && this.state.password.length > 4) {
      // navigation.navigate("MainInstruction");
      this.callLogin();
    }
  }

  render() {
    return (
      <SafeAreaView style={style.parentView}>
      <View style={style.container}>
        <Image
          style={style.image}
          source={require("../../assets/MainLogo.png")}
        />

        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            marginTop: 40,
            marginBottom: 20,
            color: "white",
          }}
        >
          Login
        </Text>
        <View style={style.inputView}>
          <TextInput
            style={style.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ username: text })}
          />
        </View>
        <View style={style.inputView}>
          <TextInput
            style={style.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity>
          <Text style={style.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.loginBtn}
          onPress={() => this._handlePress()}
        >
          <Text style={style.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navi()}>
          <Text style={style.s_button}>Signup</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;
const style = StyleSheet.create({
  parentView:{
  flex:1,
  flexDirection:'row',
  },
  container: {
    flex: 1,
    backgroundColor: "#1D263F",
  },
  image: {
    marginTop: 60,
    resizeMode: "contain",
    alignSelf: "center",
    height: 100,
  },
  inputView: {
    backgroundColor: "#d9d9d9",
    height: 45,
    marginBottom: 10,
    margin: 20,
    borderRadius: 5,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    margin: 20,
    color: "white",
  },
  loginBtn: {
    width: "40%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9d9d9",
    alignSelf: "center",
  },
  s_button: {
    height: 35,
    marginBottom: 30,
    margin: 20,
    color: "white",
    alignSelf: "center",
  },
});
