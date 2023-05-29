import { useFonts } from "expo-font";
import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { AppContext } from "../assets/context/AppContextProvider";
import { styles } from "../assets/styles/styles";
import {getRandomQuestions} from "../assets/helpers/index"

const GetNumberQuestion = ({ navigation }) => {
	const [fontsLoaded] = useFonts({
		"SourceSansPro-Bold": require("../assets/fonts/SourceSansPro-Bold.ttf"),
		"SourceSansPr-Regular": require("../assets/fonts/SourceSansPro-Regular.ttf"),
	});
	const {
		department,
		questionNumber,
		moduleName,
		setQuestionNumber,
		setDrawedQuestions,
	} = useContext(AppContext);

	const handleToTest = () => {
		setDrawedQuestions(getRandomQuestions(department).slice(0, questionNumber));
		navigation.navigate("LearningQuiz");
	};

	return (
		<View style={[styles.container]}>
			<Text style={[styles.textRed, textStyles.textBold]}> nauka </Text>
			<Text style={[styles.textRedSmall, textStyles.textRegular]}>
				{" "}
				{moduleName}{" "}
			</Text>
			<Text style={[styles.textWhite, textStyles.textRegular]}>
				Ile pytań chcesz dziś się nauczyć? (max 60)
			</Text>
			<TextInput
				style={styles.input}
				onChangeText={setQuestionNumber}
				value={questionNumber}
				placeholder="na przykład.: 25"
				keyboardType="numeric"
			/>
			<View style={styles.buttons2}>
				<Pressable style={styles.button} onPress={handleToTest}>
					<Text style={[styles.text, textStyles.textRegular]}>
						rozpocznij naukę
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default GetNumberQuestion;

const textStyles = StyleSheet.create({
	textRegular: { fontFamily: "SourceSansPr-Regular" },
	textBold: {
		textBold: "SourceSansPro-Bold",
	},
});
