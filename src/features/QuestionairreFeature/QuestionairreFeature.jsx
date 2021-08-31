import React from 'react';
import { makeStyles } from '@material-ui/core';

import HeroComponent from '@components/HeroComponent';
import QuestionairreFitnessFeature from '@features/QuestionairreFeatureInput';
import bannerImg from '@images/orangeBlue.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 0,
  },
  heading: { color: theme.palette.common.white, fontSize: '2em' },
  inner: {
    maxWidth: 960,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}));

export default function ContactUsFeature() {
  const sx = useStyles();

  return (
    <div className={sx.root}>
      <HeroComponent height={185} heroImage={bannerImg}>
        <div className={sx.inner}>
          <h2 className={sx.heading}>Health Questionairre</h2>
        </div>
      </HeroComponent>
      <QuestionairreFitnessFeature />
    </div>
  );
}
