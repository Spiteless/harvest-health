import * as React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { display } from '@material-ui/system';

import {
  useMediaQuery,
  makeStyles,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Link,
  Box,
} from '@material-ui/core';

import NavDrawer from './NavDrawer/NavDrawer';
// import WrappedLink from '@components/WrappedLink/WrappedLink';
import WrappedLink from '@components/WrappedLink';
import menuItems from '../../assets/data/header.json';
import { CheckBox } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  toolbar: {
    minHeight: 100,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linksContainer: {
    position: 'absolute',
    width: '100%',
    left: 0,
    right: 0,
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& > *': {},
  },
  somethings: {
    color: theme.palette.text.primary,
    margin: theme.spacing(0, 1.5),
    [theme.breakpoints.down(800)]: {
      fontSize: '1.1em',
      margin: theme.spacing(0, 0.7),
    },
    [theme.breakpoints.down(1000)]: {
      fontSize: '1.2em',
      margin: theme.spacing(0, 1),
    },
  },
  hide800Down: {
    display: 'none',
    [theme.breakpoints.up(800)]: {
      display: 'block',
    },
  },
  hide690Down: {
    display: 'none',
    [theme.breakpoints.up(690)]: {
      display: 'block',
    },
  },
  divider: {
    backgroundColor: theme.palette.dark[400],
  },
  drawer: {
    marginLeft: 0,
    marginRigth: 0,
    [theme.breakpoints.up(800)]: {
      display: 'none',
    },
  },
  logoSm: {
    backgroundColor: 'white',
    display: 'block',
    [theme.breakpoints.up(680)]: {
      display: 'none',
    },
  },
  logoLg: {
    backgroundColor: 'white',
    display: 'block',
    [theme.breakpoints.down(680)]: {
      display: 'none',
    },
  },
}));

export default function Header({ siteTitle }) {
  const sx = useStyles();

  const logo = (
    <>
      <Box className={sx.logoLgg}>
        <StaticImage
          src="../../assets/images/harvestTransparent.png"
          quality={95}
          alt="Hero Banner"
          height={102 * 0.6}
          width={448 * 0.6}
        />
      </Box>
      {/* <Box className={sx.logoSm}>
        <StaticImage
          src="../../assets/images/logoMedium.png"
          quality={95}
          alt="Hero Banner"
          height={52}
          width={72}
        />
      </Box> */}
    </>
  );

  const links = (
    <>
      <WrappedLink to="/" className={`${sx.somethings} ${sx.hide690Down}`} text="Home" />
      <WrappedLink to="/services" className={`${sx.somethings} ${sx.hide690Down}`} text="Services" />
      <WrappedLink
        to="/my-journey"
        text="My Journey"
        className={`${sx.somethings} ${sx.hide690Down}`}
      />
      <WrappedLink
        to="/contact-us"
        text="Contact Us"
        className={`${sx.somethings} ${sx.hide690Down}`}
      />
      <Divider
        orientation="vertical"
        className={`${sx.hide800Down} ${sx.divider}`}
        flexItem
      />
      <WrappedLink
        to="/questionairre"
        text="Questionairre"
        className={`${sx.somethings} ${sx.hide800Down}`}
      />
      <Box className={sx.drawer}>
        <NavDrawer anchor="right" />
      </Box>
    </>
  );

  const menu = (
    <div className={sx.drawer}>
      <NavDrawer anchor="right" />
    </div>
  );

  return (
    <AppBar position="relative" color="transparent" elevation={0}>
      <Toolbar className={sx.toolbar}>
        <Box>{logo}</Box>
        <Box className={sx.linksContainer}>{links}</Box>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
