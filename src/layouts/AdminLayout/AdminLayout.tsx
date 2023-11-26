import React from 'react';
import './AdminLayout.scss'
import {MenuAdmin} from '../../components/admin/MenuAdmin/MenuAdmin';
import {HeaderAdmin} from '../../components/admin/HeaderAdmin/HeaderAdmin';

export const AdminLayout = ({children}:any) => {
  return (
    <div className="as__admin-layout">
      <HeaderAdmin/>
      <MenuAdmin/>
      <div className="as__admin-layout_body">
        {children ? children : 'Отсутствует'}
      </div>
    </div>
  );
};
