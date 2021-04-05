import React, { useRef, useState } from 'react'
// SVG import
import art from '../Assets/art.svg'
// Import Style Component
import {
  MainWrapper,
  ArtColumn,
  FormColumn,
} from '../Styles/Background.style.jsx'
import {
  TextInput,
  HeaderText,
  FormLabel,
  FormGroup,
  PasswordInput,
  FormMain,
  CheckboxText,
} from '../Styles/InputField.style.jsx'
// Button
import { Button } from '../Styles/Button.jsx'
// SVG styles
import { SVGImage } from '../Styles/SVG.style.jsx'
// react router dom
import { Link, useHistory } from 'react-router-dom'
// import logic custom hook
import useShowHidePass from '../Logic/ShowHidePass.jsx'
// import useAuth hook
import { useAuth } from '../../../Context/AuthProvider.jsx'
// import Bootstrap Alert
import { Alert } from 'react-bootstrap'
const SignUpForm = () => {
  const [error, setError] = useState('')
  const {
    showPassword,
    showPasswordHandler,
    showConfirmPassword,
    showConfirmPasswordHandler,
  } = useShowHidePass()
  const { signup } = useAuth()

  // useRef variables
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  // useHistory initialiaze
  const history = useHistory()

  // submitHandler
  const submitHandler = (e) => {
    e.preventDefault()
    // Form validation
    if (usernameRef.current.value.length < 6) {
      setError('Username must be 6 characters up')
    } else if (passwordRef.current.value.length < 6) {
      setError('Password must be 6 characters up')
    } else if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError('Password did not match')
    } else {
      setError('')
      alert('success!')
      signup(emailRef.current.value, passwordRef.current.value)
      history.push('/login')
    }
  }

  return (
    <MainWrapper>
      {/* Art Column */}
      <ArtColumn className='d-none d-lg-block'>
        <SVGImage src={art} alt='art' />
      </ArtColumn>

      {/* Form Column */}
      <FormColumn onSubmit={submitHandler}>
        <FormMain className='col-xl-7 col-md-11 col-xs-12'>
          <HeaderText>Create Account</HeaderText>
          <FormGroup>
            {error && <Alert variant='danger'>{error}</Alert>}
            <FormLabel>Username</FormLabel>
            <TextInput
              ref={usernameRef}
              required
              placeholder='Enter username'
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <TextInput
              ref={emailRef}
              required
              type='email'
              placeholder='Enter email'
            />
          </FormGroup>
          <div
            style={{
              display: 'flex',
              marginTop: '-22px',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <FormGroup password>
              <FormLabel>Password</FormLabel>
              <div style={{ position: 'relative' }}>
                <PasswordInput
                  ref={passwordRef}
                  required
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter password'
                />
                {showPassword ? (
                  <i
                    onClick={showPasswordHandler}
                    style={{
                      cursor: 'pointer',
                      position: 'absolute',
                      right: '10px',
                      top: '13px',
                    }}
                    className='far fa-eye'
                  ></i>
                ) : (
                  <i
                    onClick={showPasswordHandler}
                    style={{
                      cursor: 'pointer',
                      position: 'absolute',
                      right: '10px',
                      top: '13px',
                    }}
                    className='far fa-eye-slash'
                  ></i>
                )}
              </div>
            </FormGroup>
            <FormGroup password>
              <FormLabel>Confirm Password</FormLabel>
              <div style={{ position: 'relative' }}>
                <PasswordInput
                  ref={confirmPasswordRef}
                  required
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder='Enter password'
                />
                {showConfirmPassword ? (
                  <i
                    onClick={showConfirmPasswordHandler}
                    style={{
                      cursor: 'pointer',
                      position: 'absolute',
                      right: '10px',
                      top: '13px',
                    }}
                    className='far fa-eye'
                  ></i>
                ) : (
                  <i
                    onClick={showConfirmPasswordHandler}
                    style={{
                      cursor: 'pointer',
                      position: 'absolute',
                      right: '10px',
                      top: '13px',
                    }}
                    className='far fa-eye-slash'
                  ></i>
                )}
              </div>
            </FormGroup>
          </div>
          <input type='checkbox' className='mr-2' />
          <CheckboxText>
            By creating an account, you agree to the Terms of Service and
            Conditions, and Privacy Policy
          </CheckboxText>
          <Button type='submit' addMarginTop>
            Sign Up
          </Button>
          <FormLabel style={{ marginTop: '14px' }}>
            Already have an account?
            <Link to='/login'> Login</Link>
          </FormLabel>
        </FormMain>
      </FormColumn>
    </MainWrapper>
  )
}

export default SignUpForm
