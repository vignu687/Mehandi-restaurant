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
        padding: "12px 18px",
        background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
        color: "#fefefe",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "50px",
        cursor: "pointer",
        zIndex: 2,
        fontWeight: 600,
        fontSize: "20px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 3px rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        transition: "all 0.35s ease",
        letterSpacing: "1px",
        textShadow: "0 1px 2px rgba(0,0,0,0.6)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow =
          "0 10px 24px rgba(0, 0, 0, 0.5), inset 0 1px 4px rgba(255,255,255,0.2)";
        e.currentTarget.style.background =
          "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.1))";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow =
          "0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 3px rgba(255, 255, 255, 0.1)";
        e.currentTarget.style.background =
          "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))";
      }}
    >
      ←
    </button>
  );
};

export default BackButton;
