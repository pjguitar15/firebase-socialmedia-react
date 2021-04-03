import React from 'react'
import {
  SmallBoldText,
  SmallMutedText,
  Container,
  CircleDiv,
} from './Styles/Main.style.jsx'
const AccountSection = () => {
  return (
    <Container>
      <SmallBoldText>Account</SmallBoldText>
      <div className='d-flex justify-content-start my-4'>
        <CircleDiv className='mx-2'></CircleDiv>
        <div className='mx-2'>
          <SmallBoldText style={{ fontSize: '14.5px' }}>Philcob</SmallBoldText>
          <SmallMutedText>@pjguitar15</SmallMutedText>
        </div>
      </div>
    </Container>
  )
}

export default AccountSection
