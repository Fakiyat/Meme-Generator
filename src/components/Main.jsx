import React from "react";

function Main() {
  return (
    <div className="form">
      <label>
        TopText
        <input type="text" placeholder="One does not hold" name="toptext" />
      </label>
      <label>
        bottomText
        <input type="text" placeholder="Any grudges" name="bottemtext" />
      </label>
      <button> Generate new meme image 🖼️</button>
    </div>
  );
}

export default Main;
