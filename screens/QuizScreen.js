import React from "react";
import { View, Text, Pressable,  StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { AppContext } from "../assets/context/AppContextProvider";
import { useContext } from "react";
import { ratownictwo } from "../assets/questions/ratownictwo";
import { budowaJachtu } from "../assets/questions/budowaJachtu";
import {locja } from "../assets/questions/locja";
import {styles} from "../assets/styles/styles";
import {getRandomQuestions} from "../assets/helpers/index"

const QuizsScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'SourceSansPro-Bold': require('../assets/fonts/SourceSansPro-Bold.ttf'),
    'SourceSansPr-Regular': require('../assets/fonts/SourceSansPro-Regular.ttf')
  });
  const { setDrawedQuestions } =
    useContext(AppContext);


  const handleToTest =()=>{
    setDrawedQuestions(prev => [...prev, ...getRandomQuestions(ratownictwo).slice(0, 7), ...getRandomQuestions(budowaJachtu).slice(0,3), ...getRandomQuestions(locja).slice(0,3)].flat())
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

