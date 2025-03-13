import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
 import { useLogin } from '../../hooks/useLogin';

//styles
import style from './Login.module.css';

export default function Login() {

const [email,setEmail]=useState('')
const [password, setPassword]=useState('')
  
  const {login,error,isPending}=useLogin()


  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await login(email,password)
    
   
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={style['signup-form']}>
        <h2>Login</h2>

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

        <button className='btn' disabled={isPending} >signIn</button >
        {error && <div style={{color:"red"}}>{error}</div>}
     
      

      </form>
    </div>
  )
}