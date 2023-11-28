import {AuthSocial} from '@/components/auth/common/AuthSocial'
import {TabsAuth} from '@/components/auth/common/TabsAuth'
import {SignInMailForm} from '@/components/auth/SignIn/SignInMailForm'
import {SignInTelForm} from '@/components/auth/SignIn/SignInTelForm'
import {SwitchLang} from '@/components/ui/SwitchLang/SwitchLang'
import {Divider, Flex} from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../assets/img/logo.svg'

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
    <Flex className="as__auth" gap={30} justify="center" align="center">
      <div className="as__auth_content">
        <SwitchLang />
        <Flex justify="center" align="center" style={{minHeight: '100%'}} vertical>
          <Logo />
          <Title className="as__auth_title">Авторизация</Title>
          <AuthSocial />
          <Divider>или</Divider>
          <TabsAuth defaultActiveTab="Телефон" items={items} />
          <Title level={5}>
            У Вас нет аккаунт? <Link to="/signup">Регистрация</Link>
          </Title>
        </Flex>
      </div>
    </Flex>
  )
}
