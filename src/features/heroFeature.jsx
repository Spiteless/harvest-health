import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Container } from '@material-ui/core';

import HeroComponent from '../components/heroComponent';

export default function HeroFeature() {
  return (
    <Container style={{margin: 0, padding: 0 }}>
      <HeroComponent />
      <h1>Hero Feature</h1>
    </Container>
  );
}
