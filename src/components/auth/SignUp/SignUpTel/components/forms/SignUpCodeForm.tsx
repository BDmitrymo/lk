import React, { useState } from 'react'
import { Flex, Form, Input, Spin, Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import Paragraph from 'antd/es/typography/Paragraph'
import { REG_EXP } from '../../../../../../configs/regExp.config'
import { PersonalData } from '../../../../../ui/PersonalData/PersonalData'

const { Text } = Typography

export const SignUpCodeForm = () => {
  const [loading, setLoad] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const handlerCode = ({ target }: any) => {
    if (target.value.length === 4) {
      setLoad(true)
      setDisabled(true)
    }
  }

  return (
    <div className="as__auth_form-code">
      <Paragraph>
        <Flex align="center" vertical>
          <Title level={3}>Введите код</Title>
          <Text type="secondary">
            Отправили код для подтферждения на номер #НОМЕР
          </Text>
        </Flex>
      </Paragraph>
      <Spin spinning={loading} delay={500}>
        <Form layout="vertical" autoComplete="off">
          <Form.Item
            name="code"
            getValueFromEvent={({
              target,
            }: React.ChangeEvent<HTMLInputElement>) =>
              target.value.replace(REG_EXP.number, '')
            }
          >
            <Input
              disabled={disabled}
              size="large"
              placeholder="Код"
              style={{ textAlign: 'center' }}
              onChange={handlerCode}
            />
          </Form.Item>
        </Form>
      </Spin>
      <PersonalData text="Подтверждая номер" />
    </div>
  )
}
