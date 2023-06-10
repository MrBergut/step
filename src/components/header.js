import './styles/header.css';
import HeaderButton from './HeaderButton.js';
import Search from './input.js';
import Login from './Login.jsx';
import { useState } from 'react';

export default function Header({logo}) {
    const [loginActive, setLoginActive] = useState(false)
    return (
        <header>
          <Login active={loginActive} setActive={setLoginActive}/>
          <div id='logowithbuttons'>
            <img src={logo} className='App-logo' alt='logo' />
            <div className='App-header-links'>
              <a href='./index.html'>Каталог</a>
              <a href='./index.html'>Преподавание</a>
            </div>
          </div>
          <div id='centersearch'>
            <Search placeholder='поиск'></Search>
          </div>
          <div className='App-header-buttons'>
            <HeaderButton onClick={() => setLoginActive(true)}>Войти</HeaderButton>
            <HeaderButton>Регистрация</HeaderButton>
          </div>
        </header>
    );
}