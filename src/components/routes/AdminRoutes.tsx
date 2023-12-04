import {ROUTES_PATH} from '@/configs/routesPath'
import {AdminLayout} from '@/layouts/AdminLayout/AdminLayout'
import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Navigate to="chat" />} />
        {ROUTES_PATH.admin.map((router: any) => (
          <Route key={router.path} path={router.path} element={<router.component />} />
        ))}
      </Route>
    </Routes>
  )
}
