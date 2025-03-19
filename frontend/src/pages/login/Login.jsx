import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme'
import { useLogin } from '../../hooks/useLogin';

//styles
import './Login.css';

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
const {color}=useTheme()
  const { login, error, isPending } = useLogin()


  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='login-form'>
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
        {isPending && <div>request pending.....wait</div>}
        <button className='btn' disabled={isPending} style={{background:color}}>signIn</button >
        {error && <div style={{ color: "red" }}>{error}</div>}



      </form>
    </div>
  )
}