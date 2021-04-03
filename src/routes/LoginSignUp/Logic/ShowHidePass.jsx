import { useState } from 'react'

const useShowHidePass = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const showPasswordHandler = () => {
    setShowPassword(!showPassword)
  }
  const showConfirmPasswordHandler = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }
  return {
    showPassword,
    showPasswordHandler,
    showConfirmPassword,
    showConfirmPasswordHandler,
  }
}

export default useShowHidePass
