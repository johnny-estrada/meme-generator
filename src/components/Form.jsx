import React from "react";
import "./Form.css";

function Form() {
  return (
    <form className="form">
      <div className="form__input-container">
        <input className="form__input" 
          type="text"
          id="top-text"
          name="top-text"
          placeholder="e.g. Shut up"
        />
        <input className="form__input"
          type="text"
          id="bottom-text"
          name="bottom-text"
          placeholder="e.g. and take my money"
        />
      </div>

      <button className="form__button">
        Get a new meme image 🖼
        <img className="form__button-img" />
      </button>
    </form>
  );
}

export default Form;
