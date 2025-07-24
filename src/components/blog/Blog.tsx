import * as React from 'react';

import Container from '@mui/material/Container';

import AppAppBar from './AppAppBar';
import Footer from './Footer';
import MainContent from './MainContent';
import Theme from '../../theme/Theme';

export default function Blog() {
  return (
    <Theme>
      <AppAppBar />

      <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
        <MainContent />
      </Container>

      <Footer />
    </Theme>
  );
}
