import React, {ReactNode, useEffect, useState} from 'react';
import {Segmented} from 'antd';
import './TabsAuth.scss';

export interface ITabsItems {
  value: string;
  children: ReactNode;
}

interface ITabsAuth {
  defaultActiveKeyTab: string;
  items: any
}

export const TabsAuth = ({defaultActiveKeyTab, items}: ITabsAuth) => {
  const [activeTab, setActiveTab] = useState<ITabsItems>();
  const [options, setOptions] = useState([])

  useEffect(() => {
    setOptions(items.map((item: any) => item.value))
    setActiveTab(items.filter((i:any) => i.value === defaultActiveKeyTab)[0])
  }, []);

  const handlerChangeActiveTab = (value: any) => {
    setActiveTab(items.filter((i:any) => i.value === value)[0])
  }

  return (
    <div className="as__auth_tabs">
      <div className="as__auth_tabs-nav">
        <div className="as__auth_tabs-nav-wrap">
          {options && <Segmented size="large" options={options} value={activeTab?.value} onChange={handlerChangeActiveTab}/>}
        </div>
      </div>
      <div className="as__auth_tabs-content">
        {activeTab?.children}
      </div>
    </div>
  );
};