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
    // width: 400,
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    height: 0,
    paddingTop: '28.25%',
  },
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
    zIndex: 100,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}));

export default function HeroComponent() {
  const classes = useStyles();

  return (
    <Card classeName={classes.root}>
      <div className={classes.root}>
        <CardContent
          className={classes.relative}
          style={{
            backgroundImage: `url(${banner})`,
            height: 350,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className={classes.absolute}>
            <img
              src={bannerCover}
              alt="A dinosaur"
              placeholder="blurred"
              // layout="fixed"
              // width={200}
              // height={200}
              style={{ border: '3px purple solid' }}
              // className={classes.absolute}
            />
            <Typography gutterBottom variant="h5" component="h2">
              {Math.floor(Math.random() * 10000)}
            </Typography>
            <Button variant="outlined">Buy Now</Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
