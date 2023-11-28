import {Debug} from '@/components/Debug'
import {ConfigProvider} from 'antd'
import {THEME_LIGHT} from 'configs/themeLight.config'
import {initI18n} from 'modules/i18n/i18n'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import './App.scss'
import {Router} from './components/Router'

export default function App() {
  initI18n('ru')

  return (
    <ConfigProvider theme={THEME_LIGHT}>
      <BrowserRouter basename="">
        <div className="App">
          <Debug />
          <Router />
        </div>
      </BrowserRouter>
    </ConfigProvider>
  )
}
