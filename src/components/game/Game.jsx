import React, { useState } from "react";
import "./index.css";
import { mockedImages } from "../../data/data";
import GameHistory from "../GameHistory/GameHistory";

function Game({ started, handleStart, totalImages }) {
  const initialImages = mockedImages.slice(0, totalImages);

  const [images, setImages] = useState(
    initialImages.map(({ id, url }) => ({
      id,
      url,
      isWinner: false,
    }))
  );

  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [currentPairs, setCurrentPairs] = useState(buildPairs());

  const handleClick = (clickedImageId) => {
    console.log("clicked!");

    const updatedImages = images.map((image) =>
      image.id === clickedImageId ? { ...image, isWinner: true } : image
    );
    setImages(updatedImages);

    setCurrentPairs(buildPairs());

    // Get the number of winners and losers
    const winnersCount = updatedImages.filter(
      (image) => image.isWinner === true
    ).length;
    const losersCount = updatedImages.filter(
      (image) => image.isWinner === false
    ).length;

    console.log(winnersCount);
    console.log(losersCount);

    if (currentPairIndex < currentPairs.length - 1) {
      setCurrentPairIndex(currentPairIndex + 1);
    } else {
      setCurrentPairIndex(0);
      console.log("before next round");
      const updatedCurrentPairs = buildPairs(
        updatedImages.filter((image) => image.isWinner === true)
      );

      setCurrentPairs(updatedCurrentPairs);
    }
  };

  function buildPairs(remainingImages = images) {
    //2. Build an array of pairs from 'images' for the 1st round
    const pairs = [];

    for (let index = 0; index < remainingImages.length; index += 2) {
      let pair = [remainingImages[index], remainingImages[index + 1]];
      pairs.push(pair);
    }
    //console.log(pairs); // 4 pairs for the first round
    return pairs;
  }

  //1. Create a function to display the pair
  function displayPair() {
    const pair = currentPairs[currentPairIndex];
    return (
      <div key={`${pair[0].id}${pair[1].id}`}>
        <img
          onClick={() => handleClick(pair[0].id)}
          src={pair[0].url}
          alt="img 1"
          className="game__faceoff__item"
        />
        <img
          onClick={() => handleClick(pair[1].id)}
          src={pair[1].url}
          alt="img 2"
          className="game__faceoff__item"
        />
      </div>
    );
  }

  return (
    <div className="game">
      <p className="game__title">Title</p>
      <div className="game__faceoff">
        {displayPair()}
        <div className="game__faceoff__abs">
          <p className="game__faceoff__p">vs</p>
        </div>
      </div>
      <GameHistory />
    </div>
  );
}

export default Game;
