import React from "react";
import { View, Text, Pressable,  StyleSheet, TextInput} from "react-native";
import { useFonts } from "expo-font";
import { AppContext } from "../assets/context/AppContextProvider";
import { useContext } from "react";
import { ratownictwo } from "../assets/questions/ratownictwo";
import { budowaJachtu } from "../assets/questions/budowaJachtu";
import {styles} from "./styles"

const GetNumberQuestion = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'SourceSansPro-Bold': require('../assets/fonts/SourceSansPro-Bold.ttf'),
    'SourceSansPr-Regular': require('../assets/fonts/SourceSansPro-Regular.ttf')
  });
  const {department,  questionNumber,moduleName, setQuestionNumber, setDrawedQuestions } =
    useContext(AppContext);


  const getRandomQuestions = (array) => {
      let currentIndex = array.length,  randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
  };

  const handleToTest = () =>{
    setDrawedQuestions(getRandomQuestions(department).slice(0, questionNumber))
     navigation.navigate("LearningQuiz")}

  return (
    <View style={[styles.container ]}>
      <Text style={[styles.textRed, textStyles.textBold ]}> nauka </Text>
      <Text style={[styles.textRedSmall, textStyles.textRegular ]}> {moduleName} </Text>
      <Text style={[styles.textWhite, textStyles.textRegular]}>
      Ile pytań chcesz dziś się nauczyć? (max 60)
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setQuestionNumber}
        value={questionNumber}
        placeholder="na przykład.: 25"
        keyboardType="numeric"
      />
      <View style={styles.buttons2}>
        <Pressable
          style={styles.button}
          onPress={handleToTest}
          >
          <Text style={[styles.text, textStyles.textRegular]}>rozpocznij naukę</Text>
        </Pressable>
      </View>
      </View>

  );
};

export default GetNumberQuestion;

const textStyles = StyleSheet.create({
 textRegular:
 {fontFamily: 'SourceSansPr-Regular'},
 textBold:{

   textBold: 'SourceSansPro-Bold'
  }
})

