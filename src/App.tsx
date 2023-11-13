import React from 'react';
import {ConfigProvider} from 'antd';
import {THEME_LIGHT} from './configs/theme-light.config';
import {Route, Routes} from 'react-router-dom';
import {SignIn} from './pages/SignIn/SignIn';
import {SignUp} from './pages/SignUp/SignUp';
import './App.scss';

function App() {
  return (
    <ConfigProvider theme={{token: THEME_LIGHT}}>
      <div className="App">
        {/*<div>*/}
        {/*  <Link to="/login">Войти</Link>*/}
        {/*  <Link to="/signup">Регистрация</Link>*/}
        {/*</div>*/}
        <Routes>
          <Route path="/" element={<SignUp/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
