import React from 'react';
import { StaticImage, getImage } from 'gatsby-plugin-image';
import { Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import banner from '../assets/images/mainBanner.png';
import bannerCover from '../assets/images/harvestTransparent.png';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: 'auto',
    boxShadow: 'none',
  },
  imageBox: {
    position: 'relative',
    backgroundImage: `url(${banner})`,
    height: 350,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  absolute: {
    position: 'absolute',
    zIndex: 100,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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

export default function HeroComponent({ innerText }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.imageBox}>
        <div className={classes.absolute}>
          <img src={bannerCover} alt="A dinosaur" placeholder="blurred" />
          {innerText && (
            <Typography gutterBottom variant="h5" component="h2">
              {innerText}
            </Typography>
          )}
          <Button className={classes.buyButton} size="large">
            Start Now!
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
