import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const RouteToMenu = () => {
    navigate("/menu", { replace: true });
  };

  return (
    <div>
      {" "}
      <header className="hero-container">
        <div className="hero-top-bar">
          <span>📍 Restaurant St, Delicious City, London 9578, UK</span>
          <span>⏰ Daily : 8.00 am to 10.00 pm</span>
          <span>📞 +1 123 456 7890</span>
          <span>📧 booking@restaurant.com</span>
        </div>

        <nav className="navbar">
          <div className="logo">
            Mehendi<span>INDIAN DANCE CLUB</span>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#" onClick={RouteToMenu}>
                MENU
              </a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
          </ul>
          <button className="find-table-btn">FOOD SUGGESTIONS</button>
        </nav>

        <div className="hero-content">
          <h2>AMAZING & DELICIOUS</h2>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
