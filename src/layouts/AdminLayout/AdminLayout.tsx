import React from 'react';
import {MenuAdmin} from '../../components/admin/MenuAdmin/MenuAdmin';
import {HeaderAdmin} from '../../components/admin/HeaderAdmin/HeaderAdmin';
import './AdminLayout.scss';

export const AdminLayout = ({children}: any) => {
  return (
    <div className="as__admin-layout">
      <HeaderAdmin/>
      <MenuAdmin/>
      <div className="as__admin-layout_body">
        <div className="as__admin-layout_container">
          {children ? children : 'Отсутствует'}
        </div>
      </div>
    </div>
  );
};
