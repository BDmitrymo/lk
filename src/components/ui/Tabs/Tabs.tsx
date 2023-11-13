import React from 'react';
import {Tabs, TabsProps} from 'antd';
import './Tabs.scss';

export const TabsSign = ({items}: { items: TabsProps['items'] }) => {
  return (
    <Tabs defaultActiveKey="1" items={items}/>
  );
};