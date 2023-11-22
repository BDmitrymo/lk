import React from 'react';
import {BANNERS_AUTH} from '../configs/banners-auth.config';
import Title from 'antd/es/typography/Title';
import {Link} from 'react-router-dom';
import {Flex} from 'antd';
import {SwitchLang} from '../components/ui/SwitchLang/SwitchLang';
import {TabsAuth} from '../components/auth/common/TabsAuth/TabsAuth';
import {AuthSocial} from '../components/auth/common/AuthSocial/AuthSocial';
import {Divider} from '../components/ui/Divider/Divider';
import {SignUpMail} from '../components/auth/SignUpMail/SignUpMail';
import {ReactComponent as Logo} from '../assets/img/logo.svg';
import {SignUpTel} from '../components/auth/SignUpTel/SignUpTel';
import '../styles/auth.scss';

export const SignUpPage = () => {
  const items = [
    {
      value: 'Почта',
      children: <SignUpMail/>
    },
    {
      value: 'Телефон',
      children: <SignUpTel/>
    }
  ];

  return (
    <Flex className="as__auth" gap={30} justify="center" align="center">
      <div className="gutter-row as__auth_item as__auth_content">
        <SwitchLang/>
        <div className="as__auth_box">
          <Flex align="center" justify="center">
            <Logo/>
          </Flex>
          <Title className="as__auth_title">Регистрация</Title>
          <AuthSocial/>
          <Divider text="или"/>
          <TabsAuth defaultActiveTab="Телефон" items={items}/>
          <Title level={5}>
            У Вас есть аккаунт? <Link to="/login">Войти</Link>
          </Title>
        </div>
      </div>
      {/*<div className="as__auth_item as__auth_banner">*/}
      {/*  <CarouselBanner banners={BANNERS_AUTH}/>*/}
      {/*</div>*/}
    </Flex>
  );
};
