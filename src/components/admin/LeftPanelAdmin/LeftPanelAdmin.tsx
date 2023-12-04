import {MenuAdmin} from '@/components/admin/MenuAdmin/MenuAdmin'
import {SwitchLang} from '@/components/ui/SwitchLang'
import {ReactComponent as Logo} from '../../../assets/img/logo.svg'
import {SwitchTheme} from '@/components/ui/SwitchTheme/SwitchTheme'
import './LeftPanelAdmin.scss'
import {Flex} from 'antd'
import React from 'react'

export const LeftPanelAdmin = () => {
  return (
    <Flex className="as__left-panel-admin" align="center" justify="space-between" vertical>
      <Flex className="as__left-panel-admin_box-logo" justify="center" align="center">
        <Logo className="as__logo" />
      </Flex>
      <MenuAdmin />
      <Flex gap={10} justify="center" vertical>
        <SwitchLang />
        <SwitchTheme />
      </Flex>
    </Flex>
  )
}
