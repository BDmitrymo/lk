import {AdminRoutes} from '@/components/AppRoutes/AdminRoutes'
import {NotFoundPage} from '@/pages/NotFoundPage'
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {AuthLayout} from '@/layouts/AuthLayout/AuthLayout'
import {PATHS} from '@/paths'
import {SignInPage} from '@/pages/SignInPage'
import {SignUpPage} from '@/pages/SignUpPage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path={PATHS.signin} element={<SignInPage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path={PATHS.signup} element={<SignUpPage />} />
      </Route>
      <Route path='/admin/*' element={<AdminRoutes />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
