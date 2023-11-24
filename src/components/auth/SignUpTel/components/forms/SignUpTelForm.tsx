import React from 'react';
import {Button, Flex, Form, Input, Select} from 'antd';
import {REG_EXP} from '../../../../../configs/regExp.config';

export const SignUpTelForm = ({onSetStep}: { onSetStep: (step: number) => void }) => {
  const handleSend = (values: any) => {
    onSetStep(2);
    console.log('Success:', values);
  };

  return (
    <Form layout="vertical" autoComplete="off" onFinish={handleSend} requiredMark={false}>
      <Form.Item
        label="Как Вас зовут"
        name="username"
        rules={[{required: true, message: 'Введите имя'}]}
      >
        <Input size="large" placeholder="Введите имя"/>
      </Form.Item>
      <Form.Item
        label="Введите Ваш телефон"
        name="tel"
        rules={[{required: true, message: 'Введите номер телефона'}]}
        getValueFromEvent={
          ({target}: React.ChangeEvent<HTMLInputElement>) => target.value.replace(REG_EXP.number, '')
        }
      >
        <Flex gap={10}>
          <Select
            defaultValue="+7"
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