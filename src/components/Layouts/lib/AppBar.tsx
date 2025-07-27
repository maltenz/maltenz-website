import { useState } from 'react';

import BuildIcon from '@mui/icons-material/Build';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import { Stack, useTheme } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import { useThemeStore } from '../../../stores/themeStore';
import { brand } from '../../../theme/themePrimitives';

function AppBar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const { colorScheme, toggleColorScheme } = useThemeStore();

  const isDark = colorScheme === 'dark';

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const bgColor = {
    bgcolor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: 'divider',
    MozBorderRadiusBottomleft: 'none',
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
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              // maxHeight: 40,
              ...bgColor,
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

              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button variant="text" size="small" sx={{ fontWeight: 600 }}>
                  Projects
                </Button>

                <Button variant="text" size="small" sx={{ fontWeight: 600 }}>
                  Solutions
                </Button>

                <Button variant="text" size="small" sx={{ fontWeight: 600 }}>
                  About
                </Button>
              </Box>
            </Box>

            <IconButton onClick={toggleColorScheme} size="small" color="primary" sx={{ mr: 1.75, scale: 1.2 }}>
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            <Box>
              <IconButton
                onClick={toggleDrawer(true)}
                color="primary"
                size="small"
                sx={{
                  display: { xs: 'flex', md: 'none', scale: 1.2, marginRight: '5px' },
                }}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: {
                    backgroundColor: 'transparent !important',
                    backgroundImage: 'none',
                    boxShadow: 'none',
                  },
                }}
              >
                <Box
                  sx={{
                    width: '50vw',
                    p: 2,
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
                    <IconButton color="primary" onClick={toggleDrawer(false)} sx={{ scale: 1.2 }}>
                      <CloseRoundedIcon />
                    </IconButton>
                  </Box>

                  <Stack gap={2} mt={2}>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      size="large"
                      startIcon={<WorkIcon sx={{ marginRight: '5px' }} />}
                      sx={{
                        justifyContent: 'flex-start',
                        fontWeight: 600,
                        borderRadius: 999,
                        py: '10px',
                      }}
                    >
                      Projects
                    </Button>

                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      size="large"
                      startIcon={<BuildIcon sx={{ marginRight: '5px' }} />}
                      sx={{
                        justifyContent: 'flex-start',
                        fontWeight: 600,
                        borderRadius: 999,
                        py: '10px',
                      }}
                    >
                      Solutions
                    </Button>

                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      size="large"
                      startIcon={<PersonIcon sx={{ marginRight: '5px' }} />}
                      sx={{
                        justifyContent: 'flex-start',
                        fontWeight: 600,
                        borderRadius: 999,
                        py: '10px',
                      }}
                    >
                      About
                    </Button>
                  </Stack>
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
