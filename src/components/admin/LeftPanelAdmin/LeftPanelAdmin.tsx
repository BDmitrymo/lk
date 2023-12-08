import {MenuAdmin} from '@/components/admin/MenuAdmin/MenuAdmin'
import {SwitchLang} from '@/components/ui/SwitchLang'
import {SwitchTheme} from '@/components/ui/SwitchTheme/SwitchTheme'
import {Flex} from 'antd'
import React, {useRef} from 'react'
import './LeftPanelAdmin.scss'

export const LeftPanelAdmin = () => {
  const leftPanel = useRef<HTMLElement>(null)
  const handleCloseLeftPanel = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (leftPanel.current && e.defaultPrevented) {
      leftPanel.current.classList.remove('as__left-panel-admin_active')
    }
  }

  return (
    <Flex
      ref={leftPanel}
      className="as__left-panel-admin"
      align="center"
      onClick={(e) => handleCloseLeftPanel(e)}
      vertical
    >
      <Flex style={{height: '100%'}} align="center">
        <MenuAdmin />
      </Flex>
      <Flex gap={10} justify="center" vertical>
        <SwitchLang />
        <SwitchTheme />
      </Flex>
    </Flex>
  )
}
