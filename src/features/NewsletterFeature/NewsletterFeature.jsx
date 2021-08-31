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

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 500,
    color: theme.palette.primary.main,
    marginTop: theme.spacing(10),
    '& h2': {
      color: theme.palette.primary.main,
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

export default function NewsletterFeature() {
  const sx = useStyles();
  const [state, setState] = useState({
    email: '',
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
    <form action="" name="newLetter">
      <Container className={sx.root}>
        <h2>Join Our Newsletter!</h2>
        <FormControl className={sx.form}>
          <TextField
            required
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleInput}
          >
            Blah blah
          </TextField>
        </FormControl>
        <FormControlLabel
          required
          name="markatingConsent"
          control={
            <Checkbox
              checked={state.markatingConsent}
              color="primary"
              required
              name="markatingConsent"
            />
          }
          onClick={handleInput}
          type="boomBox"
          label="I consent to receiving marketing emails."
        />
        <Button className={sx.subscribeButton} type="submit">
          Subscribe
        </Button>
      </Container>
    </form>
  );
}
