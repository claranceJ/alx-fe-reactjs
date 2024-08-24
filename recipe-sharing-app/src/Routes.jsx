// src/Routes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import RecipeDetails from "./components/RecipeDetails";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
