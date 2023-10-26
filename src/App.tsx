import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {SignIn} from './pages/SignIn/SignIn';
import {SignUp} from './pages/SignUp/SignUp';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/login">Войти</Link>
        <Link to="/signup">Регистрация</Link>
      </div>
      <Routes>
        <Route path="/" element={<SignIn/>}></Route>
        <Route path="/login" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
