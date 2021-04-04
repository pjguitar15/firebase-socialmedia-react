import React from 'react'
import { Row, Col } from 'react-bootstrap'
// import styled
import { CircleDiv, SmallBoldText } from '../../Sidebar/Styles/Main.style.jsx'
import { ImageStyle, IconsStyle } from '../Styles/MainStyles.jsx'
// Mock Data
import data from './MockData'

const FeedItems = () => {
  return (
    <div>
      <Row className=''>
        {data.map((item, index) => (
          <Col key={index} xl='4' className='p-3 mx-auto'>
            <ImageStyle src={item.image} alt='cooked food' />
            {/* User like comment share */}
            <div className='mt-3 d-flex justify-content-between'>
              <div className='d-flex align-items-center'>
                <CircleDiv></CircleDiv>
                <SmallBoldText className='ml-2 mt-2'>{item.name}</SmallBoldText>
              </div>
              {/* like comment share icons */}
              <div className='d-flex'>
                <IconsStyle className='fas fa-heart text-danger'></IconsStyle>
                <SmallBoldText className='text-danger mt-1'>
                  {item.likes}
                </SmallBoldText>
                <IconsStyle className='fas fa-comment-dots'></IconsStyle>
                <SmallBoldText className='mt-1'>{item.comments}</SmallBoldText>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default FeedItems
