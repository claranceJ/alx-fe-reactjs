// components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer style={{ 
      padding: '10px 20px', 
      textAlign: 'center', 
      backgroundColor: '#333', 
      color: '#fff', 
      position: 'fixed', 
      bottom: '0', 
      width: '100vh' 
    }}>
      <p style={{ margin: '0' }}>© 2024 Our Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
