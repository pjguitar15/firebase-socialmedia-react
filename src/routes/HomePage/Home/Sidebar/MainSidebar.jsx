import React from 'react'
import {
  Sidebar,
  SmallBoldText,
  NavlinksWrapper,
  Container,
  NavLinksStyle,
  IconStyle,
  LogOutButton,
} from './Styles/Main.style.jsx'
// import custom hook
import useSetLinkActive from './CustomHook/useSetLinkActive.jsx'
// components
import Navbrand from './NavBrand.jsx'
import AccountSection from './AccountSection.jsx'
const MainSidebar = ({ logoutHandler }) => {
  const { setActiveHandler, linkActive } = useSetLinkActive()
  return (
    <Sidebar className='col-xl-2 col-md-4 col-sm-5'>
      <Navbrand />
      <Container>
        <SmallBoldText>Menu</SmallBoldText>
      </Container>
      <NavlinksWrapper>
        <NavLinksStyle
          id='home'
          onClick={setActiveHandler}
          active={linkActive.home}
        >
          <IconStyle active={linkActive.home}>
            <i className='fas fa-home'></i>
          </IconStyle>
          Home
        </NavLinksStyle>
        <NavLinksStyle
          id='messages'
          onClick={setActiveHandler}
          active={linkActive.messages}
        >
          <IconStyle active={linkActive.messages}>
            <i className='fas fa-comment-dots'></i>
          </IconStyle>
          Messages
        </NavLinksStyle>
        <NavLinksStyle
          id='profile'
          onClick={setActiveHandler}
          active={linkActive.profile}
        >
          <IconStyle active={linkActive.profile}>
            <i className='fas fa-user'></i>
          </IconStyle>
          Profile
        </NavLinksStyle>
      </NavlinksWrapper>
      <AccountSection />
      <LogOutButton className='w-100' onClick={logoutHandler}>
        Logout
      </LogOutButton>
    </Sidebar>
  )
}

export default MainSidebar
