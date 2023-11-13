import React from 'react';
import {Button, Form, Input} from 'antd';
import './SignUpPhoneForm.scss';

export const SignUpPhoneForm = () => {
  return (
    <form>
      <Form.Item
        name="text"
        rules={[{required: true, message: 'Please input your password!'}]}
      >
        <Input placeholder="Введите имя" required/>
      </Form.Item>
      <Form.Item
        name="text"
        rules={[{required: true, message: 'Please input your password!'}]}
      >
        <Input placeholder="Введите телефон" required/>
      </Form.Item>
      <Button type="primary" block>Далее</Button>
    </form>
  );
};