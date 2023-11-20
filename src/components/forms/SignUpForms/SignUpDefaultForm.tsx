import React from 'react';
import {Button, Form, Input} from 'antd';
import {useTranslation} from 'react-i18next';

export const SignUpDefaultForm = () => {
  const {t} = useTranslation(['translation', 'common']);

  const handleSend = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <Form layout="vertical" autoComplete="off" onFinish={handleSend}>
      <Form.Item
        label="Введите имя"
        name="username"
        rules={[{required: true, message: 'Please input your username!'}]}
      >
        <Input size="large"/>
      </Form.Item>
      <Form.Item
        label="Введите почту"
        name="email"
        rules={[{required: true, type: 'email', message: 'Please input your password!'}]}
      >
        <Input size="large"/>
      </Form.Item>
      <Button
        size="large"
        type="primary"
        htmlType="submit"
        block
      >
        {t('common.further')}
      </Button>
    </Form>
  );
};