import React, { useState } from 'react'
// import logout from use auth
import { useAuth } from '../../../Context/AuthProvider.jsx'
// import usehistory
import { useHistory } from 'react-router-dom'
// Alert
import { Alert } from 'react-bootstrap'
const Main = () => {
  const [error, setError] = useState('')
  // initialize history
  const history = useHistory()
  // import useAuth hook
  const { logout } = useAuth()
  const logoutHandler = async () => {
    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Failed to logout')
    }
  }
  return (
    <div>
      {error && <Alert variant='danger'>{error}</Alert>}
      <h1>You are logged in because you were authenticated!</h1>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Main
