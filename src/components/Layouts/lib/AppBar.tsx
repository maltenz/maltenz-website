import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack, useTheme } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import { alpha } from '@mui/material/styles';
import { gsap } from 'gsap';
import useWindowSize from 'react-use/lib/useWindowSize';

import { useThemeStore } from '../../../stores/themeStore';
import { brand } from '../../../theme/themePrimitives';

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
        color: 'text.primary',
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
  const { colorScheme, toggleColorScheme } = useThemeStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  const isDark = colorScheme === 'dark';

  const bgColor = {
    bgcolor: alpha(theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.common.black, 0.75),
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: 'divider',
    MozBorderRadiusBottomleft: 'none',
  };

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (mobileMenuOpen) {
        // Show animation
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
        // Hide animation
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        });
      }
    }
  }, [mobileMenuOpen]);

  // Close mobile menu when window width exceeds md breakpoint
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
                <Button
                  component="a"
                  href="/"
                  aria-label="Go home"
                  sx={{
                    minWidth: 0, // override default minWidth
                    width: 40,
                    height: 40,
                    padding: 0,
                    borderRadius: '40px 40px 40px 10px', // optional: make it round
                    fontSize: 20,
                    backgroundColor: isDark ? brand[400] : brand[500],
                    '&:hover': { backgroundColor: isDark ? brand[300] : brand[400] },
                    color: 'primary.contrastText',
                    fontWeight: 800,
                    marginRight: '20px',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  m.
                </Button>

                <Box sx={{ mt: 0.4, display: { xs: 'none', md: 'flex' }, gap: 3 }}>
                  <NavLink href="/services">Services</NavLink>
                  <NavLink href="/projects">Projects</NavLink>
                  <NavLink href="/about">About</NavLink>
                </Box>
              </Box>

              <IconButton
                onClick={toggleColorScheme}
                size="small"
                color="primary"
                sx={{
                  ...iconSx,
                  display: 'flex',
                }}
              >
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
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
                    color: mobileMenuOpen ? menuIconActiveColor : 'text.primary',
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
                  <NavLink sx={mobileMenuSx} href="/services">
                    Services
                  </NavLink>

                  <NavLink sx={mobileMenuSx} href="/projects">
                    Projects
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
