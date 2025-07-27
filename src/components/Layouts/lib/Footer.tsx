/* eslint-disable jsx-a11y/anchor-is-valid */
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{ mb: 1 }}>
              <img src="/maltenz-white.svg" alt="logo" />
            </Box>

            <Typography variant="body2" sx={{ fontWeight: 600, gutterBottom: true }}>
              Newsletter
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Subscribe to our newsletter for updates and promotions.
            </Typography>

            <Stack direction="row" spacing={1} useFlexGap>
              <IconButton
                color="inherit"
                size="small"
                href="https://github.com/maltenz"
                aria-label="GitHub"
                sx={{ alignSelf: 'center' }}
              >
                <GithubIcon />
              </IconButton>

              <IconButton
                color="inherit"
                size="small"
                href="https://www.linkedin.com/in/malte-boeing-858990170/"
                aria-label="LinkedIn"
                sx={{ alignSelf: 'center' }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Links
          </Typography>

          <Link color="text.secondary" variant="body2" href="#">
            Projects
          </Link>

          <Link color="text.secondary" variant="body2" href="#">
            Solutions
          </Link>

          <Link color="text.secondary" variant="body2" href="#">
            About
          </Link>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Legal
          </Typography>

          <Link color="text.secondary" variant="body2" href="#">
            Terms
          </Link>

          <Link color="text.secondary" variant="body2" href="#">
            Privacy
          </Link>

          <Link color="text.secondary" variant="body2" href="#">
            Contact
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Link
          color="text.secondary"
          variant="body2"
          href="#"
          underline="none"
          sx={{
            flex: '1',
            '&:before': {
              display: 'none',
            },
          }}
        >
          Privacy Policy
        </Link>

        <Link
          color="text.secondary"
          variant="body2"
          href="#"
          underline="none"
          sx={{
            flex: '1',
            textAlign: 'center',
            '&:before': {
              display: 'none',
            },
          }}
        >
          Terms of Service
        </Link>

        <Typography
          variant="body2"
          sx={{
            flex: '1',
            textAlign: 'right',
            color: 'text.secondary',
            mt: 1,
            '&:before': {
              display: 'none',
            },
          }}
        >
          {`Copyright © ${new Date().getFullYear()}`}
        </Typography>
      </Box>
    </Container>
  );
}
