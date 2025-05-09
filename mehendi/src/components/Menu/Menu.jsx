import React from "react";
import "./Menu.css";
import { MainMenu } from "./MainMenu";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const GotoFoodMenu = () => {
    navigate("/foodmenu", { replace: true });
  };
  return (
    <div className="wrapper">
      <div className="card-container">
        <MainMenu
          title="Food"
          image="https://shorturl.at/1k8L5"
          likes={34}
          onClick={() => GotoFoodMenu()}
        />
        <MainMenu
          title="Wine"
          image="https://shorturl.at/ohozs"
          likes={45}
          onClick={() => GotoFoodMenu()}
        />
        <MainMenu
          title="Shisha"
          image="https://shorturl.at/hdSDl"
          likes={29}
          onClick={() => GotoFoodMenu()}
        />
      </div>
    </div>
  );
};

export default Menu;
