import React, { useState } from 'react';
import {
  makeStyles,
  Container,
  Checkbox,
  TextField,
  FormControlLabel,
  FormControl,
  FormHelperText,
  FormGroup,
  FormLabel,
  Button,
  RadioGroup,
  Radio,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  rootInput: {
    margin: 0,
    padding: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 0,
    '& h2': { color: theme.palette.secondary.main, fontSize: '2em' },
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
    marginTop: theme.spacing(12),
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
  noTopMargin: {
    marginTop: 0
  }
}));

const healthHistory = [
  {
    key: 'Coronary heart disease, angina, heart surgeries',
    slug: 'health_history__Coronary heart disease, angina, heart surgeries',
  },
  {
    key: 'Congestive heart failure, heart attack, pacemaker',
    slug: 'health_history__Congestive heart failure, heart attack, pacemaker',
  },
  {
    key: 'Asthma, COPD, or trouble breathing',
    slug: 'health_history__Asthma, COPD, or trouble breathing',
  },
  {
    key: 'Chronic bronchitis or emphysema',
    slug: 'health_history__Chronic bronchitis or emphysema',
  },
  { key: 'Diabetes (Type 1 or 2)', slug: 'health_history__Diabetes (Type 1 or 2)' },
  {
    key: 'High blood pressure (140/90 or higher)',
    slug: 'health_history__High blood pressure (140/90 or higher)',
  },
  {
    key: 'High blood cholesterol (220 or higher)',
    slug: 'health_history__High blood cholesterol (220 or higher)',
  },
  {
    key: 'Smoker (Active or Non-Active)',
    slug: 'health_history__Smoker (Active or Non-Active)',
  },
  { key: 'Dizziness or fainting', slug: 'health_history__Dizziness or fainting' },
  {
    key: 'Osteoporosis or other bone problems',
    slug: 'health_history__Osteoporosis or other bone problems',
  },
  {
    key: 'Currently pregnant or planning to be',
    slug: 'health_history__Currently pregnant or planning to be',
  },
  {
    key: 'Family hsitory of cardiac or pulmonary disease before the age of 55',
    slug: 'health_history__Family hsitory of cardiac or pulmonary disease before the age of 55',
  },
  { key: 'Thyroid conditions', slug: 'health_history__Thyroid conditions' },
  { key: 'Signs of stroke or TIA', slug: 'health_history__Signs of stroke or TIA' },
  { key: 'Fibromyalgia', slug: 'health_history__Fibromyalgia' },
  { key: 'Eating disorders', slug: 'health_history__Eating disorders' },
  { key: 'Cancer', slug: 'health_history__Cancer' },
  { key: 'NONE', slug: 'health_history__NONE' },
];

