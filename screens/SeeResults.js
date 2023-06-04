import { useFonts } from "expo-font";
import React, { useContext, useEffect } from "react";
import { Image, Text, View } from "react-native";
import { AppContext } from "../assets/context/AppContextProvider";
import { styles } from "../assets/styles/styles";
import { textStyles } from "../assets/styles/textStyles";
import DefaultButton from "../components/Button/button";
import NextIcon from "../components/NextIcon.js";

const SeeResults = ({ navigation }) => {
	const [fontsLoaded] = useFonts({
		"SourceSansPro-Bold": require("../assets/fonts/SourceSansPro-Bold.ttf"),
		"SourceSansPr-Regular": require("../assets/fonts/SourceSansPro-Regular.ttf"),
	});
	const {
		step,
		setStep,
		setCorrectAnswers,
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
		setCorrectAnswers([]);
		setWrongAnswers([]);
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
					<DefaultButton
						text={`Zakończ`}
						stylePress={styles.bigButton}
						handlePress={handleFinish}
						styleText={[styles.text, styles.textRegular, styles.upperCase]}
					/>
				</View>
			)}

			{drawedQuestions?.map(
				({ question, options, answer, image }, i) =>
					i === step - 1 && (
						<View key={question} style={[styles.containerMW300]}>
							<Text style={styles.textWhite}> {question}</Text>
							<Image source={image} style={image && [styles.image]} />
							{options?.map((o) => {
								return (
									<DefaultButton
										key={o}
										text={o}
										stylePress={checkCorrectAndWrongStyle(i, o, answer)}
										handlePress={handleFinish}
										styleText={
											o === answer
												? [
														textStyles.correctText,
														styles.textSmallButton,
														textStyles.textRegular,
												  ]
												: [styles.textSmallButton, textStyles.textRegular]
										}
									/>
								);
							})}
							<NextIcon
								style={styles.roundButton}
								onPress={() => handleNextButton()}
							/>
						</View>
					)
			)}
		</View>
	);
};

export default SeeResults;
