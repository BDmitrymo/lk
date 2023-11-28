import React from 'react'
import { Button, Form, Input } from 'antd'
import { useTranslation } from 'react-i18next'

export const SignUpMailForm = ({
  onSetStep,
}: {
  onSetStep: (step: number) => void
}) => {
  const { t } = useTranslation()

  const handleSend = (values: any) => {
    console.log('Success:', values)
    onSetStep(2)
  }

  return (
    <Form
      layout="vertical"
      autoComplete="off"
      requiredMark={false}
      onFinish={handleSend}
    >
      <Form.Item
        label="Как Вас зовут"
        name="username"
        rules={[{ required: true, message: 'Введите имя' }]}
      >
        <Input size="large" placeholder="Введите имя" />
      </Form.Item>
      <Form.Item
        label="Введите Вашу почту"
        name="email"
        rules={[{ required: true, type: 'email', message: 'Введите почту' }]}
      >
        <Input size="large" placeholder="Почта" />
      </Form.Item>
      <Button size="large" type="primary" htmlType="submit" block>
        {t('common.further')}
      </Button>
    </Form>
  )
}
