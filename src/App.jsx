import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [changes, setChanges] = useState(0);

  const onButtonClick = (color) => () => {
    if (color === backgroundColor) return;
    setBackgroundColor(color);
    setChanges(changes + 1);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <div className="buttonArea">
        {COLORS.map((color) => (
          <button
            type="button"
            key={color}
            onClick={onButtonClick(color)}
            className={backgroundColor === color ? "selected" : ""}
          >
            {color}
          </button>
        ))}
      </div>
      <h1>Number of background color changes: {changes}</h1>
    </div>
  );
}

export default App;
