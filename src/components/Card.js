import React, { useContext } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Typography from '@material-ui/core/Typography';
import EmaLooking from '../images/ema_looking.png';
import SocialIcons from './SocialIcons';
import ThemeContext from './ThemeProvider';

const CardContainer = styled(animated.div)`
  width: 100ch;
  height: 60ch;
  border-radius: 20px;
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;
const BackgroundImage = styled.img`
  height: 100%;
  align-self: flex-start;
  object-fit: fill;
`
const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 50px;
`
const SocialIconsContainer = styled.div`
  flex: 0;
  align-self: flex-end;
  padding: 20px;
`
const Title = styled(Typography)`
  position: relative;
  left: -5px;
`

// eslint-disable-next-line no-undef
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.03];
const trans = (x, y, s) => `perspective(1000px) rotateX(${x / 4}deg) rotateY(${y / 4}deg) scale(${s})`;

const Card = () => {
  const [springProps, set] = useSpring(
    () => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }),
  );
  const { theme } = useContext(ThemeContext);
  return (
    <CardContainer
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: springProps.xys.interpolate(trans),
        background: theme.cardBackground
      }}
    >
      <BackgroundImage
        src={EmaLooking}
        alt="Here should be an image of me"
      />
      <ContentContainer>
        <Title variant="h1">
          Hi!
        </Title>
        <Typography variant="h5">
          {"I'm Emanuel Lorenzo"}
        </Typography>
      </ContentContainer>
      <SocialIconsContainer>
        <SocialIcons />
      </SocialIconsContainer>
    </CardContainer>
  );
};

export default Card;
