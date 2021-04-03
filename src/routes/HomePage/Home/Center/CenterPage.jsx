import React from 'react'
// styled components
import { CenterWrapper } from './Styles/MainStyles.jsx'
// components
import Feeds from './HomeRoute/Feeds.jsx'
const CenterPage = () => {
  return (
    <CenterWrapper style={{ background: '#F7FAFF' }} className='w-100'>
      <Feeds />
    </CenterWrapper>
  )
}

export default CenterPage
