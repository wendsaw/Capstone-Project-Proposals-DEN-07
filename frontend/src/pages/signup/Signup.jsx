


import { useState,useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import style from './Signup.module.css'


export default function Signup() {

 const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [emailError, setEmailError]=useState(null)
  const [passwordError, setPasswordError]=useState(null)
const [isPending, setIsPending]=useState(false)

console.log('hello');

const navigate=useNavigate()
 
  const signUp = async (e) => {
    setIsPending(true)
    setEmailError(null);
    setPasswordError(null);
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, userName, email, password }),
        credentials: "include"

        
      });
  
      const data = await response.json();
      

      if (!response.ok) {
       
        if (data.errors) {
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
  

  const handleSubmit = (e) => {
    console.log('hello');
    
    e.preventDefault()
    signUp()
    
  }

  
  
  return (
    <div>
      <form onSubmit={handleSubmit} className={style['signup-form']}>
        <h2>Sign Up</h2>
        <label>
          <span>First Name:</span>
          <input
            type="text"
            onChange={(e) => { setFirstName(e.target.value) }}
            value={firstName}

          />
        </label>
        <label>
          <span>Last Name:</span>
          <input
            type="text"
            onChange={(e) => { setLastName(e.target.value) }}
            value={lastName}

          />
        </label>
        <label>
          <span>User Name:</span>
          <input
            type="text"
            onChange={(e) => { setUserName(e.target.value) }}
            value={userName}

          />
        </label>

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
       
     <button className='btn' disabled={isPending}>Signup</button >
     
       {isPending && <div> signing....up </div>}

      </form>
    </div>
  )
}
