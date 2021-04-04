import React, { useState } from 'react'

export const HomeActive = React.createContext()
export const MessagesActive = React.createContext()
export const ProfileActive = React.createContext()
const GlobalState = ({ children }) => {
  const [isHome, setIsHome] = useState(true)
  const [isMessages, setIsMessages] = useState()
  const [isProfile, setIsProfile] = useState()
  return (
    <HomeActive.Provider value={[isHome, setIsHome]}>
      <MessagesActive.Provider value={[isMessages, setIsMessages]}>
        <ProfileActive.Provider value={[isProfile, setIsProfile]}>
          {children}
        </ProfileActive.Provider>
      </MessagesActive.Provider>
    </HomeActive.Provider>
  )
}

export default GlobalState
