import React, { useContext } from 'react';
import QuizContext from '../helpers/Contexts';
import "../App.css";

const MainMenu = () => {

    const { gameState, setGameState } = useContext(QuizContext);

  return (
    <div className='Menu'>
        <h1>Welcome User</h1>
        <button onClick={()=> setGameState("quiz")}>Start Quiz</button>

    </div>
  )
}

export default MainMenu