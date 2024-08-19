import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ 
      padding: '15px', 
      backgroundColor: '#007BFF', 
      color: '#fff', 
      width: '100%', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <ul style={{ 
        listStyleType: 'none', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '30px', 
        margin: 0, 
        padding: 0 
      }}>
        <li>
          <Link to="/" style={{ 
            color: '#fff', 
            textDecoration: 'none', 
            fontSize: '18px', 
            fontWeight: 'bold' 
          }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ 
            color: '#fff', 
            textDecoration: 'none', 
            fontSize: '18px', 
            fontWeight: 'bold' 
          }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" style={{ 
            color: '#fff', 
            textDecoration: 'none', 
            fontSize: '18px', 
            fontWeight: 'bold' 
          }}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ 
            color: '#fff', 
            textDecoration: 'none', 
            fontSize: '18px', 
            fontWeight: 'bold' 
          }}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;