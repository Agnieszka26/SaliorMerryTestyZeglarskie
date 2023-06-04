import React from "react";
import { Pressable, Text } from "react-native";

const DefaultButton = ({ text, handlePress, stylePress, styleText }) => {
	return (
		<Pressable style={stylePress} onPress={() => handlePress()}>
			<Text style={styleText}>{text}</Text>
		</Pressable>
	);
};

export default DefaultButton;
