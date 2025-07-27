import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import type { HeroData } from '../../types/content';
import Author from '../Author';
import Page from '../Layouts/Page';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
  maxWidth: 780,
});

type HeroProps = {
  data: HeroData;
};

export default function Hero({ data }: HeroProps) {
  const getDisplayDate = () => {
    if (data.publishDate) {
      return new Date(data.publishDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }

    return 'No date available';
  };

  return (
    <Page>
      <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div>
            <Typography variant="h1" gutterBottom sx={{ whiteSpace: 'pre-line' }}>
              {data.title}
            </Typography>
          </div>

          <Grid container spacing={2} columns={12}>
            <Grid size={{ xs: 12, md: 12 }}>
              <Typography variant="h4" mb={2} sx={{ fontWeight: '400' }}>
                Demo
              </Typography>

              <StyledCard variant="outlined">
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '56.25%', // 16:9 aspect ratio
                    height: 0,
                    overflow: 'hidden',
                  }}
                >
                  <iframe
                    src={data.vimeo}
                    title="vimeo-player"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 0,
                    }}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    allowFullScreen
                  />
                </Box>

                <StyledCardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    {data.tag && data.tag.join(', ')}
                  </Typography>

                  <Typography gutterBottom variant="h4" component="div">
                    {data.subtitle}
                  </Typography>

                  <Typography variant="body1" color="text.secondary" gutterBottom sx={{ whiteSpace: 'pre-line' }}>
                    {data.description}
                  </Typography>
                </StyledCardContent>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px',
                  }}
                >
                  <Author />
                  <Typography variant="caption">{getDisplayDate()}</Typography>
                </Box>
              </StyledCard>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Page>
  );
}
