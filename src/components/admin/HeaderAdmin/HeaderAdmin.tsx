import {ButtonBurger} from '@/components/admin/LeftPanelAdmin/ButtonBurger'
import {ProfileUserAdmin} from '@/components/admin/ProfileUserAdmin/ProfileUserAdmin'
import {Flex} from 'antd'
import React from 'react'
import {ReactComponent as Logo} from '../../../assets/img/logo.svg'
import './HeaderAdmin.scss'

export const HeaderAdmin = () => {
  return (
    <Flex gap={10} className="as__header-admin" justify="space-between" align="center">
      <Flex className="as__header-admin_box-logo" justify="center" align="center">
        <Logo className="as__logo" />
      </Flex>
      <Flex gap={15} align="center">
        <ProfileUserAdmin />
        <ButtonBurger />
      </Flex>
    </Flex>
  )
}
