


import { useState } from 'react'
import style from './Signup.module.css'
import { useSignup } from '../../hooks/useSignup'



export default function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { error, isPending, signup } = useSignup()


  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={style['signup-form']}>
        <h2>Sign Up</h2>


        <label>
          <span>Email:</span>
          <input
            type="email"
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
        <label>
          <span>User Name:</span>
          <input
            type="text"
            onChange={(e) => { setDisplayName(e.target.value) }}
            value={displayName}

          />
        </label>
       {!isPending && <button className='btn'>Signup</button>}
       {isPending && <button className='btn' disabled> loading....</button>}
       {error && <p>{error}</p>}

      </form>
    </div>
  )
}
