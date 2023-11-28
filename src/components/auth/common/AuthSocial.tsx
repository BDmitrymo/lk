import React from 'react'
import {Button, Flex} from 'antd'

export const AuthSocial = () => {
  return (
    <Flex className="as__auth_social" style={{width: '100%'}}>
      <Button
        size="large"
        icon={<i className="fa-brands fa-yandex" style={{color: '#fc3f1d'}} />}
        block
      >
        Войти через Яндекс
      </Button>
    </Flex>
  )
}
