import type {MenuProps} from 'antd'
import {Avatar, Drawer, Dropdown, Typography} from 'antd'
import 'components/admin/ProfileUserAdmin/ProfileUserAdmin.scss'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const {Text} = Typography

export const ProfileUserAdmin = () => {
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
      <Dropdown menu={{items}} placement="topLeft">
        <Avatar
          src="https://get.wallhere.com/photo/drawing-illustration-cartoon-panda-ART-bear-mammal-sketch-polar-bear-giant-panda-muzzle-554706.jpg"
          className="as__profile-user_avatar"
          size={40}
          gap={2}
        />
      </Dropdown>
      <Drawer title="Профиль" placement="right" onClose={onClose} open={openProfile}></Drawer>
    </>
  )
}
