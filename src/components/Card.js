import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Typography from '@material-ui/core/Typography';
import SocialIcons from './SocialIcons';

const Card = styled(animated.div)`
  width: 100ch;
  height: 60ch;
  border-radius: 20px;
  background-image: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  /* border: 15px solid white; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;

// eslint-disable-next-line no-undef
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.03];
const trans = (x, y, s) => `perspective(1000px) rotateX(${x / 4}deg) rotateY(${y / 4}deg) scale(${s})`;

export default () => {
  const [springProps, set] = useSpring(
    () => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }),
  );
  return (
    <Card
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: springProps.xys.interpolate(trans) }}
    >
      <Typography component="h2" variant="h1" gutterBottom>
        Hi! a
      </Typography>
      <Typography variant="h5" gutterBottom>
        I am Emanuel Lorenzo, a mobile developer
      </Typography>
      <SocialIcons />
    </Card>
  );
};
