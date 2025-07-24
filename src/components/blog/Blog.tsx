import * as React from 'react';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import AppAppBar from './AppAppBar';
import Footer from './Footer';
import Latest from './Latest';
import MainContent from './MainContent';

type BlogProps = {
  disableCustomTheme?: boolean;
};

export default function Blog({ disableCustomTheme }: BlogProps) {
  return (
    <>
      <CssBaseline enableColorScheme />
      <AppAppBar />

      <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
        <MainContent />
        <Latest />
      </Container>

      <Footer />
    </>
  );
}
