import React, { useState, useEffect } from "react";


const DynamicString = () => {
  const words = ["a Software Engineer", "a Videographer", "a Foodie", "a Traveler", "a Streamer"];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let typingTimeout;
    if (typing) {
      typingTimeout = setTimeout(() => {
        setDisplayedText((prevText) =>
          words[index].substring(0, prevText.length + 1)
        );
        if (displayedText.length + 1 === words[index].length) {
          setTyping(false);
          setTimeout(() => {
            setTyping(true);
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
            setDisplayedText("");
          }, 2000);
        }
      }, 100);
    }

    return () => clearTimeout(typingTimeout);
  }, [typing, displayedText, index, words]);

  return (
    <p className="dynamic-text">
      Hello! I am <span className="typing-text">{displayedText}</span>
    </p>
  );
};

export default DynamicString;
