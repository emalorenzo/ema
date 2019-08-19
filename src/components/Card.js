import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import amber from '@material-ui/core/colors/amber';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import EmaFormal from '../images/ema_formal.jpg';
import ReactIcon from '../images/reactIcon.png';
import ReduxIcon from '../images/redux.png';
import ReduxSagaIcon from '../images/redux_saga.png';
import AndroidIcon from '../images/android.png';

const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    objectFit: "cover",
    borderRadius: '50%',
  },
  card: {
    width: props => props.isDesktop ? '50vw' : '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    overflow: 'hidden',
    borderRadius: theme.spacing(2),
    background: theme.cardBackground,
    padding: props => props.isDesktop ? theme.spacing(8) : theme.spacing(4),
  },
  namesContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: `0 ${theme.spacing(2)}px`,
  },
  knowMoreButton: {
    alignSelf: 'flex-end',
    marginTop: theme.spacing(2),
  },
  availability: {
    backgroundColor: props => props.color,
  },
  techIcon: {
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    backgroundColor: 'rgba(226,209,195, 0.2)',
  }
}));

const Card = () => {
  const isDesktop = useMediaQuery('(min-width:800px)');
  const styles = useStyles({ color: amber[500], isDesktop });
  return (
    <Paper elevation={2} className={styles.card}>
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignSelf="stretch" flexWrap="wrap">
        <Box display="flex" flexDirection="row" alignItems="center" pb={1}> 
          <div>
            <img alt="Ema Lorenzo" src={EmaFormal} className={styles.avatar} />
          </div>
          <div className={styles.namesContainer}>
            <Typography variant="h5">
              Emanuel Lorenzo
            </Typography>
            <Typography variant="overline">
              Senior Mobile Engineer
            </Typography>
          </div>
        </Box>
        <Box display="flex" alignSelf="flex-start" flexDirection="column" alignItems="flex-end">
          <Box display="flex" flexDirection="row" alignItems="center">
            <Badge variant="dot" classes={{ badge: styles.availability }} />
            <Typography variant="subtitle2">
              <Box ml={1} fontSize={11}>
                Available for part-time
              </Box>
            </Typography>
          </Box>
          <Typography variant="subtitle1">
            <Box ml={1} fontSize={11}>
              Buenos Aires, Argentina
            </Box>
          </Typography>
        </Box>
      </Box>
      <Box pt={1}>
        <Typography variant="body1">
         I am a versatile software engineer with large experience working with mobile technologies. My career started with native Android, then went to web with React and now I am merging the best of both with React Native. I have experience leading teams, and am always looking for create a great business culture.
        </Typography>
      </Box>
      <Button variant="outlined" className={styles.knowMoreButton}>
        Know more
        <ChevronRightIcon />
      </Button>
      <Box display="flex" flexDirection="row" mt={{ xs: 2, md: 0 }}>
        <Avatar alt="Ema Lorenzo" src={ReactIcon} className={styles.techIcon} />
        <Avatar alt="Ema Lorenzo" src={ReduxIcon} className={styles.techIcon} />
        <Avatar alt="Ema Lorenzo" src={ReduxSagaIcon} className={styles.techIcon} />
        <Avatar alt="Ema Lorenzo" src={AndroidIcon} className={styles.techIcon} />
      </Box>
    </Paper>
  );
};

export default Card;
