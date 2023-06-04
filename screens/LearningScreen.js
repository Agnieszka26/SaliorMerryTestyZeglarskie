import React, { useContext } from "react";
import { Text, View } from "react-native";
import { AppContext } from "../assets/context/AppContextProvider";
import { budowaJachtu } from "../assets/questions/budowaJachtu";
import { locja } from "../assets/questions/locja";
import { meteorologia } from "../assets/questions/meteorologia";
import { przepisy } from "../assets/questions/przepisy";
import { ratownictwo } from "../assets/questions/ratownictwo";
import { teoriaZeglowania } from "../assets/questions/teoriaZeglowania";
import { styles } from "../assets/styles/styles";
import { textStyles } from "../assets/styles/textStyles";
import DefaultButton from "../components/Button/button";

const buttons = [
	{ path: "inlandRegulations", name: "przepisy" },
	{ path: "yachtBuilding", name: "budowa jachtów" },
	{ path: "sailingTheory", name: "teoria żeglowania" },
	{ path: "pilotage", name: "locja" },
	{ path: "meteorology", name: "meteorologia" },
	{ path: "lifesaving", name: "ratownictwo" },
];

const LearningScreen = ({ navigation }) => {
	const { setDepartment, setModuleName } = useContext(AppContext);
	const getDepartment = (path, name) => {
		switch (path) {
			case "inlandRegulations":
				setModuleName(name);
				setDepartment(przepisy);
				navigation.navigate("GetNumberQuestion");
				break;
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
			case "meteorology":
				setModuleName(name);
				setDepartment(meteorologia);
				navigation.navigate("GetNumberQuestion");
				break;
			case "sailingTheory":
				setModuleName(name);
				setDepartment(teoriaZeglowania);
				navigation.navigate("GetNumberQuestion");
				break;

			default:
				break;
		}
	};

	return (
		<View style={[styles.container]}>
			<Text style={[styles.textRed, textStyles.textBold, styles.upperCase]}>
				{" "}
				nauka{" "}
			</Text>
			{buttons.map(({ path, name }) => {
				return (
					<DefaultButton
						text={name}
						key={path}
						styleText={[styles.text, textStyles.textRegular, styles.upperCase]}
						stylePress={styles.button}
						handlePress={() => getDepartment(path, name)}
					/>
				);
			})}
		</View>
	);
};

export default LearningScreen;
