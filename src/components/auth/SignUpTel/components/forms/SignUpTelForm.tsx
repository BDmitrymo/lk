import React from 'react';
import {Button, Flex, Form, Input, Select} from 'antd';

export const SignUpTelForm = () => {
  const handleSend = (values: any) => {
    console.log('Success:', values);
  };

  const handlerChangeCodeTel = () => {

  };

  return (
    <Form layout="vertical" autoComplete="off" onFinish={handleSend} requiredMark={false}>
      <Form.Item
        className="as__auth_form-item"
        label="Как Вас зовут"
        name="username"
        rules={[{required: true, message: 'Введите имя'}]}
      >
        <Input size="large" placeholder="Введите имя"/>
      </Form.Item>
      <Form.Item
        label="Введите Ваш телефон"
        className="as__auth_form-item"
        name="phone"
        rules={[{required: true, message: 'Введите номер телефона'}]}
      >
        <Flex gap={10}>
          <Select
            defaultValue="+7"
            onChange={handlerChangeCodeTel}
            options={[
              {value: '+7', label: '+7'},
              {value: '+375', label: '+375'},
              {value: '+374', label: '+374'}
            ]}
            size="large"
            style={{width: 100}}
          />
          <Input size="large" placeholder="Телефон"/>
        </Flex>
      </Form.Item>
      <Button size="large" type="primary" htmlType="submit" block>
        Получить код
      </Button>
    </Form>
  );
};