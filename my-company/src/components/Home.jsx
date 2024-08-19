import React from "react";

function Home() {
  return (
    <div style={{ 
      padding: '300px',
      paddingTop: '-20', 
      textAlign: 'center', 
      backgroundColor: '#f5f5f5', 
      minHeight: 'calc(100vh - 60px)',
      maxWidth: '100%', 
    }}>
      <h1 style={{ color: '#007BFF', marginBottom: '20px' }}>Welcome to Our Company</h1>
      <p style={{ fontSize: '18px', color: '#333' }}>
        We are dedicated to delivering excellence in all our services.
      </p>
    </div>
  );
}

export default Home;