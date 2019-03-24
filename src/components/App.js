import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Card from './Card';
import ThemeContext, { ThemeProvider } from './ThemeProvider';

const App = () => (
  <ThemeProvider>
    <ThemeContext.Consumer>
      {currentTheme => (
        <MuiThemeProvider theme={currentTheme}>
          <Card />
        </MuiThemeProvider>
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
);

export default App;
