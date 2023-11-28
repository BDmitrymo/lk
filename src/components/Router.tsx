import {AdminPage} from 'pages/AdminPage'
import {SignInPage} from 'pages/SignInPage'
import {SignUpPage} from 'pages/SignUpPage'
import React from 'react'
import {Route, Routes} from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminPage />}></Route>
      <Route path="/signin" element={<SignInPage />}></Route>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/admin" element={<AdminPage />}></Route>
    </Routes>
  )
}
