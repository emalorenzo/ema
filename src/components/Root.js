import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import ThemeSwitchButton from './ThemeSwitchButton';

const Container = styled.div`

`

const Root = () => (
  <Container>
    <Card />
    <ThemeSwitchButton />
  </Container>
)

export default Root;
