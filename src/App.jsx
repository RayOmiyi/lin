import React from "react";
import lion from "./assets/lion.jpg";
import twitter from "./assets/twitter.png";
import telegram from "./assets/telegram.jpg";
import dexscreener from "./assets/dexscreener.png";
import dexLogo from "./assets/dextool.jpg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <section className="picture">
        <img src={lion} alt="lion" />
      </section>
      <section className="Text">
        <h1 className="LIN">LIN</h1>
        <div className="logo">
          <a href="https://twitter.com/rayomiyi">
            <img src={twitter} alt="twitter" className="jpeg"/>
          </a>
          <a href="https://t.me/vincentmarcus">
            <img src={telegram} alt="telegram"  className="jpeg"/>
          </a>
          <a href="https://info.dextools.io/">
            <img src={dexLogo} alt="dexLogo"  className="jpeg"/>
          </a>
          <a href="https://dexscreener.com">
            <img src={dexscreener} alt="dexscreener"  className="jpeg"/>
          </a>
        </div>
        <h4 className="code">8RGy4BZUEkW9dc2UEZ3QHYYdas66X63vazdZJezGJw5e</h4>
      </section>
    </div>
  );
};

export default App;
