import { useFonts } from "expo-font";
import React, { useContext, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AppContext } from "../assets/context/AppContextProvider";
import { styles } from "../assets/styles/styles";
import NextIcon from "../components/NextIcon.js";

const LearningQuiz = ({ navigation }) => {
	const { step, setStep, drawedQuestions, moduleName } = useContext(AppContext);

	const [isGivenAnswer, setIsGivenAnswer] = useState(false);
	const [myAnswer, setMyAnswer] = useState("");
	const [fontsLoaded] = useFonts({
		"SourceSansPro-Bold": require("../assets/fonts/SourceSansPro-Bold.ttf"),
		"SourceSansPr-Regular": require("../assets/fonts/SourceSansPro-Regular.ttf"),
	});
	const handleOnPressAnswer = (option) => {
		!isGivenAnswer && handleGiveAnswer(option);
	};

	const handleNextButton = () => {
		setIsGivenAnswer(false);
		setMyAnswer("");
		setStep((prev) => prev + 1);
	};
	const handleGiveAnswer = (option) => {
		setIsGivenAnswer(true);
		setMyAnswer(option);
	};
	const handleFinish = () => {
		setStep(1);
		setDrawedQuestions([]);
		navigation.navigate("Home");
	};

	return (
		<View style={[styles.container]}>
			<Text style={[styles.textRed, textStyles.textBold]}> nauka </Text>
			<Text style={[styles.textRedSmall, textStyles.textRegular]}>
				{moduleName}
			</Text>
			{step === drawedQuestions.length && (
				<View>
					<Text style={styles.textWhite}>
						Gratuluję, zrobiłeś wszystkie zamierzone pytania z danego działu.
					</Text>
					<Pressable style={styles.bigButton} onPress={handleFinish}>
						<Text style={[styles.text, styles.textRegular]}>Zakończ</Text>
					</Pressable>
				</View>
			)}
			<Text style={[styles.textWhiteSmall, styles.textRegular]}>Pytanie</Text>
			<Text style={[styles.textWhiteSmall, styles.textRegular]}>
				{step} / {drawedQuestions.length}
			</Text>
			{drawedQuestions?.map(
				({ question, options, answer, image }, index) =>
					index === step - 1 && (
						<View key={question}>
							<Text style={styles.textWhite}> {question}</Text>
							<Image
								source={image}
								style={image && [styles.image, styles.center]}
							/>
							{options?.map((option, index) => {
								return (
									<View key={option + index} style={[styles.container]}>
										<Pressable
											style={
												myAnswer === option && myAnswer === answer
													? [styles.yourAnswer, styles.correct]
													: myAnswer === option && myAnswer !== answer
													? [styles.yourAnswer, styles.wrong]
													: myAnswer && option === answer
													? [styles.correct]
													: [styles.bigButton]
											}
											onPress={() => handleOnPressAnswer(option)}
										>
											<Text
												style={[styles.textSmallButton, textStyles.textRegular]}
											>
												{option}
											</Text>
										</Pressable>
									</View>
								);
							})}
						</View>
					)
			)}

			{isGivenAnswer && (
				<Pressable
					style={styles.roundButton}
					onPress={() => handleNextButton()}
				>
					<NextIcon />
				</Pressable>
			)}
		</View>
	);
};

export default LearningQuiz;

const textStyles = StyleSheet.create({
	textRegular: { fontFamily: "SourceSansPr-Regular" },
	textBold: {
		textBold: "SourceSansPro-Bold",
	},
});
