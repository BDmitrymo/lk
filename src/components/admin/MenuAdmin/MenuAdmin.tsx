import React from 'react';
import {ReactComponent as Logo} from '../../../assets/img/logo.svg';
import './MenuAdmin.scss'
import {Button} from 'antd';


export const MenuAdmin = () => {
  return (
    <div className="as__admin-menu">
      <Logo className="as__logo"/>
      <div className="as__admin-menu_top">
        <button className="as__admin-menu_button">
          <i className="fa-solid fa-house"/>
        </button>
      </div>
    </div>
  );
};
