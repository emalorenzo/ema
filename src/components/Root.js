import React, { useContext } from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faFacebook, } from '@fortawesome/free-brands-svg-icons';
import { ThemeProvider } from '@material-ui/styles';

import Card from './Card';
import ThemeSwitchButton from './ThemeSwitchButton';
import { themes } from './ThemeProvider';
import Green from '../images/green.png';
import Orange from '../images/orange.png';
import Purple from '../images/purple.png';
import Violet from '../images/violet.png';

const SwitchButtonContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
`

const useStyles = makeStyles(theme => ({
  footer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
  },
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.rootBackground.background,
    backgroundImage: `
      url(${Green}),
      url(${Orange}),
      url(${Purple}),
      url(${Violet})`,
    backgroundSize: '25%, 20%, 20%, 30%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: `
      25% 70%,
      -10% -10%,
      75% 25%,
      110% 180%
    `, 
  }
}));

const Root = () => {
  const styles = useStyles();
  const { dark } = themes;
  return (
    <div className={styles.container}>
      <Box flex={1} display="flex" alignItems="center">
        <Card />
      </Box>
      <div className={styles.footer}>
        <Box>
          <Typography variant="caption">
            Check the source code of this page
          </Typography>
          <IconButton target="_blank" href="https://github.com/emaLorenzo/ema">
            <FontAwesomeIcon icon={faGithub} />
          </IconButton>
        </Box>
        <ThemeProvider theme={dark}>
          <Box display="flex" flexDirection="row">
            <IconButton target="_blank" href="https://github.com/emaLorenzo">
              <FontAwesomeIcon icon={faGithub} />
            </IconButton>
            <IconButton target="_blank" href="https://www.linkedin.com/in/emanuellorenzo">
              <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
            <IconButton target="_blank" href="http://instagram.com/aemalorenzo">
              <FontAwesomeIcon icon={faInstagram} />
            </IconButton>
            <IconButton target="_blank" href="https://www.facebook.com/aemalorenzo">
              <FontAwesomeIcon icon={faFacebook} />
            </IconButton>
          </Box>
        </ThemeProvider>
      </div>
      <SwitchButtonContainer>
        <ThemeSwitchButton />
      </SwitchButtonContainer>
    </div>
  )
};

export default Root;
