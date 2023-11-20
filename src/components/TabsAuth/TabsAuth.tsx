import React, {ReactNode, useEffect, useState} from 'react';
import {Segmented} from 'antd';
import './TabsAuth.scss';

export interface ITabsItem {
  value: string;
  children: ReactNode;
}

interface ITabsAuth {
  defaultActiveTab: string;
  items: ITabsItem[];
}

type TSegmented = string | number

export const TabsAuth = ({defaultActiveTab, items}: ITabsAuth) => {
  const [activeTab, setActiveTab] = useState<ITabsItem>();
  const [options, setOptions] = useState<string[]>([]);

  const findTab = (value: TSegmented) => {
    return items.find(i => i.value === value);
  }

  useEffect(() => {
    const tab = findTab(defaultActiveTab);

    setOptions(items.map(item => item.value));

    if (tab) {
      setActiveTab(tab);
    }
  }, []);

  const handlerChangeActiveTab = (value: TSegmented) => {
    const tab = findTab(value)

    if (tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className="as__auth_tabs">
      <div className="as__auth_tabs-nav">
        <div className="as__auth_tabs-nav-wrap">
          <Segmented size="large" options={options} value={activeTab?.value} onChange={handlerChangeActiveTab}/>
        </div>
      </div>
      <div className="as__auth_tabs-content">
        {activeTab?.children}
      </div>
    </div>
  );
};
