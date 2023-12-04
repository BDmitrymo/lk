import {PATH_ROUTES} from '@/components/routes/pathRoutes'
import {AuthLayout} from '@/layouts/AuthLayout/AuthLayout'
import {Navigate, Route, Routes} from 'react-router-dom'
import React from 'react'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route index element={<Navigate to="signin" />} />
        {PATH_ROUTES.auth.map((router) => (
          <Route key={router.path} path={router.path} element={<router.component />} />
        ))}
      </Route>
    </Routes>
  )
}
