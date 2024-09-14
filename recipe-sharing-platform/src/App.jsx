import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    // Wrap the entire app in Router for routing functionality
    <Router>
      {/* Define the different routes */}
      <Routes>
        {/* Home Page route */}
        <Route path="/" element={<HomePage />} />

        {/* Recipe Detail Page route - uses dynamic routing to match recipe id */}
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
