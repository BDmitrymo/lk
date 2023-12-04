import {PATH_ROUTES} from '@/components/routes/pathRoutes'
import {AdminLayout} from '@/layouts/AdminLayout/AdminLayout'
import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Navigate to="chat" />} />
        {PATH_ROUTES.admin.map((router) => (
          <Route key={router.path} path={router.path} element={<router.component />} />
        ))}
      </Route>
    </Routes>
  )
}
