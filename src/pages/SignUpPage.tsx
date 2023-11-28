import React from 'react'
import Title from 'antd/es/typography/Title'
import {Link} from 'react-router-dom'
import {Divider, Flex, Typography} from 'antd'
import {SwitchLang} from '@/components/ui/SwitchLang/SwitchLang'
import {TabsAuth} from '@/components/auth/common/TabsAuth'
import {AuthSocial} from '@/components/auth/common/AuthSocial'
import {SignUpMail} from '@/components/auth/SignUpMail'
import {SignUpTel} from '@/components/auth/SignUpTel'
import {ReactComponent as Logo} from '../assets/img/logo.svg'
import '../styles/auth.scss'

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
    <Flex className="as__auth" wrap="wrap">
      <div className="as__auth_content">
        <SwitchLang />
        <Flex justify="center" align="center" style={{minHeight: '100%'}} vertical>
          <Logo />
          <Title className="as__auth_title">Регистрация</Title>
          <AuthSocial />
          <Divider>или</Divider>
          <TabsAuth defaultActiveTab="Почта" items={items} />
          <Text type="secondary" style={{padding: '5px 0'}}>
            У Вас есть аккаунт? <Link to="/signin">Войти</Link>
          </Text>
        </Flex>
      </div>
    </Flex>
  )
}
