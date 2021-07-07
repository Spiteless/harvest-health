import React from 'react';
import {
  Container,
  makeStyles,
  Typography,
  List,
  ListItem,
} from '@material-ui/core';

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
    '& > *': {
      margin: theme.spacing(0,0,1,0)
    }
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
      <Typography variant="h2">Welcome to Harvest Health & Fitness</Typography>
      <Typography variant="body1">
        Harvest Health & Fitness specializes in training for all. We offer one
        on one in-person training and a wide variety of premier virtual training
        sessions.
      </Typography>
      <Typography variant="h3">
        Mom - Personal Trainer - Virtual Coach - Health and Fitness Enthusiast
      </Typography>
      <List>
        <ListItem className={sx.listItem}>
          These workouts are for EVERYONE! Whether you need a jumpstart or want
          to take it to the next level.
        </ListItem>
        <ListItem className={sx.listItem}>
          Our coaches are here to modify the workout as needed. The goal is for
          the experience to be challenging yet doable for all fitness levels.
        </ListItem>
      </List>

      <Typography variant="h3">
        We nurture what we want to grow and we reap what we choose to sow.
      </Typography>
    </Container>
  );
}
