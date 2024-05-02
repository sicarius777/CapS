// WorldQuotes.jsx

import React, { useState, useEffect } from 'react';

const WorldQuotes = () => {
  const quotes = [
    { text: "The world is a book, and those who do not travel read only one page.", author: "Saint Augustine" },
    { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
    { text: "The world is full of magic things, patiently waiting for our senses to grow sharper.", author: "W.B. Yeats" },
    {text: "In our weakness, God's strength is made perfect", author: "Francine Rivers"},
    {text: "The fellow is bereft and possibly violent.", author: "Jack Vance aka Vecna"},
    {text: "Nobody is a villain in their own story", author: "George R.R. Martin"},
    {text: "Sanderson's First Law: An author's ability to solve conflict with magic is DIRECTLY proportional to how well the reader understands said magic", author: "Brandon Sanderson" },
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(quotes[currentQuoteIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change the interval duration (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []); // Dependency array is empty to run effect only once on mount

  useEffect(() => {
    setCurrentQuote(quotes[currentQuoteIndex]);
  }, [currentQuoteIndex]); // Add currentQuoteIndex as a dependency

  return (
    <div className="world-quotes">
      <blockquote>
        <p>{currentQuote.text}</p>
        <footer>- {currentQuote.author}</footer>
      </blockquote>
    </div>
  );
};

export default WorldQuotes;
