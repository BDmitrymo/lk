import React from 'react'
import './MenuAdmin.scss'
import {Button, Flex} from 'antd'
import {SwitchLang} from '@/components/ui/SwitchLang/SwitchLang'

export const MenuAdmin = () => {
  return (
    <Flex className="as__menu-admin" justify="space-between" vertical>
      <div className="as__menu-admin_top">
        <Button className="as__menu-admin_button as__menu-admin_button-active">
          <i className="fa-solid fa-message" />
        </Button>
        <Button className="as__menu-admin_button">
          <i className="fa-solid fa-chart-pie" />
        </Button>
      </div>
      <div className="as__menu-admin_bottom">
        <Button className="as__menu-admin_button">
          <i className="fa-solid fa-gear" />
        </Button>
      </div>
    </Flex>
  )
}
