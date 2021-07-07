import React from 'react';
import {
  makeStyles,
} from '@material-ui/core';

import HeroComponent from '../components/heroComponent';
import QuestionairreFitnessFeature from './questionairreFeatureInput'
import bannerImg from '../assets/images/orangeBlue.jpg';

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
  formRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 500,
    color: theme.palette.primary.main,
    marginTop: theme.spacing(10),
    '& h2': {
      color: theme.palette.secondary.main,
      fontSize: '2em',
      fontWeight: 800,
      marginBottom: 0,
    },
    '& > *': {
      marginTop: theme.spacing(3),
    },
  },
  form: {
    width: 350,
  },
  singleRow: {
    width: 350,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space between',
    alignItems: 'stretch',
  },
  subscribeButton: {
    marginTop: theme.spacing(3),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontWeight: 800,
  },
}));

export default function ContactUsFeature() {
  const sx = useStyles();
  

  return (
    <div className={sx.root}>
      <HeroComponent height={185} heroImage={bannerImg}>
        <div className={sx.inner}>
          <h2>Health Questionairre</h2>
        </div>
      </HeroComponent>
      <QuestionairreFitnessFeature/>
    </div>
  );
}
