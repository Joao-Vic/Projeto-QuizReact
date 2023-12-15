import Iniciar from '../img/iniciar.svg' 

import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import "./Inicio.css"

const Inicio = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  console.log(quizState);

  return (
    <div id='Inicio'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar: </p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        <img src={Iniciar} alt="Início do Quiz"/>
    </div>
  )
}

export default Inicio