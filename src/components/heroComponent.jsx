import React from 'react';
import { StaticImage, getImage } from 'gatsby-plugin-image';
import { Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: 'auto',
    boxShadow: 'none',
  },
  imageBox: ({bannerImg, height}) => ({
    position: 'relative',
    backgroundImage: `url(${bannerImg})`,
    height,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: "0 0 0 0",
  }),
  absolute: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    zIndex: 100,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
  },
  buyButton: {
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
}));

export default function HeroComponent({ children, heroImage, height=350 }) {
  const sx = useStyles({bannerImg: heroImage, height});

  return (
    <Card className={sx.root}>
      <CardContent className={sx.imageBox}>
        <div className={sx.absolute}>
          { children }
        </div>
      </CardContent>
    </Card>
  );
}
