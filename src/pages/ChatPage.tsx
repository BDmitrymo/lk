import {Flex} from 'antd'
import React from 'react'

export const ChatPage = () => {
  return (
    <div className="as__chat-page">
      <Flex align="center" vertical style={{fontSize: '20px'}}>
        <i className="fa-solid fa-message" />
        Чат
      </Flex>
    </div>
  )
}
