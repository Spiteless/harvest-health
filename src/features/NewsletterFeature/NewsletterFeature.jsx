import React, { useState } from 'react';
import {
  makeStyles,
  Container,
  Checkbox,
  TextField,
  FormControlLabel,
  FormControl,
  FormHelperText,
  Button,
  Box,
} from '@material-ui/core';
import * as yup from 'yup';
import { useFormik } from 'formik';

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
    // '& > *': {
    //   marginTop: theme.spacing(3),
    // },
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
  error: {
    color: theme.palette.error.main,
  },
}));

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter an email address'),
  markatingConsent: yup
    .bool()
    .oneOf([true], 'Please check to accept marketing emails.')
    .nullable(),
});

export default function NewsletterFeature() {
  const formik = useFormik({
    initialValues: {
      email: '',
      markatingConsent: null,
    },
    onSubmit: values => {
      console.log(values);
      handleSend(values);
    },
    validationSchema: validationSchema,
  });
  const sx = useStyles();

  const handleSend = values => {
    const toSubmit = encode(values);
    console.log('fired HandleSubmit!', toSubmit);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'NewsletterSubscribe', ...values }),
    })
      .then(res => console.log('Success! Form submitted!', res))
      .catch(error => console.log('Error.', error));
  };

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      action="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      name="newsLetter"
    >
      <Container className={sx.root}>
        <h2>Join Our Newsletter!</h2>
        <FormControl className={sx.form}>
          <TextField
            // required
            label="Email"
            variant="outlined"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
          >
            Blah blah
          </TextField>
          <FormHelperText style={{ display: 'flex', justifyContent: 'center' }}>
            {(formik.touched.email && formik.errors.email) || ' '}
          </FormHelperText>
        </FormControl>
        <Box display="flex" flexDirection="column" alignItems="center">
          <FormControlLabel
            // required
            name="markatingConsentParent"
            control={
              <Checkbox
                checked={formik.values.markatingConsent}
                color="primary"
                classes={
                  formik.touched.email &&
                  Boolean(formik.errors.email) && { // Boolean(formik.errors.marketingConsent) && // formik.touched.markatingConsent &&
                    root: sx.error,
                  }
                }
                // required
                name="markatingConsent"
                onChange={formik.handleChange}
                value={formik.values.markatingConsent}
                error={
                  formik.touched.markatingConsent &&
                  Boolean(formik.errors.marketingConsent)
                }
              />
            }
            label="I consent to receiving marketing emails."
          ></FormControlLabel>
          <FormHelperText style={{ marginTop: -10 }}>
            {(formik.touched.markatingConsent &&
              formik.errors.markatingConsent) ||
              ' '}
          </FormHelperText>
        </Box>
        <Button name="newsLetter" className={sx.subscribeButton} type="submit">
          Subscribe
        </Button>
      </Container>
    </form>
  );
}
