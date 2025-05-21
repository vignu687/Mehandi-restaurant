import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

import splashImage from "../assets/bg2.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const images = [img1, img2, img3, img4];

const NavBar = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const splashTimeout = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(splashTimeout);
  }, []);

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(slideshowInterval);
  }, []);

  const RouteToMenu = () => {
    navigate("/menu", { replace: true });
  };

  if (showSplash) {
    return (
      <div className="splash-screen">
        <img src={splashImage} alt="Splash" className="splash-image" />
      </div>
    );
  }

  return (
    <header className="hero-container">
      <div className="slideshow-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`slideshow-image ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      <nav className="navbar">
        <div className="navbar-center-group">
          <div className="centered-logo" onClick={() => navigate("/")}>
            <div className="logo-image large" />
            <div className="logo-text">
              Mehendi
              <span>INDIAN DANCE CLUB</span>
            </div>
          </div>
          <button className="find-table-btn" onClick={RouteToMenu}>
            MENU
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
