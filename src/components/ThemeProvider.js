import React, { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

export const themes = {
  dark: createMuiTheme({
    name: 'dark',
    palette: {
      type: 'dark',
    },
    typography: {
      fontFamily: '"Product Sans", serif',
      useNextVariants: true,
    },
    rootBackground: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
    cardBackground: 'linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)',
  }),
  light: createMuiTheme({
    name: 'light',
    palette: {
      type: 'light',
    },
    typography: {
      fontFamily: '"Product Sans", serif',
      useNextVariants: true,
    },
    rootBackground: 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)',
    cardBackground: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
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
