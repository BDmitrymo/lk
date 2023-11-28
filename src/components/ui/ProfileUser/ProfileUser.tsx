import type { MenuProps } from 'antd'
import { Avatar, Drawer, Dropdown, Flex, Typography } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProfileUser.scss'

const { Text } = Typography

export const ProfileUser = () => {
  const [openProfile, setOpenProfile] = useState(false)

  const handlerOpenProfile = () => {
    setOpenProfile(true)
  }

  const onClose = () => {
    setOpenProfile(false)
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <a onClick={(e) => e.preventDefault()}>Профиль</a>,
      icon: <i className="fa-solid fa-user" />,
    },
    {
      key: '2',
      label: <Link to="/logout">Выйты</Link>,
      icon: <i className="fa-solid fa-right-from-bracket" />,
    },
  ]

  return (
    <>
      <Flex style={{ padding: '0 20px' }} align="center">
        <Dropdown
          className="as__profile-user"
          menu={{ items }}
          placement="topLeft"
        >
          <Avatar
            style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }}
            size={30}
            gap={2}
          />
        </Dropdown>
        <Flex vertical>
          <Text style={{ fontSize: '14px' }}>Батков</Text>
          <Text style={{ fontSize: '11px' }} type="secondary">
            Администратор
          </Text>
        </Flex>
      </Flex>
      <Drawer
        title="Профиль"
        placement="right"
        onClose={onClose}
        open={openProfile}
      ></Drawer>
    </>
  )
}
