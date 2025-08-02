import type { ReactNode } from 'react';

import { Typography, Box, Stack, Container, styled } from '@mui/material';

import Theme from '../../theme/Theme';
import type { ProjectData } from '../../types/content';
import AppBar from '../Layouts/lib/AppBar';
import Footer from '../Layouts/lib/Footer';

const StyledInner = styled('div')({
  width: '100%',
  maxWidth: 900,
  margin: '0 auto',
});

export default function Project({
  title,
  publishDate,
  tags,
  image = 'https://placehold.co/600x300/7322c3/orange',
  children,
}: ProjectData & { children: ReactNode }) {
  const formattedDate = publishDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Theme>
      <AppBar />

      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', alignContent: 'flex-start', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <Stack gap={4}>
          <StyledInner>
            <Typography variant="h1" gutterBottom sx={{ whiteSpace: 'pre-line', mt: 6, mb: 4 }}>
              {title}
            </Typography>
          </StyledInner>

          {image && (
            <Box
              component="img"
              src={image}
              sx={{
                width: '100%',
                objectFit: 'cover',
                borderRadius: 2,
                mb: 2,
              }}
            />
          )}

          <StyledInner>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ mb: 4 }} variant="caption" component="div">
                {tags && tags.join(', ')}
              </Typography>

              <Typography variant="body2" color="text.secondary" textAlign="right">
                {formattedDate}
              </Typography>
            </Box>

            {children}
          </StyledInner>
        </Stack>
      </Container>

      <Footer />
    </Theme>
  );
}
