import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import Header from '../components/header';
import Footer from '../components/footer';
import theme from '../themes';


function index({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}

export default index;
