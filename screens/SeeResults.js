import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../assets/context/AppContextProvider";
import { useFonts } from "expo-font";
import { styles } from "../assets/styles/styles";
import NextIcon from "../components/NextIcon.js";

const SeeResults = ({ navigation }) => {
	const [fontsLoaded] = useFonts({
		"SourceSansPro-Bold": require("../assets/fonts/SourceSansPro-Bold.ttf"),
		"SourceSansPr-Regular": require("../assets/fonts/SourceSansPro-Regular.ttf"),
	});
	const {
		step,
		setStep,
		correctAnswers,
		setCorrectAnswers,
		wrongAnswers,
		setWrongAnswers,
		setDrawedQuestions,
		drawedQuestions,
		givenAnswers,
		setGivenAnswers,
	} = useContext(AppContext);

	useEffect(() => {
		setStep(1);
	}, []);

	const handleFinish = () => {
		setStep(1);
		setGivenAnswers([]);
		setDrawedQuestions([]);
		navigation.navigate("Home");
	};

	const handleNextButton = () => {
		setStep((prev) => prev + 1);
	};

	const checkCorrectAndWrongStyle = (i, o, answer) => {
		if (givenAnswers[i] === o && givenAnswers[i] === answer) {
			return [styles.yourAnswer, styles.correct];
		} else if (givenAnswers[i] === o && givenAnswers[i] !== answer) {
			return [styles.yourAnswer, styles.wrong];
		} else if (answer === o) {
			return [styles.correct];
		} else [styles.bigButton];

		return [styles.bigButton];
	};

	return (
		<View style={styles.container}>
			{drawedQuestions.length + 1 === step && (
				<View>
					<Pressable style={styles.bigButton} onPress={handleFinish}>
						<Text style={[styles.text, styles.textRegular]}>Zakończ</Text>
					</Pressable>
				</View>
			)}

			{drawedQuestions?.map(
				({ question, options, answer, image}, i) =>
					i === step - 1 && (
						<View key={question}  style={[styles.containerMW300]}>
							<Text style={styles.textWhite}> {question}</Text>
							<Image
												source={image}
												style={image && [styles.image]}
											/>
							{options?.map((o) => {
								return (
									<View key={o}>
										<Pressable style={checkCorrectAndWrongStyle(i, o, answer)}>
											<Text
												style={
													o === answer
														? [
																textStyles.correctText,
																styles.textSmallButton,
																textStyles.textRegular,
														  ]
														: [styles.textSmallButton, textStyles.textRegular]
												}
											>
												{o}
											</Text>
										</Pressable>
									</View>
								);
							})}
				<Pressable
					style={styles.roundButton}
					onPress={() => handleNextButton()}
				>
					<NextIcon />
				</Pressable>
						</View>
					)
			)}


		</View>
	);
};

export default SeeResults;

const textStyles = StyleSheet.create({
	textRegular: { fontFamily: "SourceSansPr-Regular" },
	textBold: {
		textBold: "SourceSansPro-Bold",
	},
	correctText: {
		color: "#2D6E27",
	},
	wrongText: {
		color: "#FFECEF",
	},
});
