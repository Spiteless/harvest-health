import React from 'react';
import { Grid, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    '& > h3': {
      fontSize: '1.3em',
      color: theme.palette.primary.main,
      fontWeight: 800,
    },
    '& ul': {
      listStyle: 'none',
      padding: 0,
      fontSize: '1.15em',
    },
  },
  primaryHighlight: {
    color: theme.palette.primary.main,
  },
  blackHighlight: {
    color: theme.palette.common.black,
  },
  noTopMargin: {
    marginTop: 0
  }
  
}));

export default function ServiceFeatureText() {
  const sx = useStyles();
  return (
    <div className={sx.root}>
      <h3 className={sx.noTopMargin}>
        <span className={sx.blackHighlight}>
          Founder/Owner - Megan Anderson
        </span>{' '}
        <span className={sx.primaryHighlight}>NASM-CPT | CPR/AED</span>
      </h3>
      <h3>Studio Personal Training</h3>
      <ul>
        <li>(In-person - In the Zone Cryo + Health Studio)</li>
      </ul>
      <ul>
        <li>1 hr Studio</li>
        <li>$65 per session</li>
        <li>$60 10-24 sessions</li>
        <li>$55 24+ sessions</li>
      </ul>
      <ul>
        <li>½ hr Studio</li>
        <li>$50 per session</li>
        <li>$45 25+ sessions</li>
      </ul>
      <h3>Virtual Training</h3>

      <ul>
        <li>1hr Online + Live</li>
        <li>$55 per session</li>
        <li>$50 per session 3x or more/week</li>
      </ul>
      <ul>
        <li>½ hr</li>
        <li>$45 per session</li>
        <li>$40 per session 3x or more/week</li>
      </ul>
      <h3>Tandem</h3>
      <ul>
        <li>½ hr</li>
        <li>$45 per session</li>
        <li>$40 per session 3x or more/week</li>
      </ul>
      <h3>Virtual Live Zoom Classes</h3>
      <ul>
        <li>Unlimited access monthly package - 3x/week - $100</li>
        <li>2-week trial (1x use only) - $20</li>
        <li>Drop-in $15 per session</li>
        <li>
          Referral Discount - $20 off your monthly price when you sign a friend
          up for a month!
        </li>
      </ul>
      <ul>
        <li>*Referral discounts available</li>
      </ul>
    </div>
  );
}
