import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Button } from '@material-ui/core';

import Seo from '../components/Seo';
import HeroFeature from '../features/heroFeature';
import ImageFeature from '../features/imageFeature';
import NewsletterFeature from '../features/newsletterFeature';
import TextFeature from '../features/textFeature';

const seoProperties = {
  'og:site_name': 'Harvest Health & Fitness',
  'og:title': 'Harvest Health & Fitness',
  'og:description':
    'Harvest Health & Fitness specializes in training for all. We offer one on one in-person training and a wide variety of premier virtual training sessions.',
  'og:image': 'null',
};

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <HeroFeature />
    <TextFeature />
    <ImageFeature />
    <NewsletterFeature />
  </>
);

export default IndexPage;
