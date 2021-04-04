import React, { useState } from 'react'
import { SmallBoldText } from '../../Sidebar/Styles/Main.style.jsx'
import { FeedFilterStyle } from '../Styles/MainStyles.jsx'
// Reuse setLinkActive hook from Sidebar folder
import useSetLinkActive from '../../Sidebar/CustomHook/useSetLinkActive.jsx'
// import components
import FeedItems from './FeedItems.jsx'
// import Boostrap
import { Button } from 'react-bootstrap'
// import Modal Content
import ModalContent from './ModalContent.jsx'
// import Center Wrapper
import { CenterWrapper } from '../Styles/MainStyles.jsx'
const Feeds = () => {
  const { feedLinkActive, setFeedActiveHandler } = useSetLinkActive()
  const [visible, setVisible] = useState(false)
  return (
    <CenterWrapper className='col-xl-10 col-md-8 col-sm-7 ml-auto'>
      <div className='d-flex justify-content-between'>
        <SmallBoldText>Feeds</SmallBoldText>

        {/* Feed Filter */}
        <div className='d-flex justify-content-between'>
          <FeedFilterStyle
            onClick={setFeedActiveHandler}
            id='all'
            active={feedLinkActive.all}
            className='mx-2'
          >
            All
          </FeedFilterStyle>
          <FeedFilterStyle
            onClick={setFeedActiveHandler}
            id='following'
            active={feedLinkActive.following}
            className='mx-2'
          >
            Following
          </FeedFilterStyle>
          <FeedFilterStyle
            onClick={setFeedActiveHandler}
            id='newest'
            active={feedLinkActive.newest}
            className='mx-2'
          >
            Newest
          </FeedFilterStyle>
          <FeedFilterStyle
            onClick={setFeedActiveHandler}
            id='popular'
            active={feedLinkActive.popular}
            className='mx-2'
          >
            Popular
          </FeedFilterStyle>
        </div>
      </div>
      <Button
        style={{ background: '#a872ff', border: 'none' }}
        onClick={() => setVisible(true)}
        size='sm'
      >
        Add a post!
      </Button>
      <ModalContent visible={visible} setVisible={setVisible} />
      <FeedItems />
    </CenterWrapper>
  )
}

export default Feeds
