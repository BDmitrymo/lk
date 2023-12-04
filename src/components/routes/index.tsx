import {AdminRoutes} from '@/components/routes/AdminRoutes'
import {AuthRoutes} from '@/components/routes/AuthRoutes'
import {NotFoundPage} from '@/pages/NotFoundPage'
import React from 'react'
import {Route, Routes} from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<AuthRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
