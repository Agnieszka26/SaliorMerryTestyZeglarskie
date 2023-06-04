import { useFonts } from "expo-font";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppContext } from "../assets/context/AppContextProvider";
import { getRandomQuestions } from "../assets/helpers/index";
import { budowaJachtu } from "../assets/questions/budowaJachtu";
import { locja } from "../assets/questions/locja";
import { meteorologia } from "../assets/questions/meteorologia";
import { przepisy } from "../assets/questions/przepisy";
import { ratownictwo } from "../assets/questions/ratownictwo";
import { teoriaZeglowania } from "../assets/questions/teoriaZeglowania";
import { styles } from "../assets/styles/styles";
import DefaultButton from "../components/Button/button";
import { textStyles } from "../assets/styles/textStyles";

const QuizsScreen = ({ navigation }) => {
	const [fontsLoaded] = useFonts({
		"SourceSansPro-Bold": require("../assets/fonts/SourceSansPro-Bold.ttf"),
		"SourceSansPr-Regular": require("../assets/fonts/SourceSansPro-Regular.ttf"),
	});
	const { setDrawedQuestions } = useContext(AppContext);

	const handleToTest = () => {
		setDrawedQuestions((prev) =>
			[
				...prev,
				...getRandomQuestions(budowaJachtu).slice(0, 12),
				...getRandomQuestions(ratownictwo).slice(0,13),
				...getRandomQuestions(locja).slice(0, 15),
				...getRandomQuestions(przepisy).slice(0, 15),
				...getRandomQuestions(teoriaZeglowania).slice(0,10),
				...getRandomQuestions(meteorologia).slice(0,10)
			].flat()
		);
		navigation.navigate("QuestionQuiz");
	};

	return (
		<View style={[styles.container]}>
			<View style={[styles.containerMW300]}>
				<Text style={[styles.textRed, textStyles.textBold, styles.upperCase]}>
					test
				</Text>
				<Text style={[styles.textWhite, textStyles.textRegular]}>
					Test składa się z 75 pytań. Aby zdać test musisz zdobyć 65 punktów.
					Nie możesz cofnąć pytań, więc dobrze zaznaczaj odpowiedzi.
				</Text>
				<View style={styles.buttons2}>
					<DefaultButton
						text={`rozpocznij test`}
						stylePress={styles.button}
						handlePress={() => handleToTest()}
						styleText={[styles.upperCase, styles.text, textStyles.textRegular]}
					/>
				</View>
			</View>
		</View>
	);
};

export default QuizsScreen;
