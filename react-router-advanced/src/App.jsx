// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const isAuthenticated = false; // Simulate authentication status

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="profile/*"
          element={
            <ProtectedRoute element={<Profile />} isAuthenticated={isAuthenticated} />
          }
        />
        <Route path="blog/:id" element={<BlogPost />} /> {/* Updated path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
