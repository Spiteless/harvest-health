import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    padding: '25%',
  },
  mediaAuto: {
    height: '100%',
  },
});

export default function ImageFeature({
  cardTitle,
  cardContent,
  cardButtons,
  height = 200,
  imgSrc
}) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      component={Paper}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgSrc}
          title="Contemplative Reptile"
        />
        {(cardTitle || cardContent) && <CardContent>
          {cardTitle && (
            <Typography gutterB ottom variant="h5" component="h2">
              {cardTitle}
            </Typography>
          )}
          {cardContent && (
            <Typography variant="body2" color="textSecondary" component="p">
              {cardContent}
            </Typography>
          )}
        </CardContent>}
      </CardActionArea>
      {cardButtons && (
        <CardActions>
          <Button size="small" color="primary">
            cardButton1
          </Button>
          <Button size="small" color="primary">
            cardButton2
          </Button>
          <Button size="small" color="primary">
            cardButton3
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
