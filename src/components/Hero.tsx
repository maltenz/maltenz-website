import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, Container, Typography, Box, Stack } from '@mui/material';

type HeroProps = {
  title: string;
  subtitle?: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
};

export default function Hero({ title, subtitle, description, ctaText, ctaLink, backgroundImage }: HeroProps) {
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      };

  return (
    <Box
      sx={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        ...backgroundStyle,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
          {subtitle && (
            <Typography
              variant="h6"
              component="p"
              sx={{
                mb: 2,
                fontWeight: 400,
                opacity: 0.9,
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              {subtitle}
            </Typography>
          )}

          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 3,
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
              lineHeight: 1.1,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="h5"
            component="p"
            sx={{
              mb: 4,
              fontWeight: 300,
              opacity: 0.9,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>

          {ctaText && (
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                href={ctaLink || '#'}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: 2,
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'grey.100',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {ctaText}
              </Button>
            </Stack>
          )}
        </Box>
      </Container>
    </Box>
  );
}
