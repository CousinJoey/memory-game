import React, { useState, useEffect } from "react";
import WinningDisplay from "./winningDisplay";
import Card from "./card";
import apple from "../images/apple.png";
import banana from "../images/banana.png";
import coconut from "../images/coconut.png";
import dragonfruit from "../images/dragonfruit.png";
import grape from "../images/grape.png";
import honeydew from "../images/honeydew.png";
import mango from "../images/mango.png";
import orange from "../images/orange.png";
import peach from "../images/peach.png";
import plum from "../images/plum.png";
import starfruit from "../images/starfuit.png";
import watermelon from "../images/watermelon.png";

function CardGrid() {
  const [images, setImages] = useState([
    {
      src: apple,
      title: "apple",
      isClicked: false,
    },
    {
      src: banana,
      title: "banana",
      isClicked: false,
    },
    {
      src: coconut,
      title: "coconut",
      isClicked: false,
    },
    {
      src: dragonfruit,
      title: "dragonfruit",
      isClicked: false,
    },
    {
      src: grape,
      title: "grape",
      isClicked: false,
    },
    {
      src: honeydew,
      title: "honeydew",
      isClicked: false,
    },
    {
      src: mango,
      title: "mango",
      isClicked: false,
    },
    {
      src: orange,
      title: "orange",
      isClicked: false,
    },
    {
      src: peach,
      title: "peach",
      isClicked: false,
    },
    {
      src: plum,
      title: "plum",
      isClicked: false,
    },
    {
      src: starfruit,
      title: "starfruit",
      isClicked: false,
    },
    {
      src: watermelon,
      title: "watermelon",
      isClicked: false,
    },
  ]);

  const [count, setCount] = useState(0);

  const [bestCount, setBestCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleLoss = () => {
    if (count > bestCount) {
      setBestCount(count);
    }
    setCount(0);
  };

  const handleReset = () => {
    let resetImages = images.map((image) => {
      return { ...image, isClicked: false };
    });
    setImages(resetImages);
  };

  const shuffle = () => {
    setImages((prevImages) => [...prevImages].sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    shuffle();
  }, []);

  const handleClick = (imageClicked) => {
    if (imageClicked.isClicked === true) {
      handleLoss();
      handleReset();
      return;
    } else {
      const updatedImage = images.map((image) => {
        if (image === imageClicked) {
          return { ...image, isClicked: true };
        } else {
          return image;
        }
      });
      setImages(updatedImage);
      incrementCount();
      shuffle();
    }
  };

  const handlePlayAgain = () => {
    setBestCount(bestCount - bestCount);
    setCount(count - count);
    handleReset();
    shuffle();
  };

  return (
    <div>
      <div id="score">
        <p>current score: {count}</p>
        <p>best score: {bestCount}</p>
      </div>
      <div id="card-grid">
        {images.map((image) => (
          <Card
            key={image.title}
            image={image.src}
            title={image.title}
            onClick={() => handleClick(image)}
          />
        ))}
      </div>
      <WinningDisplay show={count === 12} onPlayAgain={handlePlayAgain} />
    </div>
  );
}

export default CardGrid;
