import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from "react-native";

export default function TextSaveScreen() {
  return (
    <View style={style.conatiner}>
    <Text style={{backgroundColor:'white',fontSize:30,textAlign:'center',margin:30}}>Save your Learnings</Text>
      <TextInput style={style.textInput}></TextInput>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={style.btn}></TouchableOpacity>
        <TouchableOpacity style={style.btn}></TouchableOpacity>
        <TouchableOpacity style={style.btn}></TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#1D263F",
    justifyContent: "center",
  },
  textInput: {
    flex: 2,
    backgroundColor: "white",
    margin: 20,
    borderWidth:1,
    borderRadius:10
  },
  btn: {
    flex:1,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 20,
    backgroundColor: 'orange',
    
  },
});
