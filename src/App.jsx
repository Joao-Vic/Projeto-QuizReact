/* eslint-disable react-hooks/exhaustive-deps */
import './App.css'

import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

import Inicio from './components/Inicio'
import Questao from './components/Questao'
import Fim from './components/Fim'
import Footer from './components/Footer';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  return (
    <div className="App">
      <h1>Quiz de Boas Práticas de Programação em JavaScript</h1>
      <p>Grupo: João Victor Ferreira Oliveira e Joice Cristina Alves de Oliveira</p>
      <p>Data: {formattedDate}</p>
      <br />
      {quizState.gameStage === "Start" && <Inicio/>}
      {quizState.gameStage === "Playing" && <Questao/>}
      {quizState.gameStage === "End" && <Fim/>}
      <br />
      <Footer/>
    </div>
  )
}

export default App
