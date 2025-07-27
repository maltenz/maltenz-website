import { useState } from 'react';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';

import { useThemeStore } from '../../../stores/themeStore';
import { brand } from '../../../theme/themePrimitives';

function AppBar() {
  const [open, setOpen] = useState(false);
  const { colorScheme, toggleColorScheme } = useThemeStore();
  const isDark = colorScheme === 'dark';

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
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              MozBorderRadiusBottomleft: 'none',
            })}
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
                sx={{
                  minWidth: 0, // override default minWidth
                  width: 40,
                  height: 40,
                  padding: 0,
                  borderRadius: '40px 40px 40px 10px', // optional: make it round
                  fontSize: 20,
                  backgroundColor: isDark ? brand[800] : brand[600],
                  '&:hover': { bgcolor: isDark ? brand[600] : brand[400] },
                  color: 'primary.contrastText',
                  fontWeight: 800,
                  marginRight: '20px',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                m.
              </Button>

              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button variant="text" size="small">
                  Projects
                </Button>

                <Button variant="text" size="small">
                  Solutions
                </Button>

                <Button variant="text" size="small">
                  About
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <IconButton onClick={toggleColorScheme} color="primary" size="small">
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
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
      </MuiAppBar>
    </div>
  );
}

export default AppBar;
