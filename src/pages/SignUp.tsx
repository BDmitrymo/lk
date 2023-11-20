import React from 'react';
import {BANNER_1_CONFIG} from '../configs/banners-1.config';
import Title from 'antd/es/typography/Title';
import {Link} from 'react-router-dom';
import {SwitchLang} from '../components/ui/SwitchLang/SwitchLang';
import {CarouselBanner} from '../components/ui/CarouselBanner/CarouselBanner';
import {TabsAuth} from '../components/TabsAuth/TabsAuth';
import {SignUpDefaultForm} from '../components/forms/SignUpForms/SignUpDefaultForm';
import {SignUpPhoneForm} from '../components/forms/SignUpForms/SignUpPhoneForm';
import {AuthSocial} from '../components/AuthSocial/AuthSocial';
import {Divider} from '../components/ui/Divider/Divider';
import '../styles/auth.scss';

export const SignUp = () => {
  const items = [
    {
      value: 'Почта',
      children: <SignUpDefaultForm/>
    },
    {
      value: 'Телефон',
      children: <SignUpPhoneForm/>
    }
  ];

  return (
    <div className="as__auth">
      <div className="as__auth_item as__auth_content">
        <SwitchLang/>
        <div className="as__auth_box">
          <Title className="as__auth_title">Регистрация</Title>
          <AuthSocial/>
          <Divider text="или"/>
          <TabsAuth defaultActiveTab="Почта" items={items}/>
          <Title level={5}>
            У Вас есть аккаунт? <Link to="/login">Войти</Link>
          </Title>
        </div>
      </div>
      {/*<div className="as__auth_item as__auth_banner">*/}
      {/*  <CarouselBanner banners={BANNER_1_CONFIG}/>*/}
      {/*</div>*/}
    </div>
  );
};