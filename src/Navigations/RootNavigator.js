import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStaredScreen from "../Screens/GetStartedScreen";
import SplashScreen from "../Screens/SplashScreen";
import LoginScreen from "../Screens/LoginScreen";
import AlphabetScreen from "../Screens/AlphabetsScreen";
import MonthsScreen from "../Screens/MonthsScreen";
import WeekScreen from "../Screens/WeekScreen";
import MainInstructionScreen from "../Screens/MainInstructionScreen";
import FruitScreen from "../Screens/FruitScreen";
import TextSaveScreen from "../Screens/TextSaveScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="get" component={GetStaredScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="Alphabets" component={AlphabetScreen} />
        <Stack.Screen name="Months" component={MonthsScreen} />
        <Stack.Screen name="week" component={WeekScreen}/>
        <Stack.Screen name="MainInstruction" component={MainInstructionScreen}/>
        <Stack.Screen name="Fruit" component={FruitScreen}/> 
        <Stack.Screen name="TextSave" component={TextSaveScreen}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
