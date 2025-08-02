import type { ReactNode } from 'react';

import { Typography, Box, Stack, Container, styled } from '@mui/material';

import Theme from '../../theme/Theme';
import type { ProjectData } from '../../types/content';
import AppBar from '../Layouts/lib/AppBar';
import Footer from '../Layouts/lib/Footer';

const StyleInner = styled('div')({
  maxWidth: 860,
});

export default function Project({
  title,
  publishDate,
  tags,
  image = 'https://placehold.co/600x200/7322c3/orange',
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

      <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
        <Typography variant="h1" gutterBottom fontWeight={600}>
          {title}
        </Typography>

        <Stack gap={4}>
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

          <StyleInner>
            <Typography sx={{ mb: 4 }} variant="caption" component="div">
              {tags && tags.join(', ')}
            </Typography>

            {children}

            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography variant="body2" color="text.secondary">
                  {formattedDate}
                </Typography>
              </Box>
            </Stack>
          </StyleInner>
        </Stack>
      </Container>

      <Footer />
    </Theme>
  );
}
