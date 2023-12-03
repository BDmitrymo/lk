import {MenuAdmin} from '@/components/admin/MenuAdmin/MenuAdmin'
import {ProfileUserAdmin} from '@/components/admin/ProfileUserAdmin/ProfileUserAdmin'
import {SwitchTheme} from '@/components/ui/SwitchTheme/SwitchTheme'
import {Flex} from 'antd'
import React from 'react'
import {ReactComponent as Logo} from '../../../assets/img/logo.svg'
import './LeftPanelAdmin.scss'

export const LeftPanelAdmin = () => {
  return (
    <Flex className="as__left-panel-admin" align="center" justify="space-between" vertical>
      <Flex className="as__left-panel-admin_box-logo" justify="center" align="center">
        <Logo className="as__logo" />
      </Flex>
      <MenuAdmin />
      <Flex gap={10} justify="center" vertical>
        <ProfileUserAdmin />
        <SwitchTheme />
      </Flex>
    </Flex>
  )
}
