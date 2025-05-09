// components/BackButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ to = "/" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      style={{
        position: "absolute",
        top: "20px",
        left: "30px",
        padding: "10px 16px",
        backgroundColor: "#1e3a8a",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        zIndex: 2,
        fontWeight: "bold",
      }}
    >
      ⟨
    </button>
  );
};

export default BackButton;
