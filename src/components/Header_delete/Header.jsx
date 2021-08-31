import * as React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

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
} from '@material-ui/core';

import NavDrawer from './navDrawer';
import menuItems from '../../assets/data/header.json';
import logoImage from '../../assets/images/harvestTransparent.png';

const useStyles = makeStyles(theme => ({
  toolbar: {
    minHeight: 100,
    position: 'relative',
  },
  linksContainer: {
    position: 'absolute',
    width: '100%',
    left: 0,
    right: 0,
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      paddingRight: theme.spacing(0),
      justifyContent: 'flex-end',
    },
    '& > *': {
      margin: theme.spacing(0, 1.5),
      color: theme.palette.dark[800],
      fontSize: '1.3em',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.25em',
        margin: theme.spacing(0, .8),
      },
    },
  },
  divider: {
    backgroundColor: theme.palette.dark[400],
  },
  drawer: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
}));

const Logo = () => {
  const matches = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return !matches ? (
    <StaticImage
      src="../../assets/images/harvestTransparent.png"
      quality={95}
      alt="Hero Banner"
      height={102 * 0.6}
      width={448 * 0.6}
    />
  ) : (
    <StaticImage
      src="../../assets/images/logoMedium.png"
      quality={95}
      alt="Hero Banner"
      height={52}
      width={72}
      
      // width={72}
    />
  );
};

export default function Header({ siteTitle }) {
  const sx = useStyles();

  return (
    <AppBar position="relative" color="transparent" elevation={0}>
      <Toolbar className={sx.toolbar}>
        <Logo />
        <Hidden xsDown>
          <div className={sx.linksContainer}>
            {menuItems.map((element, index) => {
              if (element.divider) {
                return (
                  <Divider
                    orientation="vertical"
                    className={sx.divider}
                    flexItem
                    key={index.toString()}
                  />
                );
              }
              return (
                <Link
                  to={element.url}
                  key={index.toString()}
                  component={GatsbyLink}
                >
                  {element.text}
                </Link>
              );
            })}
          </div>
        </Hidden>
        <Hidden smUp>
          <div className={sx.drawer}>
            <NavDrawer anchor="right" />
          </div>
        </Hidden>
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
