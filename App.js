import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import logo from "./assets/salior-merry-logo-white.png";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import LearningScreen from "./screens/LearningScreen";
import QuizScreen from "./screens/QuizScreen";
import QuestionQuizScreen from "./screens/QuestionQuizScreen";
import SeeResults from './screens/SeeResults'
import { AppContextProvider } from "./assets/context/AppContextProvider";

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'SourceSansPro-Bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
    'SourceSansPr-Regular': require('./assets/fonts/SourceSansPro-Regular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <AppContextProvider  onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Learning" component={LearningScreen}   options={{ headerShown: false }}/>
          <Stack.Screen name="Quiz" component={QuizScreen}  options={{ headerShown: false }} />
          <Stack.Screen name="QuestionQuiz" component={QuestionQuizScreen}   options={{ headerShown: false }}/>
          <Stack.Screen name="SeeResults" component={SeeResults}   options={{ headerShown: true }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}
