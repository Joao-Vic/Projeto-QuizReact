import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import Opcao from './Opcao';

import "./Questao.css"

const Questao = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion]
  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: {answer: currentQuestion.answer, option}
    })
  }

  return (
    <div id="Questao">
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Opcao 
            option={option} 
            key={option} 
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
            />
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>
          Continuar
        </button>
      )}
    </div>
  );

}

export default Questao