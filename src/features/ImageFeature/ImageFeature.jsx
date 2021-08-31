import React from 'react';
import { makeStyles } from '@material-ui/core';

import ImageComponent from '@components/ImageComponent';

import image1 from '@images/kettlebell.jpg';
import image2 from '@images/olympicLift.jpg';
import image3 from '@images/rowMachine.jpg';

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
    '& > *:nth-child(0)': {
      backgroundPositionX: theme.utils.backgroundFocus(25, 75),
      border: '3px red solid',
    },
  }),
}));

export default function ImageFeature() {
  const imageData = [
    { img: image1, ratio: 50, bg: 50 },
    { img: image2, ratio: 25, bg: 75 },
    { img: image3, ratio: 25, bg: 75 },
  ];
  const sx = useStyles();
  return (
    <div className={sx.root}>
      {imageData.map((img, i) => (
        <ImageComponent
          rootHeight={250}
          rootMaxWidth={300}
          mediaPadding="50%"
          imgSrc={img.img}
          key={i}
          bgFocus={{
            ratio: img.ratio,
            bg: img.bg,
          }}
        />
      ))}
    </div>
  );
}
