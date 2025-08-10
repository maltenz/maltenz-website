import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import type { HeroData } from '../../types/content';
import Author from '../Author';
import TagList, { Tags } from '../Taglist';

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  // flexGrow: 1,
  maxWidth: 780,
}));

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
    <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div>
          <Typography variant="h1" gutterBottom sx={{ whiteSpace: 'pre-line', mt: 0, mb: 0 }}>
            {data.title
              .replace('Aimii,', '|AIMI|')
              .split('|')
              .map((part) => {
                if (part === 'AIMI') {
                  return (
                    <Box
                      key="aimi-styled"
                      component="span"
                      sx={{
                        fontFamily: '"Pacifico", cursive',
                      }}
                    >
                      Aimii,
                    </Box>
                  );
                }
                return part;
              })}
          </Typography>
        </div>

        <Grid container spacing={2} columns={12}>
          <Grid size={{ xs: 12, md: 12 }} sx={{ height: '100%' }}>
            <Typography variant="h4" mb={2} sx={{ fontWeight: '400' }}>
              Demo
            </Typography>

            <StyledCard variant="outlined">
              <Box component="img" src="/brand/build-your-dream-min.png" sx={{ borderRadius: 1 }} />

              <StyledCardContent>
                <TagList tags={[Tags.Sketch, Tags.Source]} sx={{ mb: 2 }} />

                <Typography variant="h4">
                  Get started with{' '}

                  <Typography
                    component="span"
                    sx={{
                      fontFamily: '"Pacifico", cursive',
                    }}
                  >
                    Aimii
                  </Typography>
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
                  {data.description}
                </Typography>
              </StyledCardContent>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 2,
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
  );
}
