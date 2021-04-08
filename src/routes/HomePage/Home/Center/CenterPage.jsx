import React, { useContext } from 'react'

// components
import Feeds from './HomeRoute/Feeds.jsx'
import ProfileRoute from './ProfileRoute/ProfileRoute.jsx'
import MessagesRoute from './MessagesRoute/MessagesRoute.jsx'
// import global state
import {
  HomeActive,
  MessagesActive,
  ProfileActive
} from '../../../../Context/GlobalState.jsx'
const CenterPage = () => {
  const [isHome] = useContext(HomeActive)
  const [isMessages] = useContext(MessagesActive)
  const [isProfile] = useContext(ProfileActive)
  return (
    <div style={{ background: '#F7FAFF' }} className='w-100'>
      {isHome && <Feeds />}
      {isMessages && <MessagesRoute />}
      {isProfile && <ProfileRoute />}
    </div>
  )
}

export default CenterPage
