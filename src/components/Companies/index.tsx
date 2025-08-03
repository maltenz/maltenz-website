import { Box, Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

import { useThemeStore } from '../../stores/themeStore';

const companyLogos = [
  '/logos/xero.png',
  '/logos/snipes.png',
  '/logos/sky.png',
  '/logos/moari-tv.png',
  '/logos/bion.png',
  '/logos/loreal.png',
  '/logos/flicks.png',
  '/logos/dmdn.png',
];

export default function Companies() {
  const { colorScheme } = useThemeStore();
  const isDark = colorScheme === 'dark';

  return (
    <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h4" mb={2} sx={{ fontWeight: '400' }}>
            My background
          </Typography>
        </Grid>

        {companyLogos.map((src) => (
          <Box
            component="img"
            key={src}
            src={src}
            alt=""
            sx={{
              height: { xs: 56, sm: 70, md: 110 },
              maxWidth: 110,
              objectFit: 'contain',
              background: 'none',
              mr: 2,
              filter: `grayscale(100%) ${isDark ? 'invert(1)' : ''}`,
            }}
          />
        ))}
      </Grid>
    </Container>
  );
}
