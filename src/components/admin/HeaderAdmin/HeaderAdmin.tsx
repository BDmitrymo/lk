import {SwitchLang} from '@/components/ui/SwitchLang/SwitchLang'
import {Flex} from 'antd'
import React from 'react'
import './HeaderAdmin.scss'

export const HeaderAdmin = () => {
  return (
    <Flex className="as__header-admin" justify="flex-end" align="center">
      <SwitchLang />
    </Flex>
  )
}
