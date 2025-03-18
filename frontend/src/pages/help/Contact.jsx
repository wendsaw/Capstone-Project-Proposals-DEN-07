import { useState } from 'react';
import style from './Contact.module.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const contact = async (email, message) => {
    try {
      const response = await fetch("https://backendcapstone-vdzh.onrender.com/contact", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const result = await response.json();
      console.log( result);

    } catch (error) {
      console.log('Error submitting contact form:', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    await contact(email, message);
    alert('Thank you for your message!');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Contact Us</h3>
      <div className={style.contact}>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Your email:</span>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Your message:</span>
            <textarea
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
