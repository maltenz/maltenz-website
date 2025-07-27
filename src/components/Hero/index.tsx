import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import AppAppBar from './lib/AppAppBar';
import Footer from './lib/Footer';
import Theme from '../../theme/Theme';
import type { HeroData } from '../../types/content';
import Author from '../Author';

const cardData = [
  {
    img: 'https://picsum.photos/800/450?random=1',
    tag: 'Engineering',
    title: 'Revolutionizing software development with cutting-edge tools',
    description:
      'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
  },
];

const SyledCard = styled(Card)(({ theme }) => ({
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

const SyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
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
    <Theme>
      <AppAppBar />

      <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div>
            <Typography variant="h1" gutterBottom sx={{ whiteSpace: 'pre-line' }}>
              {data.title}
            </Typography>
          </div>

          <Grid container spacing={2} columns={12}>
            <Grid size={{ xs: 12, md: 12 }}>
              <Typography variant="h3" mb={4}>
                Demo
              </Typography>

              <SyledCard variant="outlined">
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

                <SyledCardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    {data.tag && data.tag.join(', ')}
                  </Typography>

                  <Typography gutterBottom variant="h6" component="div">
                    {data.subtitle || cardData[0].title}
                  </Typography>

                  <StyledTypography variant="body1" color="text.secondary" gutterBottom>
                    {data.description || cardData[0].description}
                  </StyledTypography>
                </SyledCardContent>

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
              </SyledCard>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Footer />
    </Theme>
  );
}
