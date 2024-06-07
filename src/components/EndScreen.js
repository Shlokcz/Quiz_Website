import React, {useState, useContext} from 'react'
import QuizContext from '../helpers/Contexts';
import { Questions } from '../helpers/QuestionBank';

const EndScreen = () => {

  const { score, setScore, setGameState } = useContext(QuizContext);
  

  function restartGame() {
    setGameState("menu");
    setScore(0);
  }

  return (
    <div className='EndScreen'>
      <h1>Thanks for playing the Game</h1>
      <h2>Your Total Score is: {score} / {Questions.length}</h2>
      <button onClick={restartGame}>Restart Game</button>
    </div>
  )
}

export default EndScreen;