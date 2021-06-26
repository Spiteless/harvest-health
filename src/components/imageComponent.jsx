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
  root: ({rootMaxWidth, rootHeight}) => ({
    maxWidth: rootMaxWidth,
    width: '100%',
    height: rootHeight,
  }),
  media: ({ mediaPadding }) => ({
    height: 0,
    padding: mediaPadding,
  }),
});

export default function ImageFeature({
  cardTitle,
  cardContent,
  cardButtons,
  imgSrc,
  mediaPadding = '50%',
  rootMaxWidth = 300,
  rootHeight = 300,
}) {
  const props = { mediaPadding, rootMaxWidth, rootHeight};
  const sx = useStyles(props);

  return (
    <Card className={sx.root} component={Paper}>
      <CardActionArea>
        <CardMedia
          className={sx.media}
          image={imgSrc}
          title="Contemplative Reptile"
        />
        {(cardTitle || cardContent) && (
          <CardContent>
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
          </CardContent>
        )}
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
