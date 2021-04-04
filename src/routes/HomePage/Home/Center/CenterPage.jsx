import React, { useContext } from 'react'
// styled components
import { CenterWrapper } from './Styles/MainStyles.jsx'
// components
import Feeds from './HomeRoute/Feeds.jsx'
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
    <CenterWrapper style={{ background: '#F7FAFF' }} className='w-100'>
      {isHome && <Feeds />}
      {isMessages && <h1 className='text-center'>Messages</h1>}
      {isProfile && <h1 className='text-center'>Profile</h1>}
    </CenterWrapper>
  )
}

export default CenterPage
