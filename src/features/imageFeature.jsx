import React from 'react';
import ImageComponent from '../components/imageComponent';

import image1 from '../assets/images/kettlebell.jpg';
import image2 from '../assets/images/olympicLift.jpg';
import image3 from '../assets/images/rowMachine.jpg';

export default function ImageFeature() {
  return (
    <div>
      <ImageComponent imgSrc={image1} cardTitle="1" />;
      <ImageComponent imgSrc={image2} cardTitle="2" />;
      <ImageComponent imgSrc={image3} cardTitle="3" />;
    </div>
  );
}
