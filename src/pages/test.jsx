import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
}));

function BreakpointOnly(props) {
  const classes = useStyles();
  const { width } = "derp";

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">Current width: {width}</Typography>
      <div className={classes.container}>
        <Hidden only={["xs","sm","md","lg"]}>
          <Paper className={classes.paper}>XL only</Paper>
        </Hidden>
        <Hidden only={["xs","sm","md"]}>
          <Paper className={classes.paper}>LG and XL</Paper>
        </Hidden>
        <Hidden only={["xs","sm"]}>
          <Paper className={classes.paper}>MD, LG, XL</Paper>
        </Hidden>
        <Hidden only={["xs"]}>
          <Paper className={classes.paper}>SM, MD, LG, XL</Paper>
        </Hidden>
        <Hidden only={["xl","lg","md","sm","xs"]}>
          <Paper className={classes.paper}>Hidden on all viewports</Paper>
        </Hidden>
      </div>
    </div>
  );
}

export default (BreakpointOnly);