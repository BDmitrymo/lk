import React from 'react';
import {Flex} from 'antd';
import {ProfileUser} from '../../ui/ProfileUser/ProfileUser';
import {SwitchLang} from '../../ui/SwitchLang/SwitchLang';
import './HeaderAdmin.scss';

export const HeaderAdmin = () => {
  return (
    <Flex className="as__admin-header" style={{height: '100%'}} justify="flex-end" align="center">
      <SwitchLang/>
      <ProfileUser/>
    </Flex>
  );
};
