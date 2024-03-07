import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (
      (username === 'admin' && password === 'admin') ||
      (username === 'gee' && password === '123456')
    ) {
      onLogin(username);
    } else {
      alert('Неправильный логин или пароль');
    }
  };

  return (
    <div className="container">
      <div className="login">
        <h1 className="login__title">Вход в систему</h1>
        <div className="login__wrapper">
          <label className="login__name">
            Логин:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <label className="login__pass">
            Пароль:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
        </div>
        <button className="login__btn" onClick={handleLogin}>
          Войти
        </button>
      </div>
      <p>логин admin пароль admin</p>
      <p>логин gee пароль 123456</p>
    </div>
  );
}

export default Login;
