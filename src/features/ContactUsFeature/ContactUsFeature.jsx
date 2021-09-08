import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  makeStyles,
  Container,
  Checkbox,
  TextField,
  Typography,
  FormControlLabel,
  FormControl,
  Button,
  FormHelperText,
  Box,
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // minHeight: 280,
    '& h2': {
      fontSize: '2em',
      fontWeight: 800,
      marginBottom: 0,
    },
  },
  container: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // minHeight: 280
  },
  inner: {
    maxWidth: 960,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& h2': {
      color: theme.palette.common.white,
    },
  },
  formRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 500,
    color: theme.palette.primary.main,
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  subHeading: {
    color: theme.palette.secondary.main,
    fontSize: '2em',
    fontWeight: 800,
    marginBottom: 0,
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
  noTopMargin: {
    marginTop: 0,
    paddingTop: 0,
  },
}));

const validationSchema = yup.object({
  firstName: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Please enter your first name'),
  lastName: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Please enter your last name'),
  email: yup.string().email('Please enter a valid email').required('Please enter an email address'),
  question: yup.string().max(500, 'This field is limited to 500 characters').required('What would you like to ask'),
});

export default function ContactUsFeature({ formName }) {
  const [formOrThanks, setFormOrThanks] = useState(true);
  const sx = useStyles();

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      question: '',
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
    <Box>
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
        <Container className={sx.formRoot}>
          <div className={sx.singleRow}>
            <FormControl className={sx.form} style={{ width: 175, paddingRight: 8 }}>
              <TextField
                label="First Name"
                value={formik.values.firstName}
                variant="outlined"
                name="firstName"
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                onChange={formik.handleChange}
              />
              <FormHelperText style={{ display: 'flex', justifyContent: 'center' }}>
                {(formik.touched.firstName && formik.errors.firstName) || ' '}
              </FormHelperText>
            </FormControl>
            <FormControl className={sx.form} style={{ width: 175, paddingLeft: 8 }}>
              <TextField
                label="Last Name"
                value={formik.values.lastName}
                variant="outlined"
                name="lastName"
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                onChange={formik.handleChange}
              />
              <FormHelperText style={{ display: 'flex', justifyContent: 'center' }}>
                {(formik.touched.lastName && formik.errors.lastName) || ' '}
              </FormHelperText>
            </FormControl>
          </div>
          <FormControl className={sx.form}>
            <TextField
              label="Email"
              variant="outlined"
              value={formik.values.email}
              name="email"
              error={formik.touched.email && Boolean(formik.errors.email)}
              onChange={formik.handleChange}
            />
            <FormHelperText style={{ display: 'flex', justifyContent: 'center' }}>
              {(formik.touched.email && formik.errors.email) || ' '}
            </FormHelperText>
          </FormControl>
          <FormControl className={sx.form}>
            <TextField
              multiline
              rows={4}
              label="Questions"
              variant="outlined"
              name="question"
              onChange={formik.handleChange}
              error={formik.touched.question && Boolean(formik.errors.question)}
            />
            <FormHelperText style={{ display: 'flex', justifyContent: 'center' }}>
              {(formik.touched.question && formik.errors.question) || ' '}
            </FormHelperText>
          </FormControl>
          <Button className={sx.subscribeButton} type="submit">
            Submit
          </Button>
        </Container>
      </form>
    </Box>
  );

  return (
    <Box className={sx.root} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <HeroComponent height={185} heroImage={bannerImg}>
        <div className={sx.inner}>
          <Typography variant="h2" color="secondary">
            Contact Us
          </Typography>
        </div>
      </HeroComponent>
      <Box className={sx.container}>
        <Typography variant="h2" color="secondary" className={sx.noTopMargin}
          
        >
          {formOrThanks ? "Ask Megan" : "We'll be in touch!"}
        </Typography>
        {formOrThanks && Form}
      </Box>
    </Box>
  );
}
