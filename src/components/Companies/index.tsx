import { Box, Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

import { useThemeStore } from '../../stores/themeStore';

const companyLogos = [
  '/logos/xero.png',
  '/logos/snipes.png',
  '/logos/sky.png',
  '/logos/maori.png',
  '/logos/loreal.png',
  '/logos/flicks.png',
  '/logos/dmdn.png',
  '/logos/believeit.png',
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
              height: { xs: 56, sm: 80, md: 120 },
              maxWidth: 160,
              objectFit: 'contain',
              background: 'none',
              mr: 2,
              filter: `grayscale(100%) contrast(10) ${isDark ? 'invert(1)' : ''}`,
              opacity: 0.5,
            }}
          />
        ))}
      </Grid>
    </Container>
  );
}
