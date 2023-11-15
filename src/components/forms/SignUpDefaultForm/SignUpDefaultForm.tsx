import React from 'react';
import {Button, Form, Input} from 'antd';
import {useTranslation} from 'react-i18next';
import './SignUpDefaultForm.scss';

export const SignUpDefaultForm = () => {
  const {t} = useTranslation();

  return (
    <form>
      <Form.Item
        name="text"
        className="as__auth_form-item"
        rules={[{required: true, message: 'Please input your password!'}]}
      >
        <Input className="as__auth_input" placeholder="Введите имя" required/>
      </Form.Item>
      <Form.Item
        name="email"
        className="as__auth_form-item"
        rules={[{required: true, type: 'email'}]}
      >
        <Input className="as__auth_input" placeholder="Введите почту" required/>
      </Form.Item>
      <Button className="as__auth_button" type="primary" block>{t('buttonX')}</Button>
    </form>
  );
};