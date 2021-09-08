import * as React from 'react';

import HeroFeature from '@features/HeroFeature';
import ImageFeature from '@features/ImageFeature';
import NewsletterFeature from '@features/NewsletterFeature';
import TextFeature from '@features/IndexTextFeature';

// const seoProperties = {
//   'og:site_name': 'Harvest Health & Fitness',
//   'og:title': 'Harvest Health & Fitness',
//   'og:description':
//     'Harvest Health & Fitness specializes in training for all. We offer one on one in-person training and a wide variety of premier virtual training sessions.',
//   'og:image': 'null',
// };

const IndexPage = () => (
  <>
    {/* <Seo title="Home" /> */}
    <HeroFeature />
    <TextFeature />
    <ImageFeature />
    <NewsletterFeature formName="newsLetter" />
  </>
);

export default IndexPage;
