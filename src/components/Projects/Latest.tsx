import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import type { ProjectEntry } from '../../types/content';
import Author from '../Author';

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const TitleTypography = styled(Typography)({
  position: 'relative',
  textDecoration: 'none',
  '&:hover': { cursor: 'pointer' },
  '& .arrow': {
    visibility: 'hidden',
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  '&:hover .arrow': {
    visibility: 'visible',
    opacity: 0.7,
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '3px',
    borderRadius: '8px',
  },
  '&.Mui-focused .arrow': {
    visibility: 'visible',
    opacity: 1,
  },
});

type LatestProps = {
  data: ProjectEntry[];
};

export default function Latest({ data }: LatestProps) {
  return (
    <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
      <Typography variant="h2" gutterBottom mt={4}>
        Latest
      </Typography>

      <Grid container spacing={20} columns={12} sx={{ my: 2 }}>
        {data?.map((post) => (
          <Grid key={post.slug} size={{ xs: 12, sm: 6 }}>
            <Box
              component="img"
              src={post.data.image || 'https://placehold.co/600x400/7322c3/orange'}
              alt={post.data.title}
              sx={{
                width: '100%',
                objectFit: 'cover',
                borderRadius: 2,
                mb: 2,
              }}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, height: '100%' }}>
              <Typography variant="caption">
                {post.data.tags && post.data.tags.length > 0 ? post.data.tags[0] : ''}
              </Typography>

              <TitleTypography gutterBottom variant="h6">
                {post.data.title}
                <NavigateNextRoundedIcon className="arrow" sx={{ fontSize: '1rem' }} />
              </TitleTypography>

              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {post.data.description}
              </StyledTypography>

              <Box
                sx={{
                  mt: 2,
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 2,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Author />

                <Typography variant="caption">
                  {post.data.publishDate
                    ? new Date(post.data.publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                    : ''}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4 }}>
        <Pagination hidePrevButton hideNextButton count={10} boundaryCount={10} />
      </Box>
    </Container>
  );
}
