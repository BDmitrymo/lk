import enImg from '@/assets/img/locale/en.png'
import ruImg from '@/assets/img/locale/ru.png'
import {Flex, Select} from 'antd'
import React from 'react'
import {useTranslation} from 'react-i18next'

interface ILang {
  name: string
  img: string
}

const langArr: ILang[] = [
  {
    name: 'ru',
    img: ruImg,
  },
  {
    name: 'en',
    img: enImg,
  },
]

export const SwitchLang = ({lang = 'ru'}: {lang?: string}) => {
  const {i18n} = useTranslation()

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <Select
      className="as__switch-lang"
      defaultValue={lang}
      onChange={changeLanguage}
      bordered={false}
      suffixIcon={null}
    >
      {langArr.map((i) => (
        <Select.Option key={i.name} className="as__switch-lang_option" value={i.name}>
          <Flex justify="center">
            <img src={i.img} alt={i.name} />
          </Flex>
        </Select.Option>
      ))}
    </Select>
  )
}
