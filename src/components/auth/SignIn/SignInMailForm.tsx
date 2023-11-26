import React from 'react';
import {Button, Form, Input} from 'antd';
import {useTranslation} from 'react-i18next';

export const SignInMailForm = () => {
  const {t} = useTranslation();

  const handleSend = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <Form layout="vertical" autoComplete="off" requiredMark={false} onFinish={handleSend}>
      <Form.Item
        label="Почта"
        name="email"
        rules={[{required: true, type: 'email', message: 'Введите почту'}]}
      >
        <Input size="large" placeholder="Введите почту"/>
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{required: true, message: 'Введите пароль'}]}
      >
        <Input.Password size="large" placeholder="Введите пароль"/>
      </Form.Item>
      <Button size="large" type="primary" htmlType="submit" block>
        Войти
      </Button>
    </Form>
  );
};