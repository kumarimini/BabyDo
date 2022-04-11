import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStaredScreen from "../Screens/GetStartedScreen";
import SplashScreen from "../Screens/SplashScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import AlphabetScreen from "../Screens/AlphabetsScreen";
import MonthsScreen from "../Screens/MonthsScreen";
import WeekScreen from "../Screens/WeekScreen";
import MainInstructionScreen from "../Screens/MainInstructionScreen";
import FruitScreen from "../Screens/FruitScreen";
import TextSaveScreen from "../Screens/TextSaveScreen";
import VegetablesScreen from "../Screens/VegetablesScreen";
import BirdsScreen from "../Screens/BirdsScreen";
import Apple from "../ScrennImg/Apple";
import Ball from "../ScrennImg/Ball";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="get" component={GetStaredScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="Alphabets" component={AlphabetScreen} />
        <Stack.Screen name="Months" component={MonthsScreen} />
        <Stack.Screen name="week" component={WeekScreen}/>
        <Stack.Screen name="MainInstruction" component={MainInstructionScreen}/>
        <Stack.Screen name="fruits" component={FruitScreen} />
        <Stack.Screen name="Vegetables" component={VegetablesScreen} />
        <Stack.Screen name="TextSave" component={TextSaveScreen}/> 
        <Stack.Screen name="Bird" component={BirdsScreen}/> 
        <Stack.Screen name="Apple" component={Apple}/> 
        <Stack.Screen name="Ball" component={Ball}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
