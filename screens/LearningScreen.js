import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { styles } from "../assets/styles/styles";
import { AppContext } from "../assets/context/AppContextProvider";
import { useContext } from "react";
import { budowaJachtu } from "../assets/questions/budowaJachtu";
import { ratownictwo } from "../assets/questions/ratownictwo";
import {locja} from "../assets/questions/locja";

const buttons = [
	{ path: "inlandRegulations", name: "przepisy śródlądowe", disabled: true },
	{ path: "yachtBuilding", name: "budowa jachtów", disabled: false },
	{ path: "sailingTheory", name: "teoria żeglowania", disabled: true },
	{ path: "pilotage", name: "locja", disabled: false },
	{ path: "meteorology", name: "meteorologia", disabled: true },
	{ path: "lifesaving", name: "ratownictwo", disabled: false },
];

const LearningScreen = ({ navigation }) => {
	const { setDepartment, setModuleName } = useContext(AppContext);
	const getDepartment = (path, name) => {
		switch (path) {
			case "lifesaving":
				setModuleName(name);
				setDepartment(ratownictwo);
				navigation.navigate("GetNumberQuestion");
				break;
			case "yachtBuilding":
				setModuleName(name);
				setDepartment(budowaJachtu);
				navigation.navigate("GetNumberQuestion");
				break;
			case "pilotage":
				setModuleName(name);
				setDepartment(locja);
				navigation.navigate("GetNumberQuestion");
				break;
			default:
				break;
		}
	};

	return (
		<View style={[styles.container]}>
			<View style={[styles.containerMW300]}>
				<Text style={[styles.textRed, textStyles.textBold]}> nauka </Text>

				{buttons.map(({ path, name, disabled }) => {
					return (
						<Pressable
							key={path}
							style={disabled ? [styles.disabledButton] : [styles.button]}
							onPress={() => getDepartment(path, name)}
						>
							<Text style={[styles.text, textStyles.textRegular]}>{name}</Text>
						</Pressable>
					);
				})}
			</View>
		</View>
	);
};

export default LearningScreen;
const textStyles = StyleSheet.create({
	textRegular: { fontFamily: "SourceSansPr-Regular" },
	textBold: {
		textBold: "SourceSansPro-Bold",
	},
});
