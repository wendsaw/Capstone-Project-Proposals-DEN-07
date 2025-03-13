import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


//styles
import style from './Login.module.css';

export default function Login() {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()

  const signIn = async (e) => {
    setIsPending(true)
    setEmailError(null);
    setPasswordError(null);

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password }),
        credentials: "include"

        
      });
  
      const data = await response.json();
      console.log(data);
      console.log(response);
    console.log(data.errors);
    

      if (!response.ok) {
       
        if (data.errors) {
          console.log(data.errors);
          
          setEmailError(data.errors.email)
          setPasswordError(data.errors.password)
          setIsPending(false);

          console.log(data.errors);
          
          
        } 
      }
  
      if (data.user){
        setIsPending(false);

        navigate('/')
      }
      
  
    } catch (error) {
      console.log(error);
      setIsPending(false)
     
    }
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    signIn(email,password)
   
    
    setIsPending(false)
   
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={style['signup-form']}>
        <h2>Login</h2>

        <label>
          <span>Email:</span>
          {emailError && <div style={{color:"red"}}>{emailError}</div>}
          <input
            type="text"
            onChange={(e) => { setEmail(e.target.value) }}
            value={email}

          />
        </label>
        <label >
          <span>Password</span>
          {passwordError && <div style={{color:"red"}}>{passwordError}</div>}
          <input
            type="password"
            onChange={(e) => { setPassword(e.target.value) }}
            value={password}

          />
        </label>

        <button className='btn' >signIn</button >
     
      

      </form>
    </div>
  )
}