import type { Theme, Components } from '@mui/material/styles';

/* eslint-disable import/prefer-default-export */
export const baseline: Components<Theme> = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
    },
  },
};
