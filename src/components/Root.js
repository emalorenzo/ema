import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from './Card';
import Footer from './Footer';
import ThemeSwitchButton from './ThemeSwitchButton';
import Green from '../images/green.png';
import Orange from '../images/orange.png';
import Purple from '../images/purple.png';
import Violet from '../images/violet.png';

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
    backgroundSize: props => `
      25%,
      ${props.isDesktop ? '20%' : '50%'},
      20%,
      ${props.isDesktop ? 'auto 50%' : '80%'}`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: props => `
      25% 70%,
      -10% -10%,
      75% 25%,
      ${props.isDesktop ? '110% 150%' : '50% 130%'}
    `, 
  }
}));

const Root = () => {
  const isDesktop = useMediaQuery('(min-width:800px)');
  const styles = useStyles({ isDesktop });
  return (
    <div className={styles.container}>
      <Box alignSelf="flex-end" m={2}>
        <ThemeSwitchButton />
      </Box>
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        m={{ xs: 2, md: 0 }}
      >
        <Card />
      </Box>
      <Footer />
    </div>
  )
};

export default Root;
