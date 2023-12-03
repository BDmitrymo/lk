import {Switch} from 'antd'
import React, {useEffect, useState} from 'react'
import './SwitchTheme.scss'

export const SwitchTheme = () => {
  const [theme, setTheme] = useState<string | null>(null)

  useEffect(() => {
    const localTheme: string | null = localStorage.getItem('theme')
    setTheme(localTheme ? localTheme : 'LIGHT_THEME')
  }, [theme])

  const handleChange = () => {
    const newTheme = theme === 'LIGHT_THEME' ? 'DARK_THEME' : 'LIGHT_THEME'
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  return (
    <Switch
      checked={theme === 'LIGHT_THEME'}
      onChange={handleChange}
      checkedChildren={<i className="fa-solid fa-sun" />}
      unCheckedChildren={<i className="fa-solid fa-moon" />}
    />
  )
}
