import React from 'react'

const ChatSideBar = () => {
  return (
    <div className=' m-0 p-0' style={{ height: '100vh' }}>
      {/* Profile */}
      <div className='py-4 text-center'>
        <div
          className='col-9 mb-4 mt-4 mx-auto position-relative'
          style={{
            height: '7rem',
            width: '7rem',
            overflow: 'hidden',
            borderRadius: '50%'
          }}
        >
          <img
            className='position-absolute'
            style={{ width: '100%', top: '0', left: '0' }}
            src='https://images.pexels.com/photos/6652959/pexels-photo-6652959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt=''
          />
        </div>
        <h3 className='m-0 p-0 text-dark font-weight-bold'>Username</h3>
        <p className='text-secondary mt-1 m-0 p-0'>My account</p>
      </div>
      {/* End Profile */}
      <hr />
      {/* Online Now */}
      <div className='px-4'>
        <div className='d-flex justify-content-between align-items-center'>
          <h6>Online now</h6>
          <div
            style={{ background: 'lightgrey' }}
            className='py-1 px-2 text-center font-weight-bold'
          >
            12
          </div>
        </div>
      </div>
      {/* End Online Now */}
    </div>
  )
}

export default ChatSideBar
