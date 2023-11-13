import React from 'react';
import {Button, TabsProps} from 'antd';
import {BANNER_1_CONFIG} from '../../configs/banners-1.config';
import {CarouselBanner} from '../../components/ui/CarouselBanner/CarouselBanner';
import {TabsSign} from '../../components/ui/Tabs/Tabs';
import {SignUpDefaultForm} from '../../components/forms/SignUpDefaultForm/SignUpDefaultForm';
import {SignUpPhoneForm} from '../../components/forms/SignUpPhoneForm/SignUpPhoneForm';
import './SignUp.scss';

export const SignUp = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Почта',
      children: <SignUpDefaultForm/>,
    },
    {
      key: '2',
      label: 'Телефон',
      children: <SignUpPhoneForm/>,
    }
  ];

  return (
    <div className="as__auth as__page-sign-up">
      <div className="as__auth_item as__auth_content">
        <TabsSign items={items}/>
      </div>
      <div className="as__auth_item">
        <CarouselBanner banners={BANNER_1_CONFIG}/>
      </div>
    </div>
  );
};