import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../Firebase/firebase'
const AuthContext = React.createContext()

// this function creates the CUSTOM HOOK
export function useAuth() {
  return useContext(AuthContext)
}

// main function
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({})
  const [loading, setLoading] = useState(true)
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }
  function logout() {
    return auth.signOut()
  }
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }
  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }
  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const value = {
    login,
    signup,
    currentUser,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
