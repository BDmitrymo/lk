import React from 'react';
import {Button} from 'antd';
import {ReactComponent as YandexLogo} from '../../../../assets/img/social/yandex.svg';
import './AuthSocial.scss';

export const AuthSocial = () => {
  return (
    <div className="as__auth_social">
      <Button
        className="as__auth_social-item"
        size="large"
        icon={<YandexLogo/>}
      >
        Войти через Яндекс
      </Button>
    </div>
  );
};