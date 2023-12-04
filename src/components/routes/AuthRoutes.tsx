import {ROUTES_PATH} from '@/configs/routesPath'
import {AuthLayout} from '@/layouts/AuthLayout/AuthLayout'
import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route index element={<Navigate to="signin" />} />
        {ROUTES_PATH.auth.map((router: any) => (
          <Route key={router.path} path={router.path} element={<router.component />} />
        ))}
      </Route>
    </Routes>
  )
}
