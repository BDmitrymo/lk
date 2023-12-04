import type {MenuProps} from 'antd'
import {Avatar, Drawer, Dropdown, Flex} from 'antd'
import 'components/admin/ProfileUserAdmin/ProfileUserAdmin.scss'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export const ProfileUserAdmin = () => {
  const [openProfile, setOpenProfile] = useState(false)

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
    <Flex className="as__profile-user-admin">
      <Flex gap={5} align="center">
        <div className="as__profile-user-admin_info-name">Дмитрий</div>
        <Dropdown menu={{items}} placement="topLeft">
          <Avatar
            src="https://i.pinimg.com/originals/8e/9e/1b/8e9e1b162e3adbc9e5f12ff5b1067a84.jpg"
            className="as__profile-user_avatar"
            size={40}
            gap={2}
          />
        </Dropdown>
      </Flex>
      <Drawer title="Профиль" placement="right" onClose={onClose} open={openProfile}></Drawer>
    </Flex>
  )
}
