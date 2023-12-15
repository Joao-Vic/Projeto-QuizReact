import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import fim from "../img/fim.svg";

import './Fim.css'

const Fim = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="Fim">
        <h2>Fim do Quiz!</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas.</p>
        <img src={fim} alt="Fim do Quiz" />
        <button onClick={() => dispatch ({type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  )
}

export default Fim