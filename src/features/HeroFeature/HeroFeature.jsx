import React from 'react';
import { Container, Button, makeStyles } from '@material-ui/core';
import { Link } from 'gatsby';

import HeroComponent from '@components/HeroComponent';

import banner from '@images/mainBanner.png';
import imageOverlay from '@images/harvestTransparent.png';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: 'auto',
    boxShadow: 'none',
  },
  absolute: {
    position: 'absolute',
    zIndex: 100,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyButton: {
    marginTop: theme.spacing(3),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontWeight: 800,
    textDecoration: 'none',
    "& a": {
      textDecoration: 'none',
      color: theme.palette.common.white
    }
  },
}));

export default function HeroFeature() {
  const sx = useStyles({ bannerImg: banner });
  return (
    <Container style={{ margin: 0, padding: 0 }}>
      <HeroComponent heroImage={banner}>
        <img src={imageOverlay} alt="" placeholder="blurred" />
        <Button className={sx.buyButton} size="large" tabindex="-1" placeholder="NoTabIndex">
          <Link to="/questionairre">Start Now!</Link>
        </Button>
      </HeroComponent>
    </Container>
  );
}
