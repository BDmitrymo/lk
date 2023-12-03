import {Typography} from 'antd'
import React from 'react'
import './PersonalData.scss'

const {Text, Link} = Typography

export const PersonalData = ({text}: {text: string}) => {
  return (
    <div className="as__personal-data">
      <Text type="secondary">{text}, вы соглашаетесь с </Text>
      <Link href="src/components/LeftPanelAdmin/PersonalData#" target="_blank">
        условиями обработки персональных данных
      </Link>
      <Text type="secondary"> и </Text>
      <Link href="src/components/LeftPanelAdmin/PersonalData#" target="_blank">
        договора оферты
      </Link>
    </div>
  )
}
