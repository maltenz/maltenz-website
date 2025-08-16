import type { ReactNode } from 'react';

import { Typography, Box, Stack, Container, styled } from '@mui/material';

import type { ProjectData } from '../../types/content';
import AppWrapper from '../AppWrapper';
import Footer from '../Layouts/lib/Footer';
import TagList, { Tags } from '../Taglist';

const StyledInner = styled('div')({
  width: '100%',
  maxWidth: 900,
  margin: '0 auto',
});

const StyledMarkdownContainer = styled('div')(({ theme }) => ({
  '& h1': {
    ...theme.typography.h1,
  },
  '& h2': {
    ...theme.typography.h2,
  },
  '& h3': {
    ...theme.typography.h3,
  },
  '& h4': {
    ...theme.typography.h4,
  },
  '& h5': {
    ...theme.typography.h5,
  },
  '& h6': {
    ...theme.typography.h6,
  },
  '& p': {
    ...theme.typography.body1,
    color: theme.palette.text.secondary,
  },
  '& ul': {
    color: theme.palette.text.secondary,
  },
  '& li': {
    color: theme.palette.text.secondary,
  },
  '& strong': {
    color: theme.palette.text.primary,
  },
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
  },

  '& img ': {
    maxWidth: '100%',
    border: '1px solid',
    borderColor: 'divider',
  },
  // add more styles for other elements as needed
}));

export default function Project({
  title,
  publishDate,
  // tags,
  image = 'https://placehold.co/600x300/7322c3/orange',
  children,
}: ProjectData & { children: ReactNode }) {
  const formattedDate = publishDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <AppWrapper>
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', alignContent: 'flex-start', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <Stack gap={4}>
          <Typography variant="h1" gutterBottom sx={{ whiteSpace: 'pre-line', mt: 0, mb: 2, fontWeight: '700' }}>
            {title}
          </Typography>

          {image && (
            <Box
              component="img"
              src={image}
              sx={{
                width: '100%',
                objectFit: 'cover',
                borderRadius: 1,
                mb: 2,
                border: '1px solid',
                borderColor: 'divider',
              }}
            />
          )}

          <StyledInner>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <TagList tags={[Tags.Feedback, Tags.Source, Tags.BundleSize]} />

              <Typography variant="body2" color="text.secondary" textAlign="right">
                {formattedDate}
              </Typography>
            </Box>

            <StyledMarkdownContainer>{children}</StyledMarkdownContainer>
          </StyledInner>
        </Stack>
      </Container>

      <Footer />
    </AppWrapper>
  );
}
