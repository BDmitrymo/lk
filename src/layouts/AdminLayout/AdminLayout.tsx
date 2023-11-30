import {HeaderAdmin} from '@/components/admin/HeaderAdmin/HeaderAdmin'
import {MenuAdmin} from '@/components/admin/MenuAdmin/MenuAdmin'
import React from 'react'
import {ReactComponent as Logo} from '../../assets/img/logo.svg'
import './AdminLayout.scss'
import {Flex} from 'antd'

export const AdminLayout = ({children}: any) => {
  return (
    <div className="as__admin-layout">
      <HeaderAdmin />
      <Flex className="as__admin-layout_left-panel" vertical>
        <Flex justify="center">
          <Logo className="as__logo" />
        </Flex>
        <MenuAdmin />
      </Flex>
      <div className="as__admin-layout_body">
        <div className="as__admin-layout_container">{children ? children : 'Отсутствует'}</div>
      </div>
    </div>
  )
}
