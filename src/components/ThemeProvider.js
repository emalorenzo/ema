import React, { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

export const themes = {
  dark: createMuiTheme({
    name: 'dark',
    palette: {
      type: 'dark',
    },
    typography: {
      useNextVariants: true,
    },
    cardBackground: 'linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)',
  }),
  light: createMuiTheme({
    name: 'light',
    palette: {
      type: 'light',
    },
    typography: {
      useNextVariants: true,
    },
    cardBackground: 'white'
  }),
};

const ThemeContext = React.createContext(themes.dark);

export const ThemeProvider = (props) => {
  function switchTheme(theme, setTheme) {
    setTheme(theme.name === 'dark' ? themes.light : themes.dark);
  }
  const [theme, setTheme] = useState(themes.dark);
  const themeContext = {
    theme,
    switchTheme: () => switchTheme(theme, setTheme),
  };
  const { children } = props;
  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;