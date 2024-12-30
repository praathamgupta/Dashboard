import React from "react";
import "../styles/DashboardCreated.css";

const DashboardCreated = () => {
  return (
    <div className="centerContent">
      <div className="checkmark-container">
        <div className="checkmark-circle">
          <span className="checkmark">✔</span>
        </div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
      </div>
      <h2 className="heading">Dashboard created successfully!</h2>
      <p className="text">Dive in and explore your insights now.</p>
      <button className="button">Go to dashboard</button>
    </div>
  );
};

export default DashboardCreated;
