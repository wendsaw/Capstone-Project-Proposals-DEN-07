

import { useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { useSignup } from '../../hooks/useSignup'
import  './Signup.css'



export default function Signup() {

 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const {signup, error, isPending}=useSignup()
  
  const {color}=useTheme()
  


const handleSubmit = async (e) => {
  e.preventDefault();
 await signup( email, password);

 
 
  
};

  
  
  return (
    <div>
      <form onSubmit={handleSubmit} className='signup'>
        <h2>Sign Up</h2>
        

        <label>
          <span>Email:</span>
          <input
            type="text"
            onChange={(e) => { setEmail(e.target.value) }}
            value={email}

          />
        </label>
        <label >
          <span>Password</span>
          <input
            type="password"
            onChange={(e) => { setPassword(e.target.value) }}
            value={password}

          />
        </label>
       
     <button className='btn' disabled={isPending} style={{background:color}}>Signup</button >
         {error && <div style={{color:"red"}}>{error}</div>}
    
       {isPending && <div> signing....up </div>}

      </form>
    </div>
  )
}
