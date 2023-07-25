import React from 'react';
import './index.css';
import { exampleImages } from '../../data/data';
import GameHistory from '../GameHistory/GameHistory';
function Game({ started, handleStart }) {
  const handleClick = () => {
    handleStart(!started);
  };
  return (
    <div className="game">
      {/*<button onClick={handleClick}>End of the game</button>*/}
      <p className="game__title">Choose the winner</p>
      <div className="game__faceoff">
        <img
          src={exampleImages[0].url}
          alt="img 1"
          className="game__faceoff__item"
        />
        <img
          src={exampleImages[1].url}
          alt="img 2"
          className="game__faceoff__item"
        />
        <div className="game__faceoff__abs">
          <p className="game__faceoff__p">vs</p>
        </div>
      </div>
      <GameHistory />
    </div>
  );
}

export default Game;
