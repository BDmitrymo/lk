import { ConfigProvider, Flex, Radio } from 'antd'
import { THEME_LIGHT } from 'configs/themeLight.config'
import { initI18n } from 'modules/i18n/i18n'
import { AdminPage } from 'pages/AdminPage'
import { SignInPage } from 'pages/SignInPage'
import { SignUpPage } from 'pages/SignUpPage'
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.scss'

export default function App() {
  initI18n('ru') // todo

  return (
    <ConfigProvider theme={THEME_LIGHT}> {/*// todo*/}
      <div className="App">
        <Flex className="as__route"> {/*// todo*/}
          <Radio.Group size="small">
            <Radio.Button value="large">
              <Link to={'/signin'}>Авторизация</Link>
            </Radio.Button>
            <Radio.Button value="default">
              {' '}
              <Link to={'/signup'}>Регистрация</Link>
            </Radio.Button>
            <Radio.Button value="small">
              {' '}
              <Link to={'/admin'}>Админ</Link>
            </Radio.Button>
          </Radio.Group>
        </Flex>
        <Routes>
          {/*<Route path="/" element={<SignUpPage/>}></Route>*/}
          <Route path="/" element={<AdminPage />}></Route> {/*// todo*/}
          <Route path="/signin" element={<SignInPage />}></Route>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/admin" element={<AdminPage />}></Route>
        </Routes>
      </div>
    </ConfigProvider>
  )
}
