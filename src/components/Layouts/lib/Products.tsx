import { Typography, Box, Grid } from '@mui/material';
import Container from '@mui/material/Container';

type ProductsProps = {
  slogan?: 'main' | 'product' | 'about';
};

export default function Products({ slogan = 'main' }: ProductsProps) {
  const getSloganText = () => {
    switch (slogan) {
      case 'main':
        return 'Express Yourself';
      case 'product':
        return 'Quality First';
      case 'about':
        return 'Built to Last';
      default:
        return 'Express Yourself';
    }
  };

  return (
    <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
      <Typography variant="h2" sx={{ mb: 4 }}>
        Store
      </Typography>

      <Grid container spacing={6}>
        {/* Left Column - Shirt Image */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src="/brand/product-cry-shirt.png"
              alt="Aimii T-Shirt Design"
              sx={{
                width: '100%',
                maxWidth: 400,
                height: 'auto',
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
              }}
            />
          </Box>
        </Grid>

        {/* Right Column - Content */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ pl: { md: 4 } }}>
            <Typography variant="h3" gutterBottom>
              Aimii Collection
            </Typography>

            <Typography variant="h5" color="primary" gutterBottom>
              Premium T-Shirt
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Express yourself with our signature Aimii design featuring bold colors and geometric patterns that reflect
              creativity and innovation.
            </Typography>

            <Typography variant="h6" color="warning.main" gutterBottom>
              Coming Soon
            </Typography>

            <Typography variant="body2" color="text.secondary">
              We&apos;re currently sourcing the highest quality suppliers to ensure our merch meets the same standards
              as our creative work. Stay tuned for updates on availability.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
