import {REG_EXP} from '@/configs/regExp'
import {Button, Flex, Form, Input, Select} from 'antd'
import React from 'react'

export const SignInTelForm: React.FC = () => {
  return (
    <Form layout="vertical" autoComplete="off" requiredMark={false}>
      <Form.Item
        label="Телефон"
        name="tel"
        rules={[{required: true, message: 'Введите номер телефона'}]}
        getValueFromEvent={({target}: React.ChangeEvent<HTMLInputElement>) =>
          target.value.replace(REG_EXP.number, '')
        }
      >
        <Flex gap={10}>
          <Select
            defaultValue="+7"
            options={[
              {value: '+7', label: '+7'},
              {value: '+375', label: '+375'},
              {value: '+374', label: '+374'},
            ]}
            size="large"
            style={{width: 100}}
          />
          <Input size="large" placeholder="Телефон" />
        </Flex>
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{required: true, message: 'Введите пароль'}]}
      >
        <Input.Password size="large" placeholder="Введите пароль" />
      </Form.Item>
      <Button size="large" type="primary" htmlType="submit" block>
        Войти
      </Button>
    </Form>
  )
}
