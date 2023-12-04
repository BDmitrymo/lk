import {AuthSocial} from '@/components/auth/common/AuthSocial'
import {TabsAuth} from '@/components/auth/common/TabsAuth'
import {SignInMailForm} from '@/components/auth/forms/SignInMailForm'
import {SignInTelForm} from '@/components/auth/forms/SignInTelForm'
import {SwitchLang} from '@/components/ui/SwitchLang'
import {Divider, Flex, Typography} from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../assets/img/logo.svg'

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
    <Flex className="as__auth" wrap="wrap">
      <div className="as__auth_content">
        <SwitchLang />
        <Flex justify="center" align="center" style={{minHeight: '100%'}} vertical>
          <Logo />
          <Title className="as__auth_title">Авторизация</Title>
          <AuthSocial />
          <Divider>или</Divider>
          <TabsAuth defaultActiveTab="Телефон" items={items} />
          <Text type="secondary" style={{padding: '5px 0'}}>
            У Вас нет аккаунт? <Link to="/signup">Регистрация</Link>
          </Text>
        </Flex>
      </div>
    </Flex>
  )
}
