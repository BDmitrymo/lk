import React from 'react';
import {ConfigProvider} from 'antd';
import {THEME_LIGHT} from './configs/themeLight.config';
import {Route, Routes} from 'react-router-dom';
import {initI18n} from './modules/i18n/i18n';
import {SignUpPage} from './pages/SignUpPage';
import {SignIn} from './pages/SignIn';
import './App.scss';

export default function App() {
  initI18n('ru');

  return (
    <ConfigProvider theme={THEME_LIGHT}>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignUpPage/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUpPage/>}></Route>
        </Routes>
      </div>
    </ConfigProvider>
  );
}