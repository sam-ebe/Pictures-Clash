import React from "react";

function Game({ started, handleStart }) {
  const handleClick = () => {
    handleStart(!started);
  };
  return (
    <div className="game">
      <button onClick={handleClick}>
        Set started state to false to go back to the Home
      </button>
    </div>
  );
}

export default Game;
