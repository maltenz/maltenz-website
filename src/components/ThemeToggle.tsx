import React, { useState, useEffect } from 'react';

import { DarkMode, LightMode } from '@mui/icons-material';
import { Fab } from '@mui/material';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check current theme on mount
    const currentScheme = document.documentElement.getAttribute('data-mui-color-scheme');
    setIsDark(currentScheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newMode = isDark ? 'light' : 'dark';
    
    // Multiple methods to ensure theme switching works
    document.documentElement.setAttribute('data-mui-color-scheme', newMode);
    document.documentElement.setAttribute('data-theme', newMode);
    document.body.setAttribute('data-mui-color-scheme', newMode);
    
    // Also try CSS custom properties
    document.documentElement.style.setProperty('--mui-palette-mode', newMode);
    
    // Force a visual change we can see
    document.body.style.backgroundColor = isDark ? '#ffffff' : '#121212';
    document.body.style.color = isDark ? '#000000' : '#ffffff';
    
    setIsDark(!isDark);
  };

  return (
    <Fab
      color="primary"
      size="medium"
      onClick={toggleTheme}
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1000,
      }}
    >
      {isDark ? <LightMode /> : <DarkMode />}
    </Fab>
  );
}
