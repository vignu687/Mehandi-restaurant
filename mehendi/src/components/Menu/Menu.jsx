import React from "react";
import "./Menu.css";
import { MainMenu } from "./MainMenu";
const Menu = () => {
  return (
    <div className="wrapper">
      <div className="card-container">
        <MainMenu title="Food" image="https://shorturl.at/1k8L5" likes={34} />
        <MainMenu title="Wine" image="https://shorturl.at/ohozs" likes={45} />
        <MainMenu title="Shisha" image="https://shorturl.at/hdSDl" likes={29} />
      </div>
    </div>
  );
};

export default Menu;
