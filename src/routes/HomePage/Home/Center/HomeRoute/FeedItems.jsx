import React from 'react'
import { Row, Col } from 'react-bootstrap'
// import styled
import { CircleDiv, SmallBoldText } from '../../Sidebar/Styles/Main.style.jsx'
import { ImageStyle, IconsStyle } from '../Styles/MainStyles.jsx'
// Mock Data
import data from './MockData'
// import useFirestore hook
import useFirestore from '../../../../../FirebaseHooks/useFirestore'

const FeedItems = () => {
  const { docs, loading } = useFirestore('posts')

  return (
    <div>
      <Row>
        {loading && <h1 className='text-center display-1'>Loading...</h1>}
        {docs.map((item, index) => (
          <Col key={index} xl='4' className='p-3'>
            <ImageStyle src={item.url} alt='cooked food' />
            {/* User like comment share */}
            <div className='mt-3 d-flex justify-content-between'>
              <div className='d-flex align-items-center'>
                <CircleDiv></CircleDiv>
                <SmallBoldText className='ml-2 mt-2'>
                  {item.email}
                </SmallBoldText>
              </div>
              {/* like comment share icons */}
              <div className='d-flex'>
                <IconsStyle className='fas fa-heart text-danger'></IconsStyle>
                <SmallBoldText className='text-danger mt-1'>2</SmallBoldText>
                <IconsStyle className='fas fa-comment-dots'></IconsStyle>
                <SmallBoldText className='mt-1'>3</SmallBoldText>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default FeedItems
