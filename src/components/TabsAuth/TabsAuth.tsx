import React, {ReactNode, useEffect, useState} from 'react';
import {Button, Segmented, Space} from 'antd';
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
    const tab = items.filter((i:any) => i.value === defaultActiveKeyTab)[0];
    setOptions(items.map((item: any) => item.value))

    console.log(tab)

    setActiveTab(tab)
  }, []);

  const handlerChangeActiveTab = (value: any) => {
    const tab = items.filter((i:any) => i.value === value)[0];
    setActiveTab(tab)
  }

  return (
    <div className="as__auth_tabs">
      <div className="as__auth_tabs-nav">
        <div className="as__auth_tabs-nav-wrap space-align-block">
          {options && <Segmented options={options} value={activeTab?.value} onChange={handlerChangeActiveTab}/>}
        </div>
      </div>
      <div className="as__auth_tabs-content">
        {activeTab?.children}
      </div>
    </div>
  );
};