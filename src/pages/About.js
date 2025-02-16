import React, { useState, useEffect } from "react";
import './About.css';
import parse from "html-react-parser";

const About = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/about-text.txt")
      .then((response) => response.text())
      .then((data) => setText(data))
      .catch((error) => console.error("Error loading text:", error));
  }, []);

  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>{parse(text)}</p>
    </div>
  );
};

export default About;
