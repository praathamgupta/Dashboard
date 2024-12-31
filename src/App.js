import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatingDashboard from "./components/CreatingDashboard";
import DashboardCreated from "./components/DashboardCreated";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Pic 1 */}
        <Route path="/" element={<CreatingDashboard />} />

        {/* Route for Pic 2 */}
        <Route path="/dashboard-created" element={<DashboardCreated />} />
      </Routes>
    </Router>
  );
};

export default App;
