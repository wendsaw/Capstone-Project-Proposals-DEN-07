import { useState } from 'react';
import style from './Contact.module.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isPending, setIsPending] = useState(null)
  const [error, setError] = useState(null)

  const navigate = useNavigate()
  const contact = async (email, message) => {
    try {
      setIsPending(true)
      setError(null)
      const response = await fetch("https://backendcapstone-vdzh.onrender.com/contact", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message })
      });

      const result = await response.json();
      console.log(result);
      
      if (!response.ok) {
        throw new Error('Failed to send message');
        
      }
      if (response.ok) {
     
        // update loading state
        setIsPending(false)
      }

    } catch (error) {
      console.log('Error submitting contact form:', error.message);

      setIsPending(false)
      setError(error.message)
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    await contact(email, message);
   
    navigate('/profile')
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
          {isPending && <div>Sending......</div>}
          <button type="submit" disabled={isPending}>Submit</button>
          {error && <div>{error}</div>}

        </form>
      </div>
    </>
  );
};

export default Contact;
