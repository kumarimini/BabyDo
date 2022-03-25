import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native";

export default function InstructionScreen({navigation}) {
  
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ flex: 2, margin: 5,opacity:0.7 }}
        source={require("../../assets/bear2.gif")}
      ></Image>
      <View style={{ flex: 2, backgroundColor:'white',flexDirection: "row" }}>
        <View
          style={{
            height: 120,
            width: 140,
            margin: 20,
          }}
        >
          <Text style={styles.alphabet}>Alphabet</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFF",
              height: 120,
              width: 140,
              // borderWidth: 1,
              // borderRadius: 50,
            }}
            onPress={()=>(navigation.navigate('Alpha'))}
          >
            <ImageBackground
              source={require("../../assets/alphabet.gif")}
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
        <View
          style={{
            height: 120,
            width: 140,
            margin: 20,
          }}
        >
          <Text style={styles.alphabet}>Months</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFF",
              height: 120,
              width: 140,
              // borderWidth: 1,
              // borderRadius: 50,
            }}
            onPress={()=>(navigation.navigate('Months'))}
          >
            <ImageBackground
              source={require("../../assets/months.gif")}
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
      <View style={{ flex: 2, backgroundColor:'white',flexDirection: "row" }}>
        <View
          style={{
            height: 120,
            width: 140,
            margin: 20,
          }}
        >
          <Text style={styles.alphabet}>The Days of the week</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFF",
              height: 120,
              width: 140,
              // borderWidth: 1,
              // borderRadius: 50,
            }}
            onPress={()=>(navigation.navigate('week'))}
          >
            <ImageBackground
              source={require("../../assets/giphy.gif")}
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
        <View
          style={{
            height: 120,
            width: 140,
            margin: 20,
          }}
        >
          <Text style={styles.alphabet}>Fruits & Vegitables</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFF",
              height: 120,
              width: 140,
              // borderWidth: 1,
              // borderRadius: 50,
            }}
          >
            <ImageBackground
              source={require("../../assets/fruit.gif")}
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
      <View style={{ flex: 2,backgroundColor:'white',flexDirection: "row" }}>
        <View
          style={{
            height: 120,
            width: 140,
            margin: 20,
          }}
        >
          <Text style={styles.alphabet}>Pre math</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFF",
              height: 120,
              width: 140,
              // borderWidth: 1,
              // borderRadius: 50,
            }}
          >
            <ImageBackground
              source={require("../../assets/maths.gif")}
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
        <View
          style={{
            height: 120,
            width: 140,
            margin: 20,
          }}
        >
          <Text style={styles.alphabet}>Flowers</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFF",
              height: 120,
              width: 140,
              // borderWidth: 1,
              // borderRadius: 50,
            }}
            onPress={()=>(navigation.navigate('MainInstruction'))}
          >
            <ImageBackground
              source={require("../../assets/flowers.gif")}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor:'white'
  },
  button: {
    borderWidth: 1,
    padding: 25,
    borderColor: "black",
    height: 80,
  },
  alphabet: {
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    fontSize: 15,
    margin:10
  },
});
