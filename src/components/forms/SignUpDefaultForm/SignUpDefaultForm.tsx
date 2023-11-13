import React from 'react';
import {Button, Form, Input} from 'antd';
import './SignUpDefaultForm.scss';

export const SignUpDefaultForm = () => {
  return (
    <form>
      <Form.Item
        name="text"
        rules={[{required: true, message: 'Please input your password!'}]}
      >
        <Input placeholder="Введите имя" required/>
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{required: true, type: 'email'}]}
      >
        <Input placeholder="Введите почту" required/>
      </Form.Item>
      <Button type="primary" block>Далее</Button>
    </form>
  );
};