import React, { useEffect, useState } from "react";

function Main() {
  const [meme, setMeme] = useState({
    toptext: "One does not hold",
    bottomtext: "Any grudegs",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  //This fuction is called when the button is click and it will generate a random image form 1 to the max length of the data array
  function handleMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const newImage = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: newImage,
    }));
  }

  function handleInput(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not hold"
            name="toptext"
            onChange={handleInput}
          />
        </label>
        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Any grudges"
            name="bottomtext"
            onChange={handleInput}
          />
        </label>
        <button onClick={handleMeme}> Generate new meme image 🖼️</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} />
        <span className="top">{meme.toptext}</span>
        <span className="bottom">{meme.bottomtext}</span>
      </div>
    </main>
  );
}

export default Main;
