import { useFonts } from "expo-font";
import React, { useContext, useState } from "react";
import { Image, Text, View } from "react-native";
import { AppContext } from "../assets/context/AppContextProvider";
import { styles } from "../assets/styles/styles";
import { textStyles } from "../assets/styles/textStyles";
import DefaultButton from "../components/Button/button";
import NextIcon from "../components/NextIcon.js";

const LearningQuiz = ({ navigation }) => {
	const {
		step,
		setStep,
		drawedQuestions,
		moduleName,
		setDrawedQuestions,
		setModuleName,
	} = useContext(AppContext);
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
		setModuleName("");
		navigation.navigate("Home");
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
			{step - 1 === drawedQuestions.length && (
				<View>
					<Text style={styles.textWhite}>
						Gratuluję, zrobiłeś wszystkie zamierzone pytania z danego działu.
					</Text>
					<DefaultButton
						text={`Zakończ`}
						stylePress={styles.bigButton}
						handlePress={() => handleFinish()}
						styleText={[styles.text, styles.textRegular]}
					/>
				</View>
			)}
			{drawedQuestions?.map(
				({ question, options, answer, image }, index) =>
					index === step - 1 && (
						<View key={question}>
							<Text style={[styles.textWhiteSmall, styles.textRegular]}>
								Pytanie
							</Text>
							<Text style={[styles.textWhiteSmall, styles.textRegular]}>
								{step} / {drawedQuestions.length}
							</Text>
							<View>
								<Text style={styles.textWhite}> {question}</Text>
								<Image
									source={image}
									style={image && [styles.questionImage, styles.center]}
								/>
								{options?.map((option, index) => {
									return (
										<View key={option + index}>
											<DefaultButton
												stylePress={
													myAnswer === option && myAnswer === answer
														? [styles.yourAnswer, styles.correct]
														: myAnswer === option && myAnswer !== answer
														? [styles.yourAnswer, styles.wrong]
														: myAnswer && option === answer
														? [styles.correct]
														: [styles.bigButton]
												}
												handlePress={() => handleOnPressAnswer(option)}
												styleText={[
													styles.textSmallButton,
													textStyles.textRegular,
												]}
												text={option}
											/>
										</View>
									);
								})}
							</View>
						</View>
					)
			)}

			{isGivenAnswer && (
				<NextIcon
					style={styles.roundButton}
					onPress={() => handleNextButton()}
				/>
			)}
		</View>
	);
};

export default LearningQuiz;
