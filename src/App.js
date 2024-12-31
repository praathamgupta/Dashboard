import React, { useState, useEffect } from "react";
import { TEXTS } from "./const"; // Import centralized text
import "./App.scss"; // Import SCSS styles

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
          <div className="spinner">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="spinnerDot"></div>
            ))}
          </div>
          <h2>{TEXTS.CREATING_HEADER}</h2>
          <p>{TEXTS.CREATING_BODY}</p>
        </div>
      ) : (
        <div className="centerContent">
          <div className="checkmark-container">
            <div className="checkmark-circle">
              <span className="checkmark">✔</span>
            </div>
          </div>
          <h2>{TEXTS.CREATED_HEADER}</h2>
          <p>{TEXTS.CREATED_BODY}</p>
          <button className="button">Go to dashboard</button>
        </div>
      )}
    </div>
  );
};

export default App;
