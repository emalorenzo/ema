import React, { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

const themes = {
  dark: createMuiTheme({
    name: 'dark',
    palette: {
      type: 'dark',
    },
    typography: {
      useNextVariants: true,
    },
  }),
  light: createMuiTheme({
    name: 'light',
    palette: {
      type: 'light',
    },
    typography: {
      useNextVariants: true,
    },
  }),
};

const ThemeContext = React.createContext(themes.dark);

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.dark);
  function switchTheme() {
    setTheme(theme.name === 'dark' ? themes.light : themes.dark);
  }
  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={() => setTheme(switchTheme)} type="button">
        Change
      </button>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
