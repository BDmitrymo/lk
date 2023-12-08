import {HeaderAdmin} from '@/components/admin/HeaderAdmin/HeaderAdmin'
import {LeftPanelAdmin} from '@/components/admin/LeftPanelAdmin/LeftPanelAdmin'
import {Flex} from 'antd'
import React from 'react'
import {Outlet} from 'react-router-dom'
import './AdminLayout.scss'

export const AdminLayout: React.FC = () => {
  return (
    <div className="as__admin-layout">
      <HeaderAdmin />
      <LeftPanelAdmin />
      <div className="as__admin-layout_body">
        <Flex className="as__admin-layout_container" justify="center" align="center">
          <Outlet />
        </Flex>
      </div>
    </div>
  )
}
