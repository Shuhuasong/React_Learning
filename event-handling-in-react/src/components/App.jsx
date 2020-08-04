import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouse] = useState(false);
  function handleClick() {
    setHeadingText("Submitted");
  }

  function onMouseOver() {
    setMouse(true);
  }
  function onMouseOut() {
    setMouse(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
