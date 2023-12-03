import {Flex, Radio} from 'antd'
import React from 'react'
import {Link} from 'react-router-dom'
import './Debug.scss'

export const Debug = () => {
  return (
    <Flex className="as__debug">
      <Radio.Group size="small">
        <Radio.Button value="large">
          <Link to={'/signin'}>Авторизация</Link>
        </Radio.Button>
        <Radio.Button value="default">
          <Link to={'/signup'}>Регистрация</Link>
        </Radio.Button>
        <Radio.Button value="small">
          <Link to={'/admin'}>Админ</Link>
        </Radio.Button>
      </Radio.Group>
    </Flex>
  )
}
