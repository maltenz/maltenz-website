import { useState } from 'react';
import type { ReactNode } from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack, useTheme } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';

import { useThemeStore } from '../../../stores/themeStore';
import { brand } from '../../../theme/themePrimitives';

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  const { colorScheme } = useThemeStore();

  return (
    <Link
      href={href}
      sx={(theme) => ({
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
      })}
    >
      {children}
    </Link>
  );
}

function AppBar() {
  const theme = useTheme();
  const { colorScheme, toggleColorScheme } = useThemeStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  const isDark = colorScheme === 'dark';

  const bgColor = {
    bgcolor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: 'divider',
    MozBorderRadiusBottomleft: 'none',
  };

  return (
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
          gap={2}
          variant="regular"
          sx={(muiTheme) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            borderRadius: muiTheme.spacing(4), // theme-based large radius for pill shape
            // maxHeight: 40,
            height: 500,
            paddingTop: 1.25,
            ...bgColor,
          })}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
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

              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
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
                minHeight: '35px',
                minWidth: '35px',
                mr: 1,
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
                  minHeight: '35px',
                  minWidth: '35px',
                  display: {
                    xs: 'flex',
                    md: 'none',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>

          {mobileMenuOpen && (
            <Box>
              <img alt="" src="https://placehold.co/600x400/7322c3/orange" />
            </Box>
          )}
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}

export default AppBar;
