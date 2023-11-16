import React from 'react';
import {Link} from 'react-router-dom';
import {LanguageSwitcher} from '../../../components/ui/LanguageSwitcher/LanguageSwitcher';
import {BANNER_1_CONFIG} from '../../../configs/banners-1.config';
import {CarouselBanner} from '../../../components/ui/CarouselBanner/CarouselBanner';
import {ITabsItems, TabsAuth} from '../../../components/TabsAuth/TabsAuth';
import {SignUpDefaultForm} from '../../../components/forms/SignUpDefaultForm/SignUpDefaultForm';
import {SignUpPhoneForm} from '../../../components/forms/SignUpPhoneForm/SignUpPhoneForm';
import './SignUp.scss';

export const SignUp = () => {
  const items: any = [
    {
      children: <SignUpDefaultForm/>,
      value: 'Почта',
    },
    {
      children: <SignUpPhoneForm/>,
      value: 'Телефон',
    }
  ];

  return (
    <div className="as__auth as__page-sign-up">
      <div className="as__auth_item as__auth_content">
        <div className="as__auth_box">
          {/*<Link to="/login">Войти</Link>*/}
          {/*<LanguageSwitcher/>*/}
          <TabsAuth defaultActiveKeyTab='Почта' items={items}/>
        </div>
      </div>
      <div className="as__auth_item">
        <CarouselBanner banners={BANNER_1_CONFIG}/>
      </div>
    </div>
  );
};