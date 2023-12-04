import {ROUTES_PATH} from '@/configs/routesPath'
import {Flex} from 'antd'
import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './MenuAdmin.scss'

export const MenuAdmin = () => {
  const location = useLocation()

  return (
    <Flex gap={10} className="as__menu-admin" justify="space-between" vertical>
      {ROUTES_PATH.admin.map(({path, icon}: any) => {
        const pathname = `/admin${path}`
        const classes = `as__menu-admin_link ${
          pathname === location.pathname ? ' as__menu-admin_link-active' : ''
        }`

        return (
          <Link key={path} to={pathname} className={classes}>
            {icon}
          </Link>
        )
      })}
    </Flex>
  )
}
