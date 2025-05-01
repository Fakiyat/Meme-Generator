import React from "react";
import logo from "../../images/memelogo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="meme logo" />
      <h1>Meme Generator</h1>
    </header>
  );
}

export default Header;
