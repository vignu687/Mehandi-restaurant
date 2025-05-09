import React from "react";
import "./Menu.css";
export const MenuCard = ({ title, description, price }) => {
  return (
    <div className="vertical-card">
      <div className="vertical-card-body">
        <h3 className="vertical-card-title">{title}</h3>
        <p className="vertical-card-description">{description}</p>
        <p className="vertical-card-price">₹{price}</p>
      </div>
    </div>
  );
};
