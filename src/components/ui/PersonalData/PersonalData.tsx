import React from 'react';
import {Typography} from 'antd';
import './PersonalData.scss';

const {Text, Link} = Typography;

export const PersonalData = ({text}: {text: string}) => {
  return (
    <div className="as__personal-data">
      <Text>{text}, вы соглашаетесь с </Text>
      <Link href="#" target="_blank">условиями обработки персональных данных</Link>
      <Text> и </Text>
      <Link href="#" target="_blank">договора оферты</Link>
    </div>
  );
};