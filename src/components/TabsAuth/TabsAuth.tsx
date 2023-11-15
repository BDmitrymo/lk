import React, {ReactNode, useEffect, useState} from 'react';
import {Button} from 'antd';
import './TabsAuth.scss';

export interface ITabsItems {
  key: number;
  label: string;
  children: ReactNode;
}

interface ITabsAuth {
  defaultActiveKeyTab: number;
  items: ITabsItems[];
}

export const TabsAuth = ({defaultActiveKeyTab, items}: ITabsAuth) => {
  const [activeTab, setActiveTab] = useState<ITabsItems>();

  const handlerActiveTab = (id: number) => {
    const tab = items.filter(i => i.key === id)[0];

    setActiveTab(tab);
  };

  useEffect(() => {
    const tab = items.filter(i => i.key === defaultActiveKeyTab)[0];
    setActiveTab(tab);
  }, []);

  const ButtonNav = ({id, title}: { id: number, title?: string }) => {
    return (
      <Button
        key={id}
        type="primary"
        shape="circle"
        onClick={() => handlerActiveTab(id)}
      >
        {title}
      </Button>
    );
  };

  return (
    <div className="as__auth_tabs">
      <div className="as__auth_tabs-nav">
        {items?.map(i => <ButtonNav key={i.key} id={i.key} title={i.label}/>)}
      </div>
      <div className="as__auth_tabs-content">
        {activeTab?.children}
      </div>
    </div>
  );
};