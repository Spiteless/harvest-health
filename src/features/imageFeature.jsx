import React from 'react';
import { makeStyles } from '@material-ui/core';

import ImageComponent from '../components/imageComponent';

import image1 from '../assets/images/kettlebell.jpg';
import image2 from '../assets/images/olympicLift.jpg';
import image3 from '../assets/images/rowMachine.jpg';

const useStyles = makeStyles(theme => ({
  root: () => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginTop: theme.spacing(10),
    '& > *': {
      margin: theme.spacing(1),
    },
  }),
}));

export default function ImageFeature() {
  const images = [image1, image2, image3];
  const sx = useStyles();
  return (
    <div className={sx.root}>
      {images.map((img, i) => (
        <ImageComponent rootHeight={250} rootMaxWidth={300} mediaPadding={`50%`} imgSrc={img} key={i} />
      ))}
    </div>
  );
}
