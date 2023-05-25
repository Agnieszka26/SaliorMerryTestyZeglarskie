import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		backgroundColor: "#FFFFFF",
	},

	disabledButton: {
		marginTop: 16,
		height: 64,
		width: 250,
		textAlign: "center",
		flex: 4,
		alignItems: "center",
		justifyContent: "center",
		color: "#050F36",
		borderRadius: 16,
		backgroundColor: "#ACACAA",
		cursor: "no-drop",
		opacity: "40%",
	},
	image: {
		height: 200,
		width: 200,
	},
	container: {
		flex: 1,
		backgroundColor: "#050F36",
		alignItems: "center",
		justifyContent: "center",
		paddingLeft: 16,
		paddingRight: 16,
	},
	container5: {
		flex: 5,
		backgroundColor: "#050F36",
		alignItems: "center",
		justifyContent: "center",
		paddingLeft: 16,
		paddingRight: 16,
	},
	container2: {
		flex: 2,
		backgroundColor: "#050F36",
		alignItems: "center",
		justifyContent: "center",
		paddingLeft: 16,
		paddingRight: 16,
	},

	containerMW300: {
		maxWidth: 300,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	text: {
		fontSize: 24,
		color: "#050F36",
	},

	button: {
		marginTop: 16,
		height: 64,
		width: 250,
		backgroundColor: "#FFFFFF",
		textAlign: "center",
		flex: 4,
		alignItems: "center",
		justifyContent: "center",
		color: "#050F36",
		borderRadius: 16,
	},
	button6: {
		marginTop: 16,
		height: 64,
		width: 250,
		backgroundColor: "#FFFFFF",
		textAlign: "center",
		flex: 8,
		alignItems: "center",
		justifyContent: "center",
		color: "#050F36",
		borderRadius: 16,
	},

	textRed: {
		fontSize: 32,
		fontFamily: "SourceSansPro-Bold",
		color: "#D53148",
		paddingBottom: 32,
	},
	textRedSmall: {
		fontSize: 20,
		fontFamily: "SourceSansPro-Bold",
		color: "#D53148",
		paddingBottom: 32,
	},

	textWhiteSmall: {
		textAlign: "center",
		fontSize: 20,
		color: "#FFFFFF",
		alignItems: "center",
	},
	textWhite: {
		paddingTop: 32,
		paddingBottom: 64,
		textAlign: "center",
		fontSize: 24,
		color: "#FFFFFF",
	},

	textSmallButton: {
		fontSize: 16,
		color: "#000000",
	},

	buttons3: {
		flex: 0.5,
		paddingTop: 20,
	},
	buttons2: {
		flex: 0.3,
		paddingTop: 20,
	},

	paddingTop100: {
		paddingTop: 100,
	},

	treeButtons: {
		height: 250,
		width: 350,
		paddingBottom: 8,
	},

	bigButton: {
		height: 75,
		width: 350,
		marginTop: 32,
		backgroundColor: "#FFFFFF",
		textAlign: "center",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 16,
		padding: 4,
	},

	containerTimeAndCounter: {
		flexDirection: "row",
		flexWrap: "wrap",
		flex: 1,
		paddingLeft: 30,
		paddingRight: 30,
		justifyContent: "space-between",
	},
	left: {
		alignItems: "flex-start",
		justifyContent: "center",
	},
	right: {
		alignItems: "flex-end",
		justifyContent: "center",
	},
	correct: {
		height: 75,
		width: 350,
		marginTop: 32,
		backgroundColor: "#E7FFE4",
		textAlign: "center",
		alignItems: "center",
		justifyContent: "center",
		borderColor: "#2D6E27",
		borderRadius: 16,
		padding: 4,
	},
	wrong: {
		height: 75,
		width: 350,
		marginTop: 32,
		backgroundColor: "#FFECEF",
		textAlign: "center",
		alignItems: "center",
		justifyContent: "center",
		borderColor: "#FD0023",
		borderRadius: 16,
		padding: 4,
	},

	yourAnswer: {
		borderStyle: "solid",
		borderWidth: 5,
		borderColor: "#050F36",
	},

	roundButton: {
		position: "absolute",
		right: 32,
		bottom: 16,
	},
});
