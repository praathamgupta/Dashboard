import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreatingDashboard.css";

const CreatingDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard-created"); 
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="centerContent">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h2 className="heading">Creating your dashboard!</h2>
      <p className="text">Hang tight! We're crafting your dashboard at lightning speed.</p>
    </div>
  );
};

export default CreatingDashboard;
