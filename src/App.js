import React from 'react'
// React Router Dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Import Bootstrap for responsiveness
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import LoginPage from './routes/LoginSignUp/Login/LoginForm.jsx'
import SignUpPage from './routes/LoginSignUp/SignUp/SignUpForm.jsx'
import HomePage from './routes/HomePage/Home/Main.jsx'
// Private Route
import PrivateRoute from './routes/ProtectedRoute/ProtectedRoute.jsx'
// Auth Provider
import { AuthProvider } from './Context/AuthProvider.jsx'
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute path='/' exact component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignUpPage} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App
