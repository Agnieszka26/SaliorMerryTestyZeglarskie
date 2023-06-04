import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useContext, useEffect } from "react";
import { Image, View } from "react-native";
import logo from "../assets/salior-merry-logo-white.png";
import { styles } from "../assets/styles/styles";
import { textStyles } from "../assets/styles/textStyles";
import DefaultButton from "../components/Button/button";
import { AppContext } from "../assets/context/AppContextProvider";

const HomeScreen = ({ navigation }) => {
	const {setWrongAnswers, setDrawedQuestions, setCorrectAnswers, setGivenAnswers, setStep, setDepartment, setModuleName } = useContext(AppContext);
	const [fontsLoaded] = useFonts({
		Regular: require("../assets/fonts/SourceSansPro-Bold.ttf"),
	});
	useEffect(() => {
		setStep(1);
		setModuleName("");
		setGivenAnswers([]);
		setDrawedQuestions([]);
		setCorrectAnswers([]);
		setWrongAnswers([]);
		setDepartment("");
	},[setModuleName, setStep, setGivenAnswers, setDrawedQuestions, setCorrectAnswers, setWrongAnswers, setDepartment]);
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
				<DefaultButton
					text={`nauka`}
					stylePress={styles.button}
					styleText={[styles.text, textStyles.textRegular, styles.upperCase]}
					handlePress={() => navigation.navigate("LearningScreen")}
				/>
				<DefaultButton
					text={`test`}
					stylePress={styles.button}
					styleText={[styles.text, textStyles.textRegular, styles.upperCase]}
					handlePress={() => navigation.navigate("Quiz")}
				/>
			</View>
		</View>
	);
};

export default HomeScreen;
