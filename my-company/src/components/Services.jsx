import React from "react";

function Services() {
  return (
    <div style={{ 
      padding: '400px',
      alignContent: "center", 
      backgroundColor: '#f5f5f5', 
      minHeight: 'calc(100vh - 60px)',
      maxWidth: '1200px', 
      margin: '0 auto' 
    }}>
      <h1 style={{ color: '#007BFF', marginBottom: '20px' }}>Our Services</h1>
      <ul style={{ fontSize: '18px', color: '#333', padding: '0', listStyle: 'none' }}>
        <li style={{ marginBottom: '10px' }}>Technology Consulting</li>
        <li style={{ marginBottom: '10px' }}>Market Analysis</li>
        <li style={{ marginBottom: '10px' }}>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;