import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);

    // Clear the form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center', 
      backgroundColor: '#f5f5f5', 
      minHeight: 'calc(100vh - 60px)',
      maxWidth: '1200px', 
      margin: '0 auto' 
    }}>
      <h1 style={{ color: '#007BFF', marginBottom: '20px' }}>Contact Us</h1>
      
      {submitted && (
        <div style={{ 
          backgroundColor: '#d4edda', 
          color: '#155724', 
          padding: '10px', 
          borderRadius: '5px', 
          marginBottom: '20px' 
        }}>
          Thank you! Your message has been sent.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ 
            width: '100%', 
            padding: '10px', 
            margin: '10px 0', 
            borderRadius: '5px', 
            border: '1px solid #ccc' 
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ 
            width: '100%', 
            padding: '10px', 
            margin: '10px 0', 
            borderRadius: '5px', 
            border: '1px solid #ccc' 
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ 
            width: '100%', 
            padding: '10px', 
            margin: '10px 0', 
            borderRadius: '5px', 
            border: '1px solid #ccc', 
            height: '100px' 
          }}
        />
        <button type="submit" style={{ 
          padding: '10px 20px', 
          backgroundColor: '#007BFF', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
