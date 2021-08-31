import React from 'react';
import { makeStyles, Grid, Box } from '@material-ui/core';

import HeroComponent from '../../components/heroComponent';
import ServicesFeatureText from '../servicesFeatureText';
import bannerImg from '../assets/images/sunsetYoga.jpg';
import image1 from '../assets/images/classImage.png';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 0,
    '& h2': { color: theme.palette.common.white, fontSize: '2em' },
  },
  inner: {
    maxWidth: 960,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  box: {
    paddingTop: 60,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function ServicesFeature() {
  const sx = useStyles();

  return (
    <div className={sx.root}>
      <HeroComponent height={185} heroImage={bannerImg}>
        <div className={sx.inner}>
          <h2>Services</h2>
        </div>
      </HeroComponent>

      <Box className={sx.box}>
        <Grid container style={{ maxWidth: 960 }}>
          <Grid item xs={12} sm={9} lg={6}>
            <ServicesFeatureText />
          </Grid>
          <Grid
            item
            xs={0}
            sm={3}
            lg={6}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
          >
            <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
              <img
                src={image1}
                alt=""
                placeholder="blurred"
                style={{ marginTop: 40, width: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