export default function ContactUsFeature() {
  const sx = useStyles();
  const initialState = {
    info__fistName: '',
    info__lastName: '',
    info__email: '',
    info__phone: '',
    fitness__goals: '',
    fitness__workoutFrequency: '',
    fitness__workoutHistory: '',
    fitness__exercise_type_functional: false,
    fitness__exercise_type_cardiovascular: false,
    fitness__exercise_type_hiit: false,
    fitness__exercise_type_strength: false,
    fitness__exercise_type_athletic: false,
    fitness__exercise_type_other: false,
  };

  healthHistory.map( condition => {
    initialState[condition.slug] = false
  })

  const [state, setState] = useState(initialState);

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
    <div className={sx.rootInput}>
      <form action="" name="questinairre">
        <Container className={sx.formRoot}>
          <h2 className={sx.noTopMargin}>Personal Training</h2>
          <div className={sx.singleRow}>
            <FormControl
              className={sx.form}
              style={{ width: 175, paddingRight: 8 }}
            >
              <TextField
                required
                label="First Name"
                variant="outlined"
                name="info__firstName"
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
                name="info__lastName"
                onChange={handleInput}
              />
            </FormControl>
          </div>
          <FormControl className={sx.form}>
            <TextField
              required
              label="Email"
              variant="outlined"
              name="info__email"
              type="email"
              onChange={handleInput}
            />
          </FormControl>
          <FormControl className={sx.form}>
            <TextField
              required
              label="Phone Number"
              variant="outlined"
              name="info__phone"
              type="tel"
              onChange={handleInput}
            />
          </FormControl>
          <FormControl className={sx.form}>
            <TextField
              required
              multiline
              rows={2}
              label="Goals"
              variant="outlined"
              helperText="What do you want to get out of working with a trainer?"
              name="fitness__goals"
              onChange={handleInput}
            />
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend" required>
              How many times per week do you exercise?
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              name="fitness__workoutFrequency"
              value={state.workoutFrequency}
              onChange={handleInput}
            >
              <FormControlLabel value="0-1" control={<Radio />} label="0-1" />
              <FormControlLabel value="2-3" control={<Radio />} label="2-3" />
              <FormControlLabel value="4-7" control={<Radio />} label="4-7" />
            </RadioGroup>
          </FormControl>
          <FormControl className={sx.form}>
            <TextField
              required
              multiline
              rows={2}
              label="Exercise History"
              variant="outlined"
              helperText="How long have you been regularly exercising?"
              name="fitness__workoutHistory"
              onChange={handleInput}
            />
          </FormControl>
          <FormControl component="fieldset" required className={sx.formControl}>
            <FormLabel component="legend">
              What type of training do you see yourself doing?
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.functional}
                    onChange={handleInput}
                    name="fitness__exercise_type_functional"
                  />
                }
                label="Functional"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.cardiovascular}
                    onChange={handleInput}
                    name="fitness__exercise_type_cardiovascular"
                  />
                }
                label="Cardiovascular"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.hiit}
                    onChange={handleInput}
                    name="fitness__exercise_type_hiit"
                  />
                }
                label="HIIT"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.strength}
                    onChange={handleInput}
                    name="fitness__exercise_type_strength"
                  />
                }
                label="Strength"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.athletic}
                    onChange={handleInput}
                    name="fitness__exercise_type_athletic"
                  />
                }
                label="Athletic"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.other}
                    onChange={handleInput}
                    name="fitness__exercise_type_other"
                  />
                }
                label="Other"
              />
            </FormGroup>
          </FormControl>
          <h2>Health History</h2>
          <FormControl className={sx.form}>
            <Typography style={{ marginBottom: 6 }}>
              Do you have any physical injuries or disabilities or limitations
              that must be addressed before developing an exercise program?
            </Typography>
            <TextField
              required
              multiline
              rows={2}
              // label="Injuries, Disabilities, Limitations"
              variant="outlined"
              helperText=""
              name="limitations"
              onChange={handleInput}
            />
          </FormControl>
          <FormControl className={sx.form}>
            <Typography style={{ marginBottom: 6 }}>
              Has your doctor ever said you have a heart condition and recommend
              only medically supervised physical activity?
            </Typography>
            <TextField
              required
              multiline
              rows={2}
              // label="Heart Condition"
              variant="outlined"
              helperText=""
              name="heartCondition"
              onChange={handleInput}
            />
          </FormControl>
          <FormControl component="fieldset" required className={sx.formControl}>
            <FormLabel component="legend">Health History</FormLabel>
            <FormGroup style={{maxWidth: 350}}>
              {healthHistory.map(condition => (
                <FormControlLabel
                  style={{marginTop: 6}}
                  control={
                    <Checkbox
                      checked={state[condition.slug]}
                      onChange={handleInput}
                      name={condition.slug}
                    />
                  }
                  label={condition.key}
                  key={condition.key}
                />
              ))}
            </FormGroup>
          </FormControl>
          <Button className={sx.subscribeButton} type="submit">
            Submit
          </Button>
            <FormHelperText style={{ marginTop: 8}}>All submitted information is confidential.</FormHelperText>
        </Container>
      </form>
    </div>
  );
}
