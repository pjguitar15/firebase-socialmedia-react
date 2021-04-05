import React from 'react'
// React Router Dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Import Bootstrap for responsiveness
import 'bootstrap/dist/css/bootstrap.min.css'
// import Antd CSS
import 'antd/dist/antd.css'
// Components
import LoginPage from './routes/LoginSignUp/Login/LoginForm.jsx'
import SignUpPage from './routes/LoginSignUp/SignUp/SignUpForm.jsx'
import HomePage from './routes/HomePage/Home/Main.jsx'
// Private Route
import PrivateRoute from './routes/ProtectedRoute/ProtectedRoute.jsx'
// Auth Provider
import { AuthProvider } from './Context/AuthProvider.jsx'
// Global state
import GlobalStateProvider from './Context/GlobalState.jsx'
import FirebaseProvider from './Context/FirebaseContext.jsx'
const App = () => {
  return (
    <GlobalStateProvider>
      <FirebaseProvider>
        <AuthProvider>
          <Router>
            <Switch>
              <PrivateRoute path='/' exact component={HomePage} />
              <Route path='/login' component={LoginPage} />
              <Route path='/signup' component={SignUpPage} />
            </Switch>
          </Router>
        </AuthProvider>
      </FirebaseProvider>
    </GlobalStateProvider>
  )
}

export default App
