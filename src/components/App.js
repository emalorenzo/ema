import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Card from './Card';
import ThemeContext, { ThemeProvider } from './ThemeProvider';
import ThemeSwitchButton from './ThemeSwitchButton';

const App = () => (
  <ThemeProvider>
    <ThemeContext.Consumer>
      {({ theme }) => (
        <MuiThemeProvider theme={theme}>
          <Card />
          <ThemeSwitchButton />
        </MuiThemeProvider>
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
);

export default App;
