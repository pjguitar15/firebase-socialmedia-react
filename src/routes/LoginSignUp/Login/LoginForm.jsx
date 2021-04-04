import React, { useRef, useState } from 'react'
// SVG import
import art from '../Assets/art.svg'
// Import Style Component
import {
  MainWrapper,
  ArtColumn,
  FormColumn,
} from '../Styles/Background.style.jsx'
// Form
import {
  TextInput,
  HeaderText,
  FormLabel,
  FormGroup,
  PasswordInput,
  FormMain,
} from '../Styles/InputField.style.jsx'
// Button
import { Button } from '../Styles/Button.jsx'
// SVG styles
import { SVGImage } from '../Styles/SVG.style.jsx'
// react router dom
import { Link, useHistory } from 'react-router-dom'
// import useAuth hook
import { useAuth } from '../../../Context/AuthProvider.jsx'
// Alert from React Bootstrap
import { Alert } from 'react-bootstrap'
const LoginForm = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // initialize useHistory
  const history = useHistory()

  // login handler from useAuth
  const { login } = useAuth()

  // form ref
  const emailRef = useRef()
  const passwordRef = useRef()

  // Form submit
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch (error) {
      setError('Failed to sign in')
      setLoading(false)
    }
  }

  return (
    <MainWrapper>
      <ArtColumn className='d-none d-lg-block'>
        <SVGImage src={art} alt='art' />
      </ArtColumn>
      <FormColumn>
        <FormMain
          onSubmit={submitHandler}
          className='col-xl-6 col-md-11 col-xs-12'
        >
          <HeaderText>Log In</HeaderText>
          {error && <Alert variant='danger'>{error}</Alert>}
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <TextInput
              required
              ref={emailRef}
              type='email'
              placeholder='Enter email'
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Password</FormLabel>
            <PasswordInput
              required
              ref={passwordRef}
              type='password'
              placeholder='Enter password'
            />
          </FormGroup>
          <Button
            disabled={loading}
            style={{
              cursor: loading && 'not-allowed',
              background: loading && 'lightgrey',
            }}
            type='submit'
          >
            Login
          </Button>
          <FormLabel style={{ marginTop: '14px' }}>
            Don't have an account?
            <Link to='/signup'> Register</Link>
          </FormLabel>
        </FormMain>
      </FormColumn>
    </MainWrapper>
  )
}

export default LoginForm
