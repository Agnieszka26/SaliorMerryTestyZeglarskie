import { useFonts } from "expo-font";
import React, { useContext, useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { AppContext } from "../assets/context/AppContextProvider";
import { styles } from "../assets/styles/styles";
import { textStyles } from "../assets/styles/textStyles";

const QuestionQuizScreen = ({ navigation }) => {
	const [fontsLoaded] = useFonts({
		"SourceSansPro-Bold": require("../assets/fonts/SourceSansPro-Bold.ttf"),
		"SourceSansPr-Regular": require("../assets/fonts/SourceSansPro-Regular.ttf"),
	});
	const {
		step,
		setStep,
		setCorrectAnswers,
		setWrongAnswers,
		drawedQuestions,
		setGivenAnswers,
		setDrawedQuestions,
		correctAnswers,
	} = useContext(AppContext);
	const [minutes, setMinutes] = useState(89);
	const [seconds, setSeconds] = useState(59);

	useEffect(() => {
		const interval = setInterval(() => {
			if (seconds > 0) {
				setSeconds((sek) => sek - 1);
			} else {
				setSeconds(59);
				setMinutes((min) => min - 1);
			}
			if (seconds === 0 && minutes === 0) {
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [seconds]);

	const handleGiveAnswer = (givenAnswer, correctAnswer) => {
		if (givenAnswer === correctAnswer) {
			setCorrectAnswers((prev) => [...prev, givenAnswer]);
		} else {
			setWrongAnswers((prev) => [...prev, givenAnswer]);
		}

		setGivenAnswers((prev) => [...prev, givenAnswer]);
		setStep((prev) => prev + 1);
	};
	const handleFinish = () => {
		setStep(1);
		setGivenAnswers([]);
		setWrongAnswers([]);
		setCorrectAnswers([]);
		setDrawedQuestions([]);
		navigation.navigate("Home");
	};

	return (
		<View style={styles.container}>
			<View style={styles.containerMW300}>
				<Text style={[styles.textRed, styles.textBold, styles.upperCase]}>
					{" "}
					test
				</Text>
				{step - 1 === drawedQuestions.length ? (
					<View>
						<Text style={styles.textWhiteSmall}>Koniec testu</Text>

						<View>
							<Text style={[styles.textWhite, styles.textRegular]}>
								{correctAnswers.length >= 65
									? "Gratuluję"
									: "Nie udało się zdobyć wystarczająco punktów."}
							</Text>
							<Text style={[styles.textWhite, styles.textRegular]}>
								Twój wynik to {correctAnswers.length} / 75 punktów.
							</Text>
						</View>

						<Pressable style={styles.bigButton} onPress={() => handleFinish()}>
							<Text style={[styles.text, styles.textRegular]}>Zakończ</Text>
						</Pressable>

						<Pressable
							style={styles.bigButton}
							onPress={() => navigation.navigate("SeeResults")}
						>
							<Text style={[styles.text, styles.textRegular]}>
								Zobacz odpowiedzi
							</Text>
						</Pressable>
					</View>
				) : (
					<View>
						<View style={styles.containerTimeAndCounter}>
							<View>
								<Text style={[styles.textWhiteSmall, styles.textRegular]}>
									Pytanie
								</Text>
								<Text style={[styles.textWhiteSmall, styles.textRegular]}>
									{step} / {drawedQuestions.length}
								</Text>
							</View>
							<View>
								<Text style={[styles.textWhiteSmall, styles.textRegular]}>
									Czas
								</Text>
								<Text style={[styles.textWhiteSmall, styles.textRegular]}>
									{minutes.toString().length === 1
										? `0${minutes}`
										: `${minutes}`}
									:
									{seconds.toString().length === 1
										? `0${seconds}`
										: `${seconds}`}
								</Text>
							</View>
						</View>

						<View>
							{drawedQuestions?.map(
								({ question, options, answer, id, image }, index) =>
									index === step - 1 && (
										<View key={question}>
											<Text style={styles.textWhite}> {question}</Text>
											<Image
												source={image}
												style={image && [styles.questionImage, styles.center]}
											/>
											{options?.map((x, index) => {
												return (
													<View key={x + index}>
														<Pressable
															style={styles.bigButton}
															onPress={() => handleGiveAnswer(x, answer)}
														>
															<Text
																style={[
																	styles.textSmallButton,
																	textStyles.textRegular,
																]}
															>
																{x}
															</Text>
														</Pressable>
													</View>
												);
											})}
										</View>
									)
							)}
						</View>
					</View>
				)}
			</View>
		</View>
	);
};

export default QuestionQuizScreen;
