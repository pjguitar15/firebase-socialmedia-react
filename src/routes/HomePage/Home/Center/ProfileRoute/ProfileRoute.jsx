import React from 'react'
import styled from 'styled-components'
const ProfileWrapper = styled.div`
  height: 100vh;
  background: #f7faff;
  padding: 5rem;
`
const ProfileInfoWrapper = styled.div`
  background: white;
  border-radius: 7px;
  position: relative;
  margin-top: 4rem;
`

const ProfilePicturePosition = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -4rem;
  margin-left: auto;
  margin-right: auto;
  width: 140px; /* Need a specific value to work */
`
const PictureParent = styled.div`
  border-radius: 50%;
  background: tomato;
  height: 9rem;
  width: 9rem;
  width: 100%;
  position: relative;
  overflow: hidden;
`

const ProfileRoute = () => {
  return (
    <ProfileWrapper className='col-xl-10 col-md-8 col-sm-7 ml-auto'>
      <ProfileInfoWrapper className='col-6 p-5'>
        <ProfilePicturePosition>
          <PictureParent>
            <img
              src='https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/84246825_3504451782961648_5276566424934940672_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_ohc=QvB6mz0aCzEAX9bvPWj&_nc_ht=scontent.fmnl4-2.fna&oh=a06ec9b65759416541523e126628e0c8&oe=608F8719'
              style={{ height: '100%', position: 'absolute' }}
              alt=''
            />
          </PictureParent>
        </ProfilePicturePosition>
        <div className='text-center mt-5'>
          <h4>Philcob Suzuki Josol</h4>
          <p>Philippines</p>
          <div className='row col-4 mx-auto'>
            <div className='col-6'>
              <h6>1,200</h6>
              <p>followers</p>
            </div>
            <div className='col-6'>
              <h6>1,700</h6>
              <p>following</p>
            </div>
          </div>
        </div>
      </ProfileInfoWrapper>
    </ProfileWrapper>
  )
}

export default ProfileRoute
