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
  const [formState, setFormState] = useState({
    email: '',
    markatingConsent: false,
  });

  const handleInput = e => {
    const { name, value, type, checked } = e.target;
    const newState = { ...formState };
    newState[name] = type === 'checkbox' ? checked : value;
    if (typeof name !== 'undefined') {
      setFormState(newState);
    } else {
      console.log('pass');
    }
    console.log(name, value, type, checked, e, newState);
  };

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = e => {
    console.log('fired HandleSubmit!', e);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': e.target.name, ...formState }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));
  };

  const handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    handleSubmit(e)
  }

  return (
    <form action="POST" data-netlify="true" name="newsLetter">
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
              checked={formState.markatingConsent}
              color="primary"
              required
              name="markatingConsent"
            />
          }
          onClick={handleInput}
          label="I consent to receiving marketing emails."
        />
        <Button className={sx.subscribeButton} onClick={e=>handleClick(e)}>
          Subscribe
        </Button>
      </Container>
    </form>
  );
}
