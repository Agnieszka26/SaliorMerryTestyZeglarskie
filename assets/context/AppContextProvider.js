import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [step, setStep] = useState(1);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const[givenAnswers, setGivenAnswers]= useState([]);
const [doneQuestions, setDoneQuestions] = useState([]);
const [department, setDepartment] = useState([]);
const [moduleName, setModuleName] = useState('')
  //@TODO
  //losowanie pytań z każdego działu z tarownictwa 5, budowa jechtu 5
  const [drawedQuestions, setDrawedQuestions] = useState([]);

  return (
    <AppContext.Provider
      value={{
        drawedQuestions,
        setDrawedQuestions,
        step,
        setStep,
        correctAnswers,
        setCorrectAnswers,
        wrongAnswers,
        setWrongAnswers,
        questionNumber, setQuestionNumber,
        givenAnswers, setGivenAnswers,
        doneQuestions, setDoneQuestions,
        department, setDepartment,
        moduleName, setModuleName
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
