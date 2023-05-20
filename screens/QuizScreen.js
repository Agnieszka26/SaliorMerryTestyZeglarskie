import React from "react";
import { View, Text, Pressable,  StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { AppContext } from "../assets/context/AppContextProvider";
import { useContext } from "react";
import { ratownictwo } from "../assets/questions/ratownictwo";
import { budowaJachtu } from "../assets/questions/budowaJachtu";
import {styles} from "./styles"

const QuizsScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'SourceSansPro-Bold': require('../assets/fonts/SourceSansPro-Bold.ttf'),
    'SourceSansPr-Regular': require('../assets/fonts/SourceSansPro-Regular.ttf')
  });
  const { setDrawedQuestions } =
    useContext(AppContext);

  const getRandomQuestions = (numberOfQuestions, questions) => {
    for (let i = questions.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + Math.floor(Math.random())));
      return [questions[i], questions[j]] = [questions[j], questions[i]].slice(0, numberOfQuestions);
    };
  };

  const handleToTest =()=>{
    setDrawedQuestions(prev => [...prev, ...getRandomQuestions(1, ratownictwo), ...getRandomQuestions(1, budowaJachtu)].flat())
     navigation.navigate("QuestionQuiz")}

  return (
    <View style={[styles.container, ]}>
      <View style={[styles.containerMW300]}>

      <Text style={[styles.textRed, textStyles.textBold ]}> test </Text>
      <Text style={[styles.textWhite, textStyles.textRegular]}>
        Test składa się z 75 pytań. Aby zdać test musisz zdobyć 65 punktów. Nie
        możesz cofnąć pytań, więc dobrze zaznaczaj odpowiedzi.
      </Text>
      <View style={styles.buttons2}>
        <Pressable
          style={styles.button}
          onPress={handleToTest}
          >
          <Text style={[styles.text, textStyles.textRegular]}>rozpocznij test</Text>
        </Pressable>
      </View>
      </View>
    </View>
  );
};

export default QuizsScreen;

const textStyles = StyleSheet.create({
 textRegular:
 {fontFamily: 'SourceSansPr-Regular'},
 textBold:{

   textBold: 'SourceSansPro-Bold'
  }
})

