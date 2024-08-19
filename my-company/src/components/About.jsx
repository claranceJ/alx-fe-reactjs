import React from "react";

function About() {
  return (
    <div style={{ 
      padding: '300px', 
      textAlign: 'center', 
      backgroundColor: '#f5f5f5', 
      minHeight: 'calc(100vh - 60px)',
      maxWidth: '1200px', 
      margin: '0 auto' 
    }}>
      <h1 style={{ color: '#007BFF', marginBottom: '20px' }}>About Us</h1>
      <p style={{ fontSize: '18px', color: '#333' }}>
        Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
      </p>
    </div>
  );
}

export default About;