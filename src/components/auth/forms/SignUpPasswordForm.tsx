import React, {useState} from 'react'
import {Button, Form, Input, Spin} from 'antd'
import {PersonalData} from '../../auth/common/PersonalData/PersonalData'

export const SignUpPasswordForm = () => {
  const [loading, setLoad] = useState(false)
  const handleSend = (values: any) => {
    setLoad(true)
    console.log('Success:', values)
  }

  return (
    <Spin spinning={loading} delay={500}>
      <Form layout="vertical" autoComplete="off" requiredMark={false} onFinish={handleSend}>
        <Form.Item
          label="Задайте пароль"
          name="password"
          rules={[{required: true, message: 'Введите пароль'}]}
        >
          <Input.Password size="large" placeholder="Введите пароль" />
        </Form.Item>
        <Form.Item
          label="Повторите пароль"
          name="repeatPassword"
          dependencies={['password']}
          rules={[
            {required: true},
            ({getFieldValue}) => ({
              validator(_, value) {
                if (getFieldValue('password') !== value) {
                  return Promise.reject(new Error('Не совпадает пароли'))
                }

                if (value.length < 8) {
                  return Promise.reject(new Error('Длина должна от 8'))
                }

                return Promise.resolve()
              },
            }),
          ]}
        >
          <Input.Password size="large" placeholder="Повторите пароль" />
        </Form.Item>
        <PersonalData text="Нажимая кнопку 'Завершить регистрацию'" />
        <Button size="large" type="primary" htmlType="submit" block>
          Завершить регистрацию
        </Button>
      </Form>
    </Spin>
  )
}
