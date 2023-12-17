import {AdminLayout} from '@/layouts/AdminLayout/AdminLayout'
import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {PATHS} from '@/paths'
import {ChatPage} from '@/pages/ChatPage'
import {StatisticsPage} from '@/pages/StatisticsPage'

export const ADMIN_ROUTES: any = [
  {
    name: 'Чат',
    path: PATHS.chat,
    component: ChatPage,
    icon: <i className='fa-solid fa-message' />,
  },
  {
    name: 'Статистика',
    path: PATHS.statistics,
    component: StatisticsPage,
    icon: <i className='fa-solid fa-chart-pie' />,
  },
]

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Navigate to='chat' />} />
        {ADMIN_ROUTES.map((router:any) => (
          <Route key={router.path} path={router.path} element={<router.component />} />
        ))}
      </Route>
    </Routes>
  )
}
