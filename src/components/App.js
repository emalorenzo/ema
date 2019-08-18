import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeContext, { ThemeProvider } from './ThemeProvider';
import Root from './Root';

const App = () => (
  <ThemeProvider>
    <ThemeContext.Consumer>
      {({ theme }) => (
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Root />
        </MuiThemeProvider>
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
);

export default App;
