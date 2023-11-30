import React from 'react'
import {Flex} from 'antd'
import {ProfileUser} from '@/components/admin/ProfileUser/ProfileUser'
import {SwitchLang} from '@/components/ui/SwitchLang/SwitchLang'
import './HeaderAdmin.scss'

export const HeaderAdmin = () => {
  return (
    <Flex className="as__header-admin" style={{height: '100%'}} justify="flex-end" align="center">
      <SwitchLang />
      <ProfileUser />
    </Flex>
  )
}
