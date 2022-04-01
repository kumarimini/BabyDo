import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Component } from "react";
import axios from "../config/axios";
import { SafeAreaView } from "react-native-safe-area-context";

class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:" ",
      username: " ",
      password: " ",
      phone:" "
    };
  }

  navigation=this.props.navigation;

  navi() {
    const { navigation } = this.props;
    navigation.navigate("login");
  }

  callLogin = async () => {
    console.log("------Function was Called--------");
    try {
      const loggedInData = await axios.post("http://192.168.29.51:5000/signup", {
        name: this.state.name,
        email: this.state.username,
        password: this.state.password,
        phone: this.state.phone,
      });
      if (loggedInData.data) {
        this.navigation.navigate("login");
      }
    } catch (err) {
      console.log("Err :", err.message);
    }
  };

  _handlePress() {
    console.log("..............working--------");
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(this.state.username) && this.state.password.length > 8) {
      // navigation.navigate("login");
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
          Signup
        </Text>
        <View style={style.inputView}>
          <TextInput
            style={style.TextInput}
            placeholder="Name"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ name: text })}
          />
        </View>
        <View style={style.inputView}>
          <TextInput
            style={style.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => this.setState({ username: text })}
          />
        </View>
        <View style={style.inputView}>
          <TextInput
            style={style.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <View style={style.inputView}>
          <TextInput
            style={style.TextInput}
            placeholder="Phone"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ phone: text })}
          />
        </View>
        <TouchableOpacity
          style={style.loginBtn}
          onPress={() => this._handlePress()}
        >
          <Text style={style.loginText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navi()}>
          <Text style={style.s_button}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
  }
}

export default SignUpScreen;
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
    marginTop: 50,
    resizeMode: "contain",
    alignSelf: "center",
    height: 90,
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
  },
  loginBtn: {
    width: "40%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9d9d9",
    alignSelf: "center",
    marginTop: 30,
  },
  s_button: {
    height: 35,
    marginBottom: 30,
    margin: 20,
    color: "white",
    alignSelf: "center",
  },
});
