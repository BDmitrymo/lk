import {ProfileUserAdmin} from '@/components/admin/ProfileUserAdmin/ProfileUserAdmin'
import {Flex} from 'antd'
import React from 'react'
import './HeaderAdmin.scss'

export const HeaderAdmin = () => {
  return (
    <Flex className="as__header-admin" justify="flex-end" align="center">
      <ProfileUserAdmin />
    </Flex>
  )
}
