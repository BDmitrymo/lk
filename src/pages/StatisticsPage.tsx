import {Flex} from 'antd'
import React from 'react'

export const StatisticsPage = () => {
  return (
    <div className="as__statistics-page">
      <Flex align="center" vertical style={{fontSize: '20px'}}>
        <i className="fa-solid fa-chart-pie" />
        Статистика
      </Flex>
    </div>
  )
}
