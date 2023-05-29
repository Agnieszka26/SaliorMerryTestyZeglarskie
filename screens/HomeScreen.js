import React from "react";
import { Image, Pressable, Text, View, StyleSheet} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import logo from "../assets/salior-merry-logo-white.png";
import {styles} from "../assets/styles/styles"

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Regular: require("../assets/fonts/SourceSansPro-Bold.ttf"),
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View>
        <Image style={styles.image} source={logo} />
      </View>

      <View style={[styles.buttons3, styles.paddingTop100]}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("LearningScreen")}
        >
          <Text style={[styles.text, textStyles.textRegular]}>nauka</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Quiz")}
        >
          <Text style={[styles.text, textStyles.textRegular]}>test</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;
const textStyles = StyleSheet.create({
	textRegular:
	{fontFamily: 'SourceSansPr-Regular'},
	textBold:{

	  textBold: 'SourceSansPro-Bold'
	 }
   })
