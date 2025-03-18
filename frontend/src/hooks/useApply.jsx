

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useApply = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(null)
  const navigate=useNavigate()
  const apply = async (fullName,email,phone,resume,jobId) => {
    setIsPending(true)
    setError(null)
    const response = await fetch("http://localhost:3000/apply", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({fullName,email,phone,resume,jobId})
    })
    const json = await response.json()

    if (!response.ok) {
      setIsPending(false)
      setError(json.error)
    }
    if (response.ok) {
     
      navigate(`/apply/id/confirmation`);

      // update loading state
      setIsPending(false)
    }
  }

  return { apply, isPending, error }
}


