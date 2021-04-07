import React from 'react'
import styled from 'styled-components'
// import useAuth
import { useAuth } from '../../../../../Context/AuthProvider.jsx'
// react-bootstrap
import { Alert, Form, Button } from 'react-bootstrap'
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

  height: 9rem;
  width: 9rem;
  width: 100%;
  position: relative;
  overflow: hidden;
`

const ProfileRoute = () => {
  // import currentUser from useAuth
  const { currentUser } = useAuth()
  return (
    <ProfileWrapper className='col-xl-10 col-md-8 col-sm-7 ml-auto'>
      <ProfileInfoWrapper className='col-6 p-5'>
        <ProfilePicturePosition>
          <PictureParent>
            <img
              src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
              style={{
                height: '110%',
                position: 'absolute',
                top: '0px',
                left: '-9px',
              }}
              alt=''
            />
          </PictureParent>
        </ProfilePicturePosition>
        <div className='mt-5'>
          <Alert variant='warning text-center'>
            Your profile needs to be updated.
          </Alert>
          <h4 className='text-center'>{currentUser.email}</h4>
          <p className='text-center'>Philippines</p>
          <div className='row col-4 mx-auto my-4'>
            <div className='col-6 text-center'>
              <h6>0</h6>
              <p className='font-weight-bold'>followers</p>
            </div>
            <div className='col-6 text-center'>
              <h6>0</h6>
              <p className='font-weight-bold'>following</p>
            </div>
          </div>
          <Form>
            <Form.Group>
              <Form.Label>Full name</Form.Label>
              <Form.Control placeholder='Enter fullname' />
            </Form.Group>
            <Form.Group>
              <Form.Label>Birthday</Form.Label>
              <Form.Control type='date' placeholder='Enter fullname' />
            </Form.Group>
            <Form.Group>
              <Form.Label>Hobby</Form.Label>
              <Form.Control placeholder='Enter hobby' />
            </Form.Group>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control placeholder='Enter country' />
            </Form.Group>
            <Button variant='primary w-100' size='sm'>
              Update Profile
            </Button>
          </Form>
        </div>
      </ProfileInfoWrapper>
    </ProfileWrapper>
  )
}

export default ProfileRoute
