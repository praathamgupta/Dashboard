import React, { useState, useEffect } from "react";
import CreatingDashboard from "./components/CreatingDashboard";
import DashboardCreated from "./components/DashboardCreated";

const App = () => {
  const [isCreating, setIsCreating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCreating(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      {isCreating ? <CreatingDashboard /> : <DashboardCreated />}
    </div>
  );
};

export default App;
