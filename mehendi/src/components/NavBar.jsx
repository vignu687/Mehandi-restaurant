import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const RouteToMenu = () => {
    navigate("/menu", { replace: true });
  };

  return (
    <header className="hero-container">
      <nav className="navbar">
        <div className="logo">
          <div className="logo-image" onClick={() => navigate("/")}></div>
          Mehendi<span>INDIAN DANCE CLUB</span>
        </div>
        {/* <ul className="nav-links">
          <li>
            <a onClick={RouteToMenu}>MENU</a>
          </li>
        </ul> */}
        <button className="find-table-btn" onClick={RouteToMenu}>
          MENU
        </button>
      </nav>

      {/* <div className="hero-content"> */}
        {/* <h2>AMAZING & DELICIOUS</h2> */}
        {/* <p className="hero-tagline">
          Discover the vibrant taste of India in every bite
        </p> */}
      {/* </div> */}
    </header>
  );
};

export default NavBar;
