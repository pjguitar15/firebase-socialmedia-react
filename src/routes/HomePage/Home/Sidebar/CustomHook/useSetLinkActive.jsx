import { useState } from 'react'

const useSetLinkActive = () => {
  const [linkActive, setLinkActive] = useState({
    home: true,
    messages: false,
    profile: false,
  })
  const [feedLinkActive, setFeedLinkActive] = useState({
    all: true,
    following: false,
    newest: false,
    popular: false,
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
  const setFeedActiveHandler = (e) => {
    switch (e.target.id) {
      case 'all':
        setFeedLinkActive({
          all: true,
          following: false,
          newest: false,
          popular: false,
        })
        break
      case 'following':
        setFeedLinkActive({
          all: false,
          following: true,
          newest: false,
          popular: false,
        })
        break
      case 'newest':
        setFeedLinkActive({
          all: false,
          following: false,
          newest: true,
          popular: false,
        })
        break
      case 'popular':
        setFeedLinkActive({
          all: false,
          following: false,
          newest: false,
          popular: true,
        })
        break
      default:
        break
    }
  }
  return { setActiveHandler, linkActive, setFeedActiveHandler, feedLinkActive }
}

export default useSetLinkActive
