import {SwitchLang} from '@/components/ui/SwitchLang'
import {Flex} from 'antd'
import React from 'react'
import {Outlet} from 'react-router-dom'
import './AuthLayout.scss'
import {ReactComponent as Logo} from '../../assets/img/logo.svg'

export const AuthLayout: React.FC = () => {
  return (
    <div className="as__auth-layout">
      <Flex className="as__auth" wrap="wrap">
        <div className="as__auth_content">
          <SwitchLang />
          <Flex justify="center" align="center" style={{minHeight: '100%'}} vertical>
            <Logo />
            <Outlet />
          </Flex>
        </div>
      </Flex>
    </div>
  )
}
