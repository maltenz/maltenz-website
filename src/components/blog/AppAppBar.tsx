import * as React from 'react';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    // Check the current theme on mount
    const currentScheme = document.documentElement.getAttribute('data-mui-color-scheme');
    setIsDark(currentScheme === 'dark');
  }, []);

  const toggleColorMode = () => {
    const newMode = isDark ? 'light' : 'dark';

    // Method 1: Set the data attribute for MUI CSS variables
    document.documentElement.setAttribute('data-mui-color-scheme', newMode);

    // Method 2: Also set a CSS custom property
    document.documentElement.style.setProperty('--mui-palette-mode', newMode);

    // Method 3: Force a CSS class toggle as fallback
    document.documentElement.classList.toggle('dark-mode', !isDark);

    // Method 4: Try to trigger a re-render by updating the body class
    document.body.classList.toggle('dark', !isDark);

    setIsDark(!isDark);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.getBoundingClientRect().top + window.pageYOffset - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
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
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img src="/favicon.svg" style={logoStyle} alt="logo" />

              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem onClick={() => scrollToSection('features')} sx={{ py: '6px', px: '12px' }}>
                  <Button variant="text" color="info" size="small">
                    Features
                  </Button>
                </MenuItem>

                <MenuItem onClick={() => scrollToSection('testimonials')} sx={{ py: '6px', px: '12px' }}>
                  <Button variant="text" color="info" size="small">
                    Testimonials
                  </Button>
                </MenuItem>

                <MenuItem onClick={() => scrollToSection('highlights')} sx={{ py: '6px', px: '12px' }}>
                  <Button variant="text" color="info" size="small">
                    Highlights
                  </Button>
                </MenuItem>

                <MenuItem onClick={() => scrollToSection('pricing')} sx={{ py: '6px', px: '12px' }}>
                  <Button variant="text" color="info" size="small">
                    Pricing
                  </Button>
                </MenuItem>

                <MenuItem onClick={() => scrollToSection('faq')} sx={{ py: '6px', px: '12px' }}>
                  <Button variant="text" color="info" size="small">
                    FAQ
                  </Button>
                </MenuItem>

                <MenuItem onClick={() => scrollToSection('blog')} sx={{ py: '6px', px: '12px' }}>
                  <Button variant="text" color="info" size="small">
                    Blog
                  </Button>
                </MenuItem>
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <IconButton
                onClick={toggleColorMode}
                color="primary"
                size="small"
                sx={{
                  bgcolor: isDark ? 'primary.dark' : 'primary.light',
                  '&:hover': { bgcolor: isDark ? 'primary.main' : 'primary.main' },
                }}
              >
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>

              <Button color="primary" variant="text" size="small" component="a" href="/admin" target="_blank">
                Sign in
              </Button>

              <Button color="primary" variant="contained" size="small" component="a" href="/admin" target="_blank">
                Sign up
              </Button>
            </Box>

            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>

              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseRoundedIcon />
                    </IconButton>
                  </Box>

                  <MenuItem onClick={() => scrollToSection('features')}>Features</MenuItem>
                  <MenuItem onClick={() => scrollToSection('testimonials')}>Testimonials</MenuItem>
                  <MenuItem onClick={() => scrollToSection('highlights')}>Highlights</MenuItem>
                  <MenuItem onClick={() => scrollToSection('pricing')}>Pricing</MenuItem>
                  <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem>
                  <MenuItem onClick={() => scrollToSection('blog')}>Blog</MenuItem>
                  <Divider />

                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/admin"
                      target="_blank"
                      sx={{ width: '100%' }}
                    >
                      Sign up
                    </Button>
                  </MenuItem>

                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/admin"
                      target="_blank"
                      sx={{ width: '100%' }}
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
