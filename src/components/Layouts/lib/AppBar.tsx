import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import PaletteIcon from '@mui/icons-material/Palette';
import { Stack, useTheme } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { alpha } from '@mui/material/styles';
import { gsap } from 'gsap';
import useWindowSize from 'react-use/lib/useWindowSize';

import { useThemeStore } from '../../../stores/themeStore';
import type { ColorScheme } from '../../../stores/themeStore';
import { orangeVariant, purpleVariant, darkPurpleVariant, yellowVariant } from '../../../theme/themePrimitives';
import Logo from '../../Logo';

type NavLinkProps = {
  href: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
};

function NavLink({ href, children, sx }: NavLinkProps) {
  const { colorScheme } = useThemeStore();
  const theme = useTheme();

  return (
    <Link
      href={href}
      sx={{
        ...theme.typography.body2,
        textDecoration: 'none',
        fontWeight: 500,
        '&:hover': {
          color: colorScheme === 'dark' ? 'primary.light' : 'primary.main',
        },
        '&::before': {
          display: 'none',
        },
        ...sx,
      }}
    >
      {children}
    </Link>
  );
}

function AppBar() {
  const theme = useTheme();
  const { colorScheme, cycleColorScheme } = useThemeStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  const isDark = colorScheme === 'dark';

  // Function to get icon and tooltip for current theme
  const getThemeDisplay = (currentScheme: ColorScheme) => {
    switch (currentScheme) {
      case 'light':
        return { icon: <LightModeIcon sx={{ color: darkPurpleVariant[500] }} /> };
      case 'dark':
        return { icon: <DarkModeIcon sx={{ color: '#fff' }} /> };
      case 'purple':
        return { icon: <PaletteIcon sx={{ color: darkPurpleVariant[500] }} /> };
      case 'yellow':
        return { icon: <PaletteIcon sx={{ color: darkPurpleVariant[500] }} /> };
      case 'orange':
        return { icon: <PaletteIcon sx={{ color: darkPurpleVariant[500] }} /> };
      case 'dark-purple':
        return { icon: <PaletteIcon sx={{ color: darkPurpleVariant[500] }} /> };
      default:
        return { icon: <LightModeIcon /> };
    }
  };

  const themeDisplay = getThemeDisplay(colorScheme);

  // Function to get Logo variant that contrasts well with AppBar background
  const getLogoVariant = () => {
    switch (colorScheme) {
      case 'purple':
        return 'dark-purple'; // Yellow contrasts well with purple background
      case 'yellow':
        return 'orange'; // Dark purple contrasts well with yellow background
      case 'orange':
        return 'yellow'; // Dark purple contrasts well with orange background
      case 'dark-purple':
        return 'purple'; // Yellow contrasts well with dark purple background
      case 'dark':
        return 'yellow'; // Light logo on dark background
      case 'light':
      default:
        return 'dark-purple'; // Dark logo on light background
    }
  };

  const getThemeBackgroundColor = () => {
    switch (colorScheme) {
      case 'purple':
        return alpha(purpleVariant[400], 0.5);
      case 'yellow':
        return alpha(yellowVariant[400], 0.5);
      case 'orange':
        return alpha(orangeVariant[400], 0.5);
      case 'dark-purple':
        return alpha(darkPurpleVariant[600], 0.5);
      case 'dark':
        return alpha(theme.palette.common.black, 0.5);
      case 'light':
      default:
        return alpha(theme.palette.common.white, 0.5);
    }
  };

  const bgColor = {
    bgcolor: getThemeBackgroundColor(),
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: 'divider',
    MozBorderRadiusBottomleft: 'none',
  };

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (mobileMenuOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          {
            height: 0,
            opacity: 0,
            overflow: 'hidden',
          },
          {
            height: 'auto',
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
          },
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        });
      }
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (width >= theme.breakpoints.values.md && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [width, mobileMenuOpen, theme.breakpoints.values.md]);

  const mobileMenuSx = {
    width: '100%',
    ...theme.typography.body1,
    py: 2,
    fontWeight: 400,
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: theme.spacing(4),
    textAlign: 'center',
    backgroundColor: 'action.hover',

    '&:hover': {
      backgroundColor: 'action.selected',
    },

    '&:active': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },

    // fontSize: '2rem',
  } as const;

  const menuIconActiveColor = isDark ? 'primary.light' : 'primary.main';

  const iconSx = {
    minHeight: '35px',
    minWidth: '35px',
    borderRadius: '50%',
    display: 'flex',
  };

  return (
    <>
      <Backdrop
        open={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(false)}
        sx={{
          zIndex: (muiTheme) => muiTheme.zIndex.appBar - 1,
        }}
      />

      <MuiAppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            component={Stack}
            variant="regular"
            sx={(muiTheme) => ({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              borderRadius: muiTheme.spacing(2),
              paddingTop: 1.2,
              paddingBottom: 1.2,
              paddingLeft: `${muiTheme.spacing(1.2)} !important`,
              paddingRight: `${muiTheme.spacing(1.2)} !important`,
              ...bgColor,
            })}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'center',
                  px: 0,
                }}
              >
                <Link
                  href="/"
                  aria-label="Go home"
                  sx={{
                    display: 'flex',
                    mr: 2,
                    '&::before': {
                      display: 'none',
                    },
                  }}
                >
                  <Logo variant={getLogoVariant()} sx={{ ml: 0.5, mr: 1 }} />
                </Link>

                <Box sx={{ mt: 0.4, display: { xs: 'none', md: 'flex' }, gap: 3 }}>
                  <NavLink href="/latest">Latest</NavLink>
                  <NavLink href="/merch">Merch</NavLink>
                  <NavLink href="/about">About</NavLink>
                </Box>
              </Box>

              <IconButton
                onClick={cycleColorScheme}
                size="small"
                color="text.secondary"
                sx={{
                  ...iconSx,
                  display: 'flex',
                }}
              >
                {themeDisplay.icon}
              </IconButton>

              <Box>
                <IconButton
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  color="primary"
                  size="small"
                  sx={{
                    ...iconSx,
                    ml: 1,
                    display: {
                      xs: 'flex',
                      md: 'none',
                    },
                    color: mobileMenuOpen ? menuIconActiveColor : 'red',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>

            <Box
              ref={mobileMenuRef}
              sx={{
                width: '100%',
                overflow: 'hidden',
                height: 0,
              }}
            >
              <Box sx={{ py: 4 }}>
                <Stack gap={2}>
                  <NavLink sx={mobileMenuSx} href="/latest">
                    Latest
                  </NavLink>

                  <NavLink sx={mobileMenuSx} href="/merch">
                    Merch
                  </NavLink>

                  <NavLink sx={mobileMenuSx} href="/about">
                    About
                  </NavLink>
                </Stack>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </>
  );
}

export default AppBar;
