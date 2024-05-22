import React, { useState, useEffect } from "react";

const DynamicString = () => {
  const words = ["Happy", "Healthy", "Rich", "that bish"];
  const [index, setIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(intervalId);
  }, [words.length]);

  useEffect(() => {
    setCurrentWord(words[index]);
  }, [index, words]);

  return <p>I'm {currentWord}</p>;
};

export default DynamicString;
