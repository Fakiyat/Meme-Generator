import React from "react";
import meme from "../../images/meme.png";
function Main() {
  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input type="text" placeholder="One does not hold" name="toptext" />
        </label>
        <label>
          Bottom Text
          <input type="text" placeholder="Any grudges" name="bottemtext" />
        </label>
        <button> Generate new meme image 🖼️</button>
      </div>
      <div className="meme">
        <img src={meme} />
        <span className="top">One does not hold</span>
        <span className="bottom">Any grudges</span>
      </div>
    </main>
  );
}

export default Main;
