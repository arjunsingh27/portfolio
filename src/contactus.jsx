import React, { useState } from 'react';
import './contactus.css';

const MyForm = () => {
  const [alertMessage, setAlertMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlert = (message) => {
    setAlertMessage(message);

    
    setTimeout(() => {
      setAlertMessage('');
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://portfoliobackend-xa8q.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
      
        showAlert('Form data sent successfully');
        
      } else {
        console.error('Failed to send form data');
     
        showAlert('Failed to send form data. Please try again.');
        
      }
    } catch (error) {
      console.error('Error:', error);
  
      showAlert('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className='contactus_container'>
    <div className='contactus_inner_container'>
      {alertMessage && <div className="alert custom-alert">{alertMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default MyForm;
