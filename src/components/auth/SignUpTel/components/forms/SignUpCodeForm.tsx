import React from 'react';
import {Button, Col, Flex, Form, Input, Row, Select, Typography} from 'antd';
import {PersonalData} from '../../../../ui/PersonalData/PersonalData';
import Title from 'antd/es/typography/Title';


const {Text} = Typography;
export const SignUpCodeForm = () => {
  const handleSend = (values: any) => {
    console.log('Success:', values);
  };

  const handlerChangeCodeTel = () => {

  };

  return (
    <div className="as__auth_form-code">
      <Title level={3}>Введите код</Title>
      <Text type="secondary">Отправили код для подтферждения на номер #НОМЕР</Text>
      <Form layout="vertical" autoComplete="off" onFinish={handleSend} requiredMark={false}>
        <Form.Item className="as__auth_form-item" name="code">
          <Input size="large" placeholder="Введите имя"/>
        </Form.Item>
      </Form>
      <PersonalData text="Подтверждая номер"/>
    </div>

  );
};