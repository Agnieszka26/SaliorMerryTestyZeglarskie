import { useFonts } from "expo-font";
import React, { useContext } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { AppContext } from "../assets/context/AppContextProvider";
import { getRandomQuestions } from "../assets/helpers/index";
import { styles } from "../assets/styles/styles";
import { textStyles } from "../assets/styles/textStyles";
import DefaultButton from "../components/Button/button";

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
			<Text style={[styles.textRed, textStyles.textBold, styles.upperCase]}>
				nauka
			</Text>
			<Text
				style={[styles.textRedSmall, textStyles.textRegular, styles.upperCase]}
			>
				{moduleName}
			</Text>
			<Text style={[styles.textWhite, textStyles.textRegular]}>
				Ile pytań chcesz dziś się nauczyć? (max 50)
			</Text>

			<TextInput
				style={styles.input}
				onChangeText={setQuestionNumber}
				value={questionNumber.toString()}
				placeholder="na przykład.: 25"
				keyboardType="numeric"
			/>
			<View style={styles.buttons2}>
				<DefaultButton
					text={`rozpocznij naukę`}
					stylePress={styles.button}
					handlePress={handleToTest}
					styleText={[styles.upperCase, styles.text, textStyles.textRegular]}
				/>
			</View>
		</View>
	);
};

export default GetNumberQuestion;


