import React from 'react';

function Header({ logo, onToggleTheme, theme }) {
  return (
    <header className="header">
      <div className="logoPart">
        <img className="logoImg" src={logo} alt="logo image" />
        <h2>Daily`s</h2>
      </div>
      <button className="themeButton" onClick={onToggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

export default Header;
