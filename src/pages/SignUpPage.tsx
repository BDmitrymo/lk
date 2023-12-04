import {TabsAuth} from '@/components/auth/common/TabsAuth'
import {SignUpMail} from '@/components/auth/SignUpMail'
import {SignUpTel} from '@/components/auth/SignUpTel'
import {Typography} from 'antd'
import React from 'react'
import {Link} from 'react-router-dom'
import Title from 'antd/es/typography/Title'

const {Text} = Typography

export const SignUpPage = () => {
  const items = [
    {
      value: 'Почта',
      children: <SignUpMail />,
    },
    {
      value: 'Телефон',
      children: <SignUpTel />,
    },
  ]

  return (
    <>
      <Title className="as__auth_title">Регистрация</Title>
      <TabsAuth defaultActiveTab="Почта" items={items} />
      <Text type="secondary" style={{padding: '5px 0'}}>
        У Вас есть аккаунт? <Link to="/signin">Войти</Link>
      </Text>
    </>
  )
}
