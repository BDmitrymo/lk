import React from 'react';
import {Button, Form, Input} from 'antd';
import {useTranslation} from 'react-i18next';
import {PersonalData} from '../../ui/PersonalData/PersonalData';

export const SignUpDefaultForm = ({onSetStep}: { onSetStep: (step: string) => void }) => {
  const {t} = useTranslation();

  const handleSend = (values: any) => {
    console.log('Success:', values);
    onSetStep('step2')
  };

  //Подтверждая номер,

  return (
    <Form layout="vertical" autoComplete="off" onFinish={handleSend}>
      <Form.Item
        className="as__auth_form-item"
        label="Как Вас зовут"
        name="username"
        rules={[{required: true, message: 'Please input your username!'}]}
      >
        <Input size="large" placeholder="Введите имя"/>
      </Form.Item>
      <Form.Item
        className="as__auth_form-item"
        label="Введите Ваш email"
        name="email"
        rules={[{required: true, type: 'email', message: 'Please input your password!'}]}
      >
        <Input size="large" placeholder="Email"/>
      </Form.Item>
      <Button size="large" type="primary" htmlType="submit" block>
        {t('common.further')}
      </Button>
    </Form>
  );
};