import React from 'react';
import {BANNERS_AUTH} from '../configs/banners-auth.config';
import Title from 'antd/es/typography/Title';
import {Link} from 'react-router-dom';
import {Flex} from 'antd';
import {SwitchLang} from '../components/ui/SwitchLang/SwitchLang';
import {CarouselBanner} from '../components/ui/CarouselBanner/CarouselBanner';
import {TabsAuth} from '../components/auth/components/TabsAuth/TabsAuth';
import {SignUpPhoneForm} from '../components/forms/SignUpForms/SignUpPhoneForm';
import {AuthSocial} from '../components/auth/components/AuthSocial/AuthSocial';
import {Divider} from '../components/ui/Divider/Divider';
import {SignUp} from '../components/auth/SignUp';
import {ReactComponent as Logo} from '../assets/img/logo.svg';
import '../styles/auth.scss';

export const SignUpPage = () => {
  const items = [
    {
      value: 'Почта',
      children: <SignUp/>
    },
    {
      value: 'Телефон',
      children: <SignUpPhoneForm/>
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
          <TabsAuth defaultActiveTab="Почта" items={items}/>
          <Title level={5}>
            У Вас есть аккаунт? <Link to="/login">Войти</Link>
          </Title>
        </div>
      </div>
      <div className="as__auth_item as__auth_banner">
        <CarouselBanner banners={BANNERS_AUTH}/>
      </div>
    </Flex>
  );
};
