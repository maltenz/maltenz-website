/* eslint-disable jsx-a11y/anchor-is-valid */
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useThemeStore } from '../../../stores/themeStore';
import { gray } from '../../../theme/themePrimitives';

export default function Footer() {
  const { colorScheme } = useThemeStore();
  const isDark = colorScheme === 'dark';

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
              <svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>Maltenz Logo</title>

                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g fill={isDark ? gray[300] : gray[500]}>
                    <path d="M0.00579885055,20.37 C0.00194026805,20.2088011 -7.10542736e-15,20.0471272 -7.10542736e-15,19.885 C-7.10542736e-15,8.90281775 8.90281775,-7.10542736e-15 19.885,-7.10542736e-15 C30.8671822,-7.10542736e-15 39.77,8.90281775 39.77,19.885 C39.77,30.7050551 31.128102,39.5066868 20.37,39.7642011 L20.37,39.77 L3.88,39.77 C1.73713517,39.77 -7.28709131e-15,38.0328648 -7.54951657e-15,35.89 L-7.10542736e-15,20.37 L0.00579885055,20.37 Z M11.8113507,18.920457 L11.7380494,16.8582455 L8.94858154,16.8582455 L8.94858154,27.76 L11.911177,27.76 L11.911177,21.2217136 C11.911177,20.7736104 11.9940619,20.3952148 12.1598342,20.0865157 C12.3256065,19.7778166 12.5502505,19.5426824 12.833773,19.3811062 C13.1172955,19.21953 13.432543,19.1387431 13.7795252,19.1387431 C14.2933158,19.1387431 14.7114961,19.30055 15.0340786,19.6241687 C15.3566612,19.9477873 15.5179501,20.3825964 15.5179501,20.9286089 L15.5179501,27.76 L18.3801501,27.76 L18.3801501,21.0994054 C18.3801501,20.7072502 18.454643,20.3647801 18.6036308,20.0719848 C18.7526187,19.7791894 18.96483,19.550453 19.240271,19.3857685 C19.5157121,19.2210841 19.8414757,19.1387431 20.2175716,19.1387431 C20.7156138,19.1387431 21.1350115,19.2931681 21.4757772,19.6020226 C21.8165429,19.9108772 21.9869232,20.3805238 21.9869232,21.0109766 L21.9869232,27.76 L24.9496741,27.76 L24.9496741,20.4521195 C24.9496741,19.6451192 24.7958967,18.9610078 24.4883372,18.3997649 C24.1807778,17.8385221 23.7601886,17.4103438 23.2265572,17.1152172 C22.6929258,16.8200907 22.0874774,16.6725297 21.4101939,16.6725297 C20.840766,16.6725297 20.3044229,16.7807204 19.8011485,16.9971051 C19.2978741,17.2134897 18.8645932,17.5384245 18.5012928,17.9719191 C18.2560674,18.2645252 18.0587925,18.6066697 17.9094659,18.9983575 C17.7009599,18.323918 17.3908211,17.7945572 16.9790444,17.4102646 C16.4520438,16.9184389 15.7890422,16.6725297 14.9900197,16.6725297 C14.4959146,16.6725297 14.024144,16.7718103 13.5746938,16.9703744 C13.1252436,17.1689386 12.7320324,17.4748357 12.3950484,17.888075 C12.1608654,18.1752507 11.9663003,18.5193763 11.8113507,18.920457 Z M29.2171222,27.945405 C29.6972403,27.945405 30.1025475,27.7810339 30.433056,27.4522867 C30.7635646,27.1235395 30.9288164,26.7208224 30.9288164,26.2441234 C30.9288164,25.7662847 30.7635646,25.3632827 30.433056,25.0351053 C30.1025475,24.7069279 29.6972403,24.5428417 29.2171222,24.5428417 C28.7380402,24.5428417 28.332992,24.7069279 28.0019654,25.0351053 C27.6709388,25.3632827 27.505428,25.7662847 27.505428,26.2441234 C27.505428,26.7208224 27.6709388,27.1235395 28.0019654,27.4522867 C28.332992,27.7810339 28.7380402,27.945405 29.2171222,27.945405 Z" />
                  </g>
                </g>
              </svg>
            </Box>

            <Typography variant="body2" gutterBottom sx={{ fontWeight: 600 }}>
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
