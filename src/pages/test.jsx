import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({}));

function DisplayBox({ children, breakpoint }) {
  const display = {};
  for (let i = 400; i < 3001; i += 50) {
    display[`px${i}`] = 'none';
  }
  display[breakpoint] = 'block';

  return <Box display={display}>{children}</Box>;
}

function BreakpointOnly({ children, breakpoint }) {
  const breakpoints = [];
  for (let i = 400; i < 3001; i += 50) {
    breakpoints.push(`px${i}`);
  }
  const sx = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      heigh="100vh"
      fontSize={64}
    >
      {breakpoints.map(breakpoint => (
        <DisplayBox breakpoint={breakpoint}>{breakpoint}</DisplayBox>
      ))}
    </Box>
  );
}

export default BreakpointOnly;