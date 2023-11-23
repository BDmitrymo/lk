import React, {useState} from 'react';
import {Button, Form, Input, Spin} from 'antd';
import {PersonalData} from '../../../../ui/PersonalData/PersonalData';

export const SignUpPasswordForm = () => {
  const [loading, setLoad] = useState(false)
  const handleSend = (values: any) => {
    setLoad(true)
    console.log('Success:', values);
  };

  return (
    <Spin spinning={loading} delay={500}>
    <Form layout="vertical" autoComplete="off" requiredMark={false} onFinish={handleSend}>
      <Form.Item
        className="as__auth_form-item"
        label="Задайте пароль"
        name="password"
        rules={[{required: true, message: 'Введите пароль'}]}
      >
        <Input.Password size="large" placeholder="Введите пароль"/>
      </Form.Item>
      <Form.Item
        className="as__auth_form-item"
        label="Повторите пароль"
        name="repeatPassword"
        rules={[{required: true, message: 'Введите пароль'}]}
      >
        <Input.Password size="large" placeholder="Повторите пароль"/>
      </Form.Item>
      <PersonalData text="Нажимая кнопку 'Завершить регистрацию'"/>
      <Button size="large" type="primary" htmlType="submit" block>
        Завершить регистрацию
      </Button>
    </Form>
    </Spin>
  );
};