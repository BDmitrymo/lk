import {ChatPage} from '@/pages/ChatPage'
import {SignInPage} from '@/pages/SignInPage'
import {SignUpPage} from '@/pages/SignUpPage'
import {StatisticsPage} from '@/pages/StatisticsPage'
import React, {FunctionComponent, ReactNode} from 'react'

interface IPathItem {
  path: string
  component: FunctionComponent
  icon?: ReactNode
}

interface IPathRouters {
  [key: string]: IPathItem[]
}

export const PATH_ROUTES: IPathRouters = {
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
