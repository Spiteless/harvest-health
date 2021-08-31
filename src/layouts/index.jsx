import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import Header from '@components/Header';
import Footer from '@components/Footer';
import theme from '../themes';

function index({ children }) {
  return (
    <ThemeProvider theme={theme}>    
      <CssBaseline />
      <Header siteTitle="Harvest Health" />
      {children}
      <Footer />
    </ThemeProvider>
  );
}

export default index;
