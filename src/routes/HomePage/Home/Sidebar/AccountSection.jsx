import React from 'react'
import {
  SmallBoldText,
  SmallMutedText,
  Container,
  CircleDiv,
} from './Styles/Main.style.jsx'
//  import auth
import { useAuth } from '../../../../Context/AuthProvider.jsx'
const AccountSection = () => {
  const { currentUser } = useAuth()
  return (
    <Container>
      <SmallBoldText>Account</SmallBoldText>
      <div className='d-flex justify-content-start my-4'>
        <CircleDiv className='mx-2'></CircleDiv>
        <div className='mx-2'>
          <SmallBoldText style={{ fontSize: '14.5px' }}>
            {currentUser.email.slice(0, currentUser.email.indexOf('@'))}
          </SmallBoldText>
          <SmallMutedText>{currentUser.email}</SmallMutedText>
        </div>
      </div>
    </Container>
  )
}

export default AccountSection
