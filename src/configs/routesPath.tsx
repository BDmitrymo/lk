import {ChatPage} from '@/pages/ChatPage'
import {SignInPage} from '@/pages/SignInPage'
import {SignUpPage} from '@/pages/SignUpPage'
import {StatisticsPage} from '@/pages/StatisticsPage'
import React from 'react'

export const ROUTES_PATH: any = {
  admin: [
    {
      path: '/chat',
      component: ChatPage,
      icon: <i className="fa-solid fa-message" />,
    },
    {
      path: '/statistics',
      component: StatisticsPage,
      icon: <i className="fa-solid fa-chart-pie" />,
    },
  ],
  auth: [
    {
      path: '/signin',
      component: SignInPage,
    },
    {
      path: '/signup',
      component: SignUpPage,
    },
  ],
}
