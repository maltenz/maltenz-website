import React from 'react';
import type { ReactNode } from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import AppTheme from '../theme/AppTheme';

type MuiThemeProviderProps = {
  children: ReactNode;
};

export default function MuiThemeProvider({ children }: MuiThemeProviderProps) {
  return (
    <AppTheme>
      <CssBaseline />
      {children}
    </AppTheme>
  );
}
