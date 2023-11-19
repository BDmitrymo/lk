import React from 'react';
import {Button, Form, Input} from 'antd';

export const SignUpPhoneForm = () => {
  return (
    <Form layout="vertical">
      <Form.Item
        label="Введите имя"
        name="text"
        rules={[{required: true, message: 'Please input your password!'}]}
      >
        <Input size="large" required/>
      </Form.Item>
      <Form.Item
        label="Введите телефон"
        name="text"
        rules={[{required: true, message: 'Please input your password!'}]}
      >
        <Input size="large" required/>
      </Form.Item>
      <Button size="large" type="primary" block>Далее</Button>
    </Form>
  );
};