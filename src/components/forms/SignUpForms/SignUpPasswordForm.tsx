import React from 'react';
import {Button, Form, Input} from 'antd';
import {PersonalData} from '../../ui/PersonalData/PersonalData';

export const SignUpPasswordForm = () => {
  return (
    <>

      <Form layout="vertical">
        <Form.Item
          className="as__auth_form-item"
          label="Задайте пароль"
          name="password"
          rules={[{required: true, message: 'Please input your password!'}]}
        >
          <Input.Password size="large" placeholder="Введите пароль"/>
        </Form.Item>
        <Form.Item
          className="as__auth_form-item"
          label="Повторите пароль"
          name="repeatPassword"
          rules={[{required: true, message: 'Please input your password!'}]}
        >
          <Input.Password size="large" placeholder="Повторите пароль"/>
        </Form.Item>
        <PersonalData text="Нажимая кнопку 'Завершить регистрацию'"/>
        <Button size="large" type="primary" htmlType="submit" block>
          Завершить регистрацию
        </Button>
      </Form>
    </>
  );
};