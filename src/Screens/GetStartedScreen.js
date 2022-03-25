import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";
import LottieRenderer from "../utils/lottie/LottieRenderer";

const GetStaredScreen = ({ navigation }) => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
    <View style={{flex:5,height:450,width:'100%'}}>
    {/* <LottieRenderer/> */}
    <ImageBackground
        style={{ height: "100%" }}
        source={require("../../assets/Home.png")}
      />
    </View>
      
      <View style={{ flex: 1, backgroundColor: "#d9d9d9"}}>
        <View
          style={{
            height: 120,
            width: 140,
            margin: 20,
          }}
        >
         
          <TouchableOpacity
            style={{
              height: 120,
              width: 140,
              
              // borderWidth: 1,
              // borderRadius: 50,
            }}
          onPress={()=>(navigation.navigate('login'))}>
            <ImageBackground
              source={require("../../assets/source.gif")}
              style={{
                height: 120,
                width: 140,
                // opacity: 0.6,
                position: "absolute",
                
                
              }}
            />
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            ></View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GetStaredScreen;
