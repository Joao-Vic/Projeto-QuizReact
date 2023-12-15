/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import "./Opcao.css"

const Opcao = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className={`Opcao ${quizState.answerSelected && option === answer ? "correct" : ""}
    ${quizState.answerSelected && option !== answer ? "wrong" : ""}`} onClick={() => selectOption()}>
      <p>{option}</p>
    </div>
  )
}

export default Opcao