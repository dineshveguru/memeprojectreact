import React from "react";
import "./styles.css";
import Data from "./Data";

function Form() {
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    imgUrl: "https://i.imgflip.com/30b1gx.jpg",
  });
  function getMeme() {
    const memesArray = Data.data.memes;
    const num = Math.floor(Math.random() * memesArray.length);
    setMemeImage((prevData) => ({
      ...prevData,
      imgUrl: memesArray[num].url,
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMemeImage((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  return (
    <main className="main--container">
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          value={memeImage.topText}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={memeImage.bottomText}
          onChange={handleChange}
        ></input>
        <button className="form--button" onClick={getMeme}>
          Get new meme image😎
        </button>
      </div>
      <div class="meme">
        <h1 className="meme--topText">{memeImage.topText}</h1>
        <img src={memeImage.imgUrl} className="meme--image"></img>
        <h1 className="meme--bottomText">{memeImage.bottomText}</h1>
      </div>
    </main>
  );
}

export default Form;
