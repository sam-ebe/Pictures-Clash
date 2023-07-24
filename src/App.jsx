import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Game from "./components/game/Game";
function App() {
  const [started, setStarted] = useState(false);

  const handleStart = (newStarted) => {
    setStarted(newStarted);
    console.log("from parent : " + started);
  };
  return (
    <>
      {!started ? (
        <Home started={started} handleStart={handleStart} />
      ) : (
        <Game started={started} handleStart={handleStart} />
      )}
    </>
  );
}

export default App;
