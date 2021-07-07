import React from 'react';
import { Container } from '@material-ui/core';

import ContactUsFeature from '../features/contactUsFeature';
import NewsletterFeature from '../features/newsletterFeature';

export default function ContactUsPage() {
  return (
    <Container style={{ padding: 0}}>
      <ContactUsFeature />
    </Container>
  );
}
