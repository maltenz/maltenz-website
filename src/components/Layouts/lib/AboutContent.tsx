import { Typography, Box, Grid } from '@mui/material';
import Container from '@mui/material/Container';

export default function AboutContent() {
  return (
    <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
      <Typography variant="h2" sx={{ mb: 4 }}>
        About
      </Typography>

      <Grid container spacing={6}>
        {/* Left Column - Profile Image */}
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
              src="/author/malte-boeing.jpeg"
              alt="Malte Boeing"
              sx={{
                width: '100%',
                maxWidth: 400,
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
                border: '1px solid',
                borderColor: 'divider',
              }}
            />
          </Box>
        </Grid>

        {/* Right Column - Content */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Box sx={{ pl: { md: 4 } }}>
            <Typography variant="h3" gutterBottom>
              Malte Boeing
            </Typography>

            <Typography variant="h5" color="primary" gutterBottom>
              Creative Developer & Designer
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Passionate about creating digital experiences that bridge the gap between design and technology. With
              expertise in modern web development, brand design, and user experience, I help businesses and individuals
              bring their creative visions to life.
            </Typography>

            <Typography variant="h6" gutterBottom>
              What I Do
            </Typography>

            <Typography variant="body2" color="text.secondary" paragraph>
              I specialize in full-stack web development, brand identity design, and creative problem-solving. From
              concept to deployment, I work with modern technologies and design principles to create solutions that are
              both beautiful and functional.
            </Typography>

            <Typography variant="body2" color="text.secondary">
              When I&apos;m not coding or designing, you&apos;ll find me exploring new technologies, working on creative
              projects, or sharing knowledge with the development community.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
