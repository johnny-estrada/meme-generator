import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <img className="header__img" src="./images/meme-logo.svg" />
      <h1 className="header__title">MemeGenerator</h1>
      <h2 className="header__sub-title">React Course - Project 3</h2>
    </header>
  );
}

export default Navbar;
