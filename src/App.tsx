import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ConfigProvider} from 'antd';
import {THEME_LIGHT} from './configs/theme-light.config';
import {SignIn, SignUp} from './pages/Auth/Auth';
import {initI18n} from './modules/i18n/i18n';
import './App.scss';

export default function App() {
  initI18n('ru');

  return (
    <ConfigProvider theme={{token: THEME_LIGHT}}>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignUp/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
      </div>
    </ConfigProvider>
  );
}