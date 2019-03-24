import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import ThemeContext from './ThemeProvider';

const ThemeSwitchButton = () => {
  const { switchTheme } = useContext(ThemeContext);
  return (
    <IconButton onClick={switchTheme}>
      <Icon>invert_colors</Icon>
    </IconButton>
  );
};

export default ThemeSwitchButton;
