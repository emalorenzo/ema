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
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
