import React, { useState } from 'react'
// import logout from use auth
import { useAuth } from '../../../Context/AuthProvider.jsx'
// import usehistory
import { useHistory } from 'react-router-dom'
// Alert
import { Alert } from 'react-bootstrap'
// Components
import MainSidebar from './Sidebar/MainSidebar.jsx'
import CenterPage from './Center/CenterPage.jsx'
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
    <div className='d-flex justify-content-between'>
      {error && <Alert variant='danger'>{error}</Alert>}
      <MainSidebar logoutHandler={logoutHandler} />
      <CenterPage />
    </div>
  )
}

export default Main
