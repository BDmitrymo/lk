import {Debug} from '@/components/Debug/Debug'
import {AppRoutes} from '@/components/AppRoutes/AppRoutes'
import {LIGHT_THEME} from '@/theme'
import {ConfigProvider} from 'antd'

import {initI18n} from 'modules/i18n/i18n'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import './App.scss'
import {Provider} from 'react-redux'
import {store} from '@/store'

export default function App() {
  initI18n('ru')

  return (
    <ConfigProvider theme={LIGHT_THEME}>
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <Debug />
            <AppRoutes />
          </div>
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  )
}
