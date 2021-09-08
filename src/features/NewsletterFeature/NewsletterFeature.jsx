import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
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

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 500,
    color: theme.palette.primary.main,
    marginTop: theme.spacing(10),
  },
  subHeading: {
    color: theme.palette.primary.main,
    fontSize: '2em',
    fontWeight: 800,
    marginBottom: theme.spacing(1),
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
  email: yup.string().email('Please enter a valid email').required('Please enter an email address'),
  markatingConsent: yup.bool().oneOf([true], 'Please check to accept marketing emails.').nullable(),
});

export default function NewsletterFeature({ formName }) {
  const [formOrThanks, setFormOrThanks] = useState(true);
  const sx = useStyles();

  const formik = useFormik({
    initialValues: {
      email: '',
      markatingConsent: null,
    },
    onSubmit: values => {
      handleSubmit(values);
    },
    validationSchema: validationSchema,
  });

  const handleSubmit = values => {
    setFormOrThanks(false)
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': { formName }, ...values }),
    };
    fetch('/', options)
      .then(res => true)
      .catch(error => console.log('Error.', error));
  };

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const Form = (
    <form
        name={formName}
        // action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={e => formik.handleSubmit(e)}
      >
        <input type="hidden" name="form-name" value={formName} />
        <div hidden>
          <label>Don't fill this out: </label>
          <input type="hidden" name="bot-field" onChange={formik.handelChange} />
        </div>
        <Container className={sx.root}>
          <h2 className={sx.subHeading} >Join Our Newsletter!</h2>
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
              name="markatingConsentParent"
              control={
                <Checkbox
                  checked={formik.values.markatingConsent}
                  color="primary"
                  classes={
                    formik.touched.markatingConsent &&
                    Boolean(formik.errors.markatingConsent) && {
                      root: sx.error,
                    }
                  }
                  name="markatingConsent"
                  onChange={formik.handleChange}
                  value={formik.values.markatingConsent}
                  error={formik.touched.markatingConsent && Boolean(formik.errors.marketingConsent)}
                />
              }
              label="I consent to receiving marketing emails."
            />
            <FormHelperText style={{ marginTop: -10 }}>
              {(formik.touched.markatingConsent && formik.errors.markatingConsent) || ' '}
            </FormHelperText>
          </Box>
          <Button className={sx.subscribeButton} type="submit">
            Subscribe
          </Button>
        </Container>
      </form>
  )

  const ThankYou = (
    <h2 className={sx.subHeading} >Thanks for subscribing!!</h2>
  )

  return (
    <Box height={274} display="flex" alignItems="center" justifyContent="center">
      {formOrThanks ? Form : ThankYou}
    </Box>
  );
}
