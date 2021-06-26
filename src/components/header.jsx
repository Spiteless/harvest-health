import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { makeStyles } from '@material-ui/core/styles';

import { Container, Grid } from '@material-ui/core';

import DrawerFeature from '../features/drawerFeature'


const useStyles = makeStyles(theme => ({
  header: {
    background: theme.palette.light.main,
    marginBottom: `1.45rem`,
    marginTop: 0,
    height: 80,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    '& > *': {
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  },
  home: {
    margin: 0,
    border: '5px black solid',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 0`,
    paddingTop: theme.spacing(1),
    justifyContent: 'space-between',
  },
  link: {
    color: theme.palette.dark.main,
    textDecoration: `none`,
  },
}));
export default function Header({ siteTitle }) {
  const sx = useStyles();
  return (
    <header className={sx.header}>
      <Container className={sx.container}>
        <h1 classNames={sx.home}>
          <Link to="/" className={sx.link}>
            {siteTitle}
          </Link>
        </h1>
        <StaticImage
          src="../assets/images/logoMedium.png"
          quality={95}
          alt="Hero Banner"
          style={{
            width: 77,
            height: 70,
          }}
        />
        <DrawerFeature anchor="right" />
      </Container>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
