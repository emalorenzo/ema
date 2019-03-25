import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ThemeContext, { ThemeProvider } from './ThemeProvider';
import Root from './Root';

const App = () => (
  <ThemeProvider>
    <ThemeContext.Consumer>
      {({ theme }) => (
        <MuiThemeProvider theme={theme}>
          <Root />
        </MuiThemeProvider>
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
);

export default App;
