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
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <TagList tags={[Tags.Feedback, Tags.Source, Tags.BundleSize]} />

              <Typography variant="body2" color="text.secondary" textAlign="right">
                {formattedDate}
              </Typography>
            </Box>

            {/* Instagram Buttons */}
            <Box sx={{ display: 'flex', gap: 2, mb: 4, justifyContent: 'center' }}>
              {/* Malt Biscuit Instagram */}
              <Box
                component="a"
                href="https://instagram.com/maltbiscuit"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  px: 3,
                  py: 1.5,
                  borderRadius: 3,
                  background: `linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)`,
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  '&:hover': {
                    transform: 'translateY(-2px) scale(1.02)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                  },
                }}
              >
                <Box component="svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </Box>

                <Typography
                  variant="button"
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.875rem',
                  }}
                >
                  @maltbiscuit
                </Typography>
              </Box>

              {/* Dali Instagram */}
              <Box
                component="a"
                href="https://instagram.com/dali"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  px: 3,
                  py: 1.5,
                  borderRadius: 3,
                  background: 'linear-gradient(45deg, #833AB4, #FD1D1D, #F77737, #FCAF45)',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  '&:hover': {
                    transform: 'translateY(-2px) scale(1.02)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                  },
                }}
              >
                <Box component="svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </Box>

                <Typography
                  variant="button"
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.875rem',
                  }}
                >
                  @dalisusanto
                </Typography>
              </Box>
            </Box>

            <StyledMarkdownContainer>{children}</StyledMarkdownContainer>
          </StyledInner>
        </Stack>
      </Container>

      <Footer />
    </AppWrapper>
  );
}
