import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
const Typewriter = (Words, Speed = 100) => {
  const indexref = useRef(0);
  const textref = useRef("");
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexref.current >= Words.length) {
        clearInterval(interval);
        return;
      }
      if (Array.isArray(Words)) {
        setText(Words[indexref.current]);
      } else {
        textref.current = textref.current + Words[indexref.current];
        setText(textref.current);
      }
      indexref.current += 1;
    }, Speed);
    return () => {
      clearInterval(interval);
    };
  }, [Words, Speed]);
  return text;
};

export default Typewriter;
