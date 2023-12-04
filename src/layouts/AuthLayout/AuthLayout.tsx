import React from 'react'
import {Outlet} from 'react-router-dom'
import './AuthLayout.scss'

export const AuthLayout = () => {
  return (
    <div className="as__auth-layout">
      <Outlet />
    </div>
  )
}
