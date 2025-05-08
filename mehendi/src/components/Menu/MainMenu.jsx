import React from "react";
import "./Menu.css";
export const MainMenu = ({ title, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h3 className="card-title">{title}</h3>
      {/* <div className="card-actions">
        <button className="comments-btn">Comments</button>
        <div className="likes">
          <span className="heart">❤️</span>
        </div>
      </div> */}
    </div>
  );
};
