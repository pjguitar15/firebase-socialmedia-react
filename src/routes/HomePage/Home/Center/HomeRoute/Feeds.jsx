import React from 'react'
import { SmallBoldText } from '../../Sidebar/Styles/Main.style.jsx'
import { FeedFilterStyle } from '../Styles/MainStyles.jsx'
// Reuse setLinkActive hook from Sidebar folder
import useSetLinkActive from '../../Sidebar/CustomHook/useSetLinkActive.jsx'
// import components
import FeedItems from './FeedItems.jsx'
const Feeds = () => {
  const { feedLinkActive, setFeedActiveHandler } = useSetLinkActive()
  return (
    <div>
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
      <FeedItems />
    </div>
  )
}

export default Feeds
