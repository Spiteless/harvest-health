import React, { useState } from 'react';
import {
  makeStyles,
  Container,
  Checkbox,
  TextField,
  FormControlLabel,
  FormControl,
  Button,
} from '@material-ui/core';

import HeroComponent from '@components/HeroComponent';
import bannerImg from '@images/mountainSnowYoga.jpg';

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
  const [state, setState] = useState({
    email: '',
    firstName: '',
    lastName: '',
    questions: '',
    markatingConsent: false,
  });

  const handleInput = e => {
    const { name, value, type, checked } = e.target;
    const newState = { ...state };
    newState[name] = type === 'checkbox' ? checked : value;
    if (typeof name !== 'undefined') {
      setState(newState);
    } else {
      console.log('pass');
    }
    console.log(name, value, type, checked, e, newState);
  };

  const handleSubmit = event => {};

  return (
    <div className={sx.root}>
      <HeroComponent height={185} heroImage={bannerImg}>
        <div className={sx.inner}>
          <h2>Contact Us</h2>
        </div>
      </HeroComponent>
      <form action="" name="contactUs">
        <Container className={sx.formRoot}>
          <h2>Ask Megan</h2>
          <div className={sx.singleRow}>
            <FormControl
              className={sx.form}
              style={{ width: 175, paddingRight: 8 }}
            >
              <TextField
                required
                label="First Name"
                variant="outlined"
                name="firstName"
                onChange={handleInput}
              />
            </FormControl>
            <FormControl
              className={sx.form}
              style={{ width: 175, paddingLeft: 8 }}
            >
              <TextField
                required
                label="Last Name"
                variant="outlined"
                name="lastName"
                onChange={handleInput}
              />
            </FormControl>
          </div>
          <FormControl className={sx.form}>
            <TextField
              required
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleInput}
            />
          </FormControl>
          <FormControl className={sx.form}>
            <TextField
              required
              multiline
              rows={4}
              label="Questions"
              variant="outlined"
              name="questions"
              onChange={handleInput}
            />
          </FormControl>
          <Button className={sx.subscribeButton} type="submit">
            Submit
          </Button>
        </Container>
      </form>
    </div>
  );
}
