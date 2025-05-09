import React from "react";
import "./Menu.css"; // Ensure this file has the CSS you shared
import { MainMenu } from "./MainMenu";
import { useNavigate } from "react-router-dom";
import BackButton from "../BackButton";

const Menu = () => {
  const navigate = useNavigate();

  const GotoFoodMenu = () => {
    navigate("/foodmenu", { replace: true });
  };
  const GoToshishaMenu = () => {
    navigate("/shishamenu", { replace: true });
  };
  const GotoWineMenu = () => {
    navigate("/winemenu", { replace: true });
  };

  return (
    <div className="wrapper">
      {/* Video background */}
      <video autoPlay muted loop className="background-video">
        <source
          src="https://res.cloudinary.com/drfbntcbh/video/upload/v1746789467/kkfu8egffmfpbop1hg4e.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <BackButton to="/" />
      {/* Foreground cards */}
      <div className="card-container">
        <MainMenu
          title="Food"
          image="https://shorturl.at/1k8L5"
          likes={34}
          onClick={GotoFoodMenu}
        />
        <MainMenu
          title="Beverage"
          image="https://shorturl.at/ohozs"
          likes={45}
          onClick={GotoWineMenu}
        />
        <MainMenu
          title="Shisha"
          image="https://shorturl.at/hdSDl"
          likes={29}
          onClick={GoToshishaMenu}
        />
      </div>
    </div>
  );
};

export default Menu;
