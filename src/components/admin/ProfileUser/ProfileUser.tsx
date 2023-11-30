import type {MenuProps} from 'antd'
import {Avatar, Drawer, Dropdown, Flex, Typography} from 'antd'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './ProfileUser.scss'

const {Text} = Typography

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
      <Flex className="as__profile-user" align="center">
        <Dropdown menu={{items}} placement="topLeft">
          <Avatar className="as__profile-user_avatar" size={40} gap={2} />
        </Dropdown>
        <div className="as__profile-user_info">
          <div className="as__profile-user_fio" style={{fontSize: '14px'}}>
            Батков
          </div>
          <div className="as__profile-user_role" style={{fontSize: '11px'}}>
            Администратор
          </div>
        </div>
      </Flex>
      <Drawer title="Профиль" placement="right" onClose={onClose} open={openProfile}></Drawer>
    </>
  )
}
