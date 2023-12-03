import {Debug} from '@/components/Debug/Debug'
import {LIGHT_THEME} from '@/theme'
import {ConfigProvider} from 'antd'

import {initI18n} from 'modules/i18n/i18n'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import './App.scss'
import {Router} from './components/Router'

export default function App() {
  initI18n('ru')

  return (
    <ConfigProvider theme={LIGHT_THEME}>
      <BrowserRouter>
        <div className="App">
          <Debug />
          <Router />
        </div>
      </BrowserRouter>
    </ConfigProvider>
  )
}
