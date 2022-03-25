import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStaredScreen from "../Screens/GetStartedScreen";
import SplashScreen from "../Screens/SplashScreen";
import InstructionScreen from "../Screens/Instructions";
import LoginScreen from "../Screens/LoginScreen";
import AlphabetScreen from "../Screens/AlphabetsScreen";
import MonthsScreen from "../Screens/MonthsScreen";
import WeekScreen from "../Screens/WeekScreen";
import MainInstructionScreen from "../Screens/MainInstructionScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="get" component={GetStaredScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="instruction" component={InstructionScreen} />
        <Stack.Screen name="Alphabets" component={AlphabetScreen} />
        <Stack.Screen name="Months" component={MonthsScreen} />
        <Stack.Screen name="week" component={WeekScreen}/>
        <Stack.Screen name="MainInstruction" component={MainInstructionScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
