import React from 'react'
import { Row, Col } from 'react-bootstrap'
// components
import ChatSideBar from './ChatSideBar.jsx'
import MainChat from './MainChat.jsx'

const MessagesRoute = () => {
  return (
    <div className='col-xl-10 col-md-8 col-sm-7 p-0 ml-auto'>
      <Row className='m-0 p-0'>
        <Col md='4' className='m-0 p-0'>
          <ChatSideBar />
        </Col>
        <Col md='8' className='m-0 p-0'>
          <MainChat />
        </Col>
      </Row>
    </div>
  )
}

export default MessagesRoute
