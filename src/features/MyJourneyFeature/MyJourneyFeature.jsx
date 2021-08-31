import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

import ImageComponent from '@components/ImageComponent';
import HeroComponent from '@components/HeroComponent';
import myJourneyImage from '@images/meganAnderson.jpg';
import bannerUpper from '@images/redFlowers.jpg';
import bannerLower from '@images/logoSplashDark.jpeg';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 0,
    '& h2': { color: theme.palette.common.white, fontSize: '2em' },
    '& h3': {
      color: theme.palette.primary.main,
      fontSize: '2em',
      fontWeight: 500,
      paddingBottom: theme.spacing(3),
      minWidth: 150,
    },
    '& p': {
      fontSize: '1.25em',
    },
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
    maxWidth: 960,
    dislpay: 'flex',
    flexDirection: 'column',
    paddingBotton: theme.spacing(5),
    marginBotton: theme.spacing(5),
  },
  float: {
    float: 'left',
    height: '100%',
    width: '100%',
    maxHeight: 250,
    maxWidth: 300,
    marginRight: 25,
    marginBottom: 25,
    [theme.breakpoints.down('xs')]: {
      float: 'none',
      margin: 'auto',
      marginBottom: 25,
    },
  },
}));

export default function MyJourneyFeature() {
  const sx = useStyles();

  return (
    <div className={sx.root}>
      <HeroComponent heroImage={bannerUpper} height={185}>
        <div className={sx.inner}>
          <h2>My Journey</h2>
        </div>
      </HeroComponent>
      <Container className={sx.box}>
        <Typography variant="h3">
          "A setback doesn't have to be a game-changer."
        </Typography>
        <div className={sx.float}>
          <ImageComponent
            rootHeight={250}
            rootMaxWidth={300}
            mediaPadding="50%"
            imgSrc={myJourneyImage}
            bgFocus={{
              ratio: 25,
              bg: 75,
            }}
            alt="Megan Anderson"
          />
        </div>
        <Typography paragraph>
          As a former athlete who had to lay down big dreams with competitive
          sports due to multiple reconstructive surgeries at a young age, I
          understand the dilemma, heartache, and pain that accompanies life
          setbacks. However, I'm a firm believer that a setback doesn't HAVE to
          be a game-changer! Hard work, dedication, community, and vulnerability
          have become foundational pillars in my health and fitness journey
          throughout various seasons in life.
        </Typography>
        <Typography paragraph>
          When I became a mom to Noah (now almost 5 years old), I was traveling
          for a non-profit, teaching and leading conferences full-time, and
          taking Noah right alongside me. At 3 months of age, he was taking his
          first flight and within 2 years he had 100+ flights under his little
          belt and had left his mark in 7 different countries!
        </Typography>
        <Typography paragraph>
          Doing what our family loved full-time in ministry didn't come without
          a price though. Having a busy travel schedule as a new mom and losing
          sight of important values eventually took a toll on my body and our
          family. My health was declining, my emotions were all over the place,
          and exercise had taken a back seat. Fast forward through many ups and
          downs, victories and losses...
        </Typography>
        <Typography paragraph>
          I'm now walking out the dream of owning my own health and fitness
          business, using my managerial and training experience combined with my
          personal wellness journey to help others achieve and maintain the
          healthiest versions of themselves.
        </Typography>
        <Typography paragraph>
          Be the healthiest version of YOURSELF for YOURSELF and for those you
          love.
        </Typography>
        <Typography paragraph>
          I look forward to helping you plant the right seeds, grow in the right
          environment, and reap the reward you deserve!
        </Typography>
        <Typography paragraph style={{marginBottom: 50}}>​- Megan</Typography>
      </Container>
      <HeroComponent heroImage={bannerLower} height={280} />
    </div>
  );
}
