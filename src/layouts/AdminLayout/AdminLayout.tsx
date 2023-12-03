import {HeaderAdmin} from '@/components/admin/HeaderAdmin/HeaderAdmin'
import {LeftPanelAdmin} from '@/components/admin/LeftPanelAdmin/LeftPanelAdmin'
import React from 'react'
import './AdminLayout.scss'

export const AdminLayout = ({children}: any) => {
  return (
    <div className="as__admin-layout">
      <HeaderAdmin />
      <LeftPanelAdmin />
      <div className="as__admin-layout_body">
        <div className="as__admin-layout_container">{children ? children : ''}</div>
      </div>
    </div>
  )
}
