import { useState } from 'react'

const useSetLinkActive = () => {
  const [linkActive, setLinkActive] = useState({
    home: true,
    messages: false,
    profile: false,
  })
  const setActiveHandler = (e) => {
    switch (e.target.id) {
      case 'home':
        setLinkActive({ messages: false, profile: false, home: true })
        break
      case 'messages':
        setLinkActive({ messages: true, profile: false, home: false })
        break
      case 'profile':
        setLinkActive({ messages: false, profile: true, home: false })
        break
      default:
        break
    }
  }
  return { setActiveHandler, linkActive }
}

export default useSetLinkActive
