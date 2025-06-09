import React from 'react'
import Login from './Login'
const App = () => {
   const signUpEmail = prompt("Enter your Sign Up Email:");
  const signUpPswd = prompt("Enter your Sign Up Password:");
  const signUpRole = prompt("Enter your Role (buyer/seller):");
  const userFormLS=JSON.parse(localStorage.getItem("users")) || []
  userFormLS.push({signUpEmail,signUpPswd,signUpRole})
  localStorage.setItem("users",JSON.stringify(userFormLS))
  return (
    <div>
      <Login/>
    </div>
  )
}

export default App