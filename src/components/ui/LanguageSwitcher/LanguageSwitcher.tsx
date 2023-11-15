import React from 'react';
import {Select} from 'antd';
import {useTranslation} from 'react-i18next';
import './LanguageSwitcher.scss';

export const LanguageSwitcher = ({lang = 'ru'}:{lang?: string}) => {
  const {i18n} = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Select
      defaultValue={lang}
      onChange={changeLanguage}
      options={[
        {value: 'ru', label: 'ru'},
        {value: 'en', label: 'en'}
      ]}
    />
  );
};