import React from 'react';
import {Select} from 'antd';
import {useTranslation} from 'react-i18next';
import './SwitchLang.scss';

export const SwitchLang = ({lang = 'ru'}:{lang?: string}) => {
  const {i18n} = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Select
      className="as__switch-lang"
      defaultValue={lang}
      onChange={changeLanguage}
      options={[
        {value: 'ru', label: 'ru'},
        {value: 'en', label: 'en'}
      ]}
    />
  );
};