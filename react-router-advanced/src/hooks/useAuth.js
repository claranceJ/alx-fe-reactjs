// src/hooks/useAuth.js
import { useState } from "react";

export const useAuth = () => {
  // Simulate an authentication check
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Function to toggle authentication status (for testing purposes)
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
};
