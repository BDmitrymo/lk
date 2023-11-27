import React from 'react';
import {ProfileUser} from '../../ui/ProfileUser/ProfileUser';
import {Flex} from 'antd';
import './HeaderAdmin.scss';

export const HeaderAdmin = () => {
  return (
    <Flex className="as__admin-header" style={{height: '100%'}} justify="flex-end" align="center">
      <ProfileUser/>
    </Flex>
  );
};
