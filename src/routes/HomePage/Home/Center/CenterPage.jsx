import React, { useContext } from 'react'

// components
import Feeds from './HomeRoute/Feeds.jsx'
import ProfileRoute from './ProfileRoute/ProfileRoute.jsx'
// import global state
import {
  HomeActive,
  MessagesActive,
  ProfileActive,
} from '../../../../Context/GlobalState.jsx'
const CenterPage = () => {
  const [isHome] = useContext(HomeActive)
  const [isMessages] = useContext(MessagesActive)
  const [isProfile] = useContext(ProfileActive)
  return (
    <div style={{ background: '#F7FAFF' }} className='w-100'>
      {isHome && <Feeds />}
      {isMessages && <h1 className='text-center'>Messages</h1>}
      {isProfile && <ProfileRoute />}
    </div>
  )
}

export default CenterPage
