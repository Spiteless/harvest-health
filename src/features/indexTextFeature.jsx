import React from 'react';
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: 1000,
    marginTop: theme.spacing(10),
    '& h2': {
      color: theme.palette.primary.main,
      fontSize: '2em',
      fontWeight: 800,
    },
    '& h3': {
      color: theme.palette.primary.main,
      fontSize: '1.6em',
      fontWeight: 800,
    },
    '& p': {
      fontSize: '1.1em',
    },
    '& ul': {
      fontSize: '1.1em',
      listStyleType: 'circle',
    },
  },
  listItemIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 8,
  },
  icon: {
    height: 10,
    width: 10,
  },
  listItem: {
    listStyle: 'disc outside !important',
  },
}));

export default function TextFeature() {
  const sx = useStyles();
  return (
    <Container className={sx.root}>
      <h2>Welcome to Harvest Health & Fitness</h2>
      <p>
        Harvest Health & Fitness specializes in training for all. We offer one
        on one in-person training and a wide variety of premier virtual training
        sessions.
      </p>
      <h3>
        Mom - Personal Trainer - Virtual Coach - Health and Fitness Enthusiast
      </h3>
      <ul>
        <li className={sx.listItem}>
          These workouts are for EVERYONE! Whether you need a jumpstart or want
          to take it to the next level.
        </li>
        <li className={sx.listItem}>
          Our coaches are here to modify the workout as needed. The goal is for
          the experience to be challenging yet doable for all fitness levels.
        </li>
      </ul>

      <h3>
        We nurture what we want to grow and we reap what we choose to sow.
      </h3>
    </Container>
  );
}
