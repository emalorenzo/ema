import React, { useContext } from 'react';
import ThemeContext, { themes } from './ThemeProvider';

const ThemeSwitchButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  function switchTheme() {
    setTheme(theme.name === 'dark' ? themes.light : themes.dark);
  }
  return (
    <button onClick={switchTheme} type="button">
      Change Theme
    </button>
  );
};

export default ThemeSwitchButton;
