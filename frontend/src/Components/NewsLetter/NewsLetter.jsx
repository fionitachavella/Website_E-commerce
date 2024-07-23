import React, { useState } from 'react';
import axios from 'axios';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://54.172.100.247:3000/api/subscribers', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error subscribing. Please try again.');
    }
  };

  return (
    <div className='newsletter'>
      <h1>Dapatkan Penawaran Eksklusif</h1>
      <p>Berlangganan dan dapatkan informasi terbaru</p>
      <div>
        <input
          type="email"
          placeholder='Your Email id'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Subscribe</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default NewsLetter;
