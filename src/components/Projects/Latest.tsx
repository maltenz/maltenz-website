import { Container, Link } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import type { ProjectEntry } from '../../types/content';
import Author from '../Author';
import TagList, { Tags } from '../Taglist';

type LatestProps = {
  data: ProjectEntry[];
};

export default function Latest({ data }: LatestProps) {
  return (
    <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
      <Typography variant="h2" mb={-2}>
        Latest
      </Typography>

      <Grid container spacing={{ xs: 8, md: 10 }} columns={12} sx={{ my: 2 }}>
        {data?.map((post) => (
          <Grid key={post.slug} size={{ xs: 12, sm: 6 }}>
            <Box
              component="img"
              src={post.data.image || '/brand/dali.png'}
              alt={post.data.title}
              sx={{
                width: '100%',
                objectFit: 'cover',
                borderRadius: 1,
                mb: 2,
              }}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, height: '100%' }}>
              {/* <Typography variant="caption">
                {post.data.tags && post.data.tags.length > 0 ? post.data.tags[0] : ''}
              </Typography> */}

              <TagList tags={[Tags.Sketch, Tags.Source]} sx={{ mb: 3 }} />

              <Link href={`/projects/${post.slug}`} gutterBottom variant="h6">
                {post.data.title}
              </Link>

              <Typography variant="body1" color="text.secondary" gutterBottom>
                {post.data.description}
              </Typography>

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
    </Container>
  );
}
