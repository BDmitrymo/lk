import React from 'react';
import {Form, Input} from 'antd';
import {CarouselBanner} from '../../components/CarouselBanner/CarouselBanner';
import {BANNER_1_CONFIG} from '../../configs/banners-1.config';
import './SignUp.scss';

export const SignUp = () => {
  return (
    <div className="as__auth as__page-sign-up">
      <div className="as__auth_item as__auth_content">
        <form>
          <Form.Item
            name="email"
            rules={[{required: true, type: 'email'}]}
          >
            <Input placeholder="Введите почту"/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{required: true, message: 'Please input your password!'}]}
          >
            <Input.Password placeholder="Введите пароль"/>
          </Form.Item>
        </form>
      </div>
      <div className="as__auth_item">
        <CarouselBanner banners={BANNER_1_CONFIG}/>
      </div>
    </div>
  );
};