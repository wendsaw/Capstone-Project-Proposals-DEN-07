import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'

export const useLogin = ( email, password) => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate=useNavigate()

  const login = async (email, password) => {
    
    setIsPending(true)
    setError(null)

    const response = await fetch("https://backendcapstone-vdzh.onrender.com/login", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsPending(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})
      navigate('/profile')

      // update loading state
      setIsPending(false)
      navigate('/profile')
    }
  }

  return { login, isPending, error }
}
