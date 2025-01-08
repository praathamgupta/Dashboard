import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./App.scss";
import { ReactComponent as CheckmarkIcon } from "./checkmark.svg";

const App = () => {
  const [isCreating, setIsCreating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsCreating(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      {isCreating ? (
        <div className="centerContent">
          <CircularProgress size={60} thickness={5} />
          <h2>Creating your dashboard!</h2>
          <p>Hang tight! We're crafting your dashboard at lightning speed.</p>
        </div>
      ) : (
        <div className="centerContent">
          <div className="checkmark-container">
            <CheckmarkIcon className="checkmark-icon" />
          </div>
          <h2>Dashboard created successfully!</h2>
          <p>Dive in and explore your insights now.</p>
          <button className="button">Go to dashboard</button>
        </div>
      )}
    </div>
  );
};

export default App;
