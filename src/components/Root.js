import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from './Card';
import ThemeSwitchButton from './ThemeSwitchButton';
import ThemeContext from './ThemeProvider';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SwitchButtonContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
`

const Root = () => {
  const { theme: { rootBackground: background } } = useContext(ThemeContext);
  return (
    <Container style={{ background }}>
      <Card />
      <SwitchButtonContainer>
        <ThemeSwitchButton />
      </SwitchButtonContainer>
    </Container>
  )
};

export default Root;
