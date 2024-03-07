import React from 'react';

const Header = ({ username, onLogout }) => {
  return (
    <div className="container">
      <div className="page__header">
        <p className="page__header-sayhi">Здравствуйте, {username}!</p>
        <button className="page__header-exit" onClick={onLogout}>
          Выйти
        </button>
      </div>
    </div>
  );
};

export default Header;
