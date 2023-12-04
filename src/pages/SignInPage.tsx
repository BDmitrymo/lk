import {TabsAuth} from '@/components/auth/common/TabsAuth'
import {SignInMailForm} from '@/components/auth/forms/SignInMailForm'
import {SignInTelForm} from '@/components/auth/forms/SignInTelForm'
import {Typography} from 'antd'
import React from 'react'
import {Link} from 'react-router-dom'
import Title from 'antd/es/typography/Title'

const {Text} = Typography

export const SignInPage = () => {
  const items = [
    {
      value: 'Телефон',
      children: <SignInTelForm />,
    },
    {
      value: 'Почта',
      children: <SignInMailForm />,
    },
  ]

  return (
    <>
      <Title className="as__auth_title">Авторизация</Title>
      <TabsAuth defaultActiveTab="Телефон" items={items} />
      <Text type="secondary" style={{padding: '5px 0'}}>
        У Вас нет аккаунт? <Link to="/signup">Регистрация</Link>
      </Text>
    </>
  )
}
