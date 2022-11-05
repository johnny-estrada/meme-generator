import React from "react";
import { useState } from "react";
import memesData from "../memesData";
import "./Form.css";

function Form() {
  const [memeImage, setMemeImage] = useState('');

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);

    setMemeImage(memesArray[randomNumber].url);
  }
  return (
    <main className="form">
      <div className="form__input-container">
        <input
          className="form__input"
          type="text"
          id="top-text"
          name="top-text"
          placeholder="Top text"
        />
        <input
          className="form__input"
          type="text"
          id="bottom-text"
          name="bottom-text"
          placeholder="Bottom text"
        />
      </div>

      <button onClick={getMemeImage} className="form__button">
        Get a new meme image 🖼
      </button>
      <img className="form__img" src={memeImage} />
    </main>
  );
}

export default Form;
