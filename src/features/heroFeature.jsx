import React from 'react';
import { Container } from '@material-ui/core';

import HeroComponent from '../components/heroComponent';

export default function HeroFeature() {
  return (
    <Container style={{margin: 0, padding: 0 }}>
      <HeroComponent />
    </Container>
  );
}