import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faFacebook, } from '@fortawesome/free-brands-svg-icons';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import { themes } from './ThemeProvider';

const useStyles = makeStyles(theme => ({
  footer: {
    width: '100%',
    display: 'flex',
    flexDirection: props => props.isDesktop ? 'row' : 'column',
    justifyContent: props => props.isDesktop ? 'space-between' : 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
  },
}));

const Footer = () => {
  const isDesktop = useMediaQuery('(min-width:800px)');
  const styles = useStyles({ isDesktop });
  const { dark } = themes;
  return (
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
  )
}

export default Footer;
