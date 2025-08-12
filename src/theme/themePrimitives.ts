/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable max-lines */
import { createTheme, alpha } from '@mui/material/styles';
import type { PaletteMode, Shadows } from '@mui/material/styles';

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    highlighted: true;
  }
}

declare module '@mui/material/styles' {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange {}

  interface Palette {
    baseShadow: string;
  }

  interface PaletteOptions {
    baseShadow?: string;
  }

  interface TypeText {
    warning?: string;
  }
}

const defaultTheme = createTheme();

const customShadows: Shadows = [...defaultTheme.shadows];

export type ColorRange = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export const brand: ColorRange = {
  50: 'hsl(270, 60%, 96%)',
  100: 'hsl(270, 60%, 90%)',
  200: 'hsl(270, 60%, 75%)',
  300: 'hsl(270, 60%, 60%)',
  400: 'hsl(270, 70%, 45%)', // #3a0f69
  500: 'hsl(270, 70%, 35%)',
  600: 'hsl(270, 70%, 30%)',
  700: 'hsl(270, 80%, 25%)',
  800: 'hsl(270, 85%, 20%)',
  900: 'hsl(270, 90%, 15%)',
};

// Purple variant colors
export const purpleVariant: ColorRange = {
  50: '#f3e8ff',
  100: '#e9d5ff',
  200: '#d8b4fe',
  300: '#c084fc',
  400: '#a855f7',
  500: '#7B3BB9', // Primary background
  600: '#7c3aed',
  700: '#6d28d9',
  800: '#5b21b6',
  900: '#4c1d95',
};

// Yellow variant colors
export const yellowVariant: ColorRange = {
  50: '#fffcf0',
  100: '#fef7d9',
  200: '#fdeeb3',
  300: '#fce082',
  400: '#facc15',
  500: '#F3B426', // Primary background for yellow
  600: '#d4980b',
  700: '#b17509',
  800: '#8f5f0e',
  900: '#764e0f',
};

// Orange variant colors
export const orangeVariant: ColorRange = {
  50: '#fef5f2',
  100: '#fee5e2',
  200: '#feccca',
  300: '#fca8a5',
  400: '#f87571',
  500: '#F75643', // Primary background for orange
  600: '#e03d28',
  700: '#bc2a1c',
  800: '#9c251b',
  900: '#81241e',
};

// Dark purple variant colors
export const darkPurpleVariant: ColorRange = {
  50: '#f4f2f6',
  100: '#e9e6ed',
  200: '#d4cddb',
  300: '#beb4c8',
  400: '#a89bb6',
  500: '#260449', // primary
  600: '#220442',
  700: '#1e033a',
  800: '#1b0333',
  900: '#17022c',
};

export const gray = {
  50: 'hsl(220, 35%, 97%)',
  100: 'hsl(220, 30%, 94%)',
  200: 'hsl(220, 20%, 88%)',
  300: 'hsl(220, 20%, 80%)',
  400: 'hsl(220, 20%, 65%)',
  500: 'hsl(220, 20%, 42%)',
  600: 'hsl(220, 20%, 35%)',
  700: 'hsl(220, 20%, 25%)',
  800: 'hsl(220, 30%, 6%)',
  900: 'hsl(220, 35%, 3%)',
};

export const green = {
  50: 'hsl(120, 80%, 98%)',
  100: 'hsl(120, 75%, 94%)',
  200: 'hsl(120, 75%, 87%)',
  300: 'hsl(120, 61%, 77%)',
  400: 'hsl(120, 44%, 53%)',
  500: 'hsl(120, 59%, 30%)',
  600: 'hsl(120, 70%, 25%)',
  700: 'hsl(120, 75%, 16%)',
  800: 'hsl(120, 84%, 10%)',
  900: 'hsl(120, 87%, 6%)',
};

export const orange = {
  50: 'hsl(45, 100%, 97%)',
  100: 'hsl(45, 92%, 90%)',
  200: 'hsl(45, 94%, 80%)',
  300: 'hsl(45, 90%, 65%)',
  400: 'hsl(45, 90%, 40%)',
  500: 'hsl(45, 90%, 35%)',
  600: 'hsl(45, 91%, 25%)',
  700: 'hsl(45, 94%, 20%)',
  800: 'hsl(45, 95%, 16%)',
  900: 'hsl(45, 93%, 12%)',
};

export const red = {
  50: 'hsl(0, 100%, 97%)',
  100: 'hsl(0, 92%, 90%)',
  200: 'hsl(0, 94%, 80%)',
  300: 'hsl(0, 90%, 65%)',
  400: 'hsl(0, 90%, 40%)',
  500: 'hsl(0, 90%, 30%)',
  600: 'hsl(0, 91%, 25%)',
  700: 'hsl(0, 94%, 18%)',
  800: 'hsl(0, 95%, 12%)',
  900: 'hsl(0, 93%, 6%)',
};

export const bodyScheme = {
  light: {
    default: 'hsl(0, 0%, 99%)',
    paper: gray[50],
  },
  dark: {
    default: gray[900],
    paper: 'hsl(220, 30%, 7%)',
  },
};

export const getDesignTokens = (mode: PaletteMode) => {
  customShadows[1] =
    mode === 'dark'
      ? 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
      : 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px';

  return {
    palette: {
      mode,
      primary: {
        light: brand[200],
        main: brand[400],
        dark: brand[700],
        contrastText: brand[50],
        ...(mode === 'dark' && {
          contrastText: brand[50],
          light: brand[300],
          main: brand[400],
          dark: brand[700],
        }),
      },
      info: {
        light: brand[100],
        main: brand[300],
        dark: brand[600],
        contrastText: gray[50],
        ...(mode === 'dark' && {
          contrastText: brand[300],
          light: brand[500],
          main: brand[700],
          dark: brand[900],
        }),
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800],
        ...(mode === 'dark' && {
          light: orange[400],
          main: orange[500],
          dark: orange[700],
        }),
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800],
        ...(mode === 'dark' && {
          light: red[400],
          main: red[500],
          dark: red[700],
        }),
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
        ...(mode === 'dark' && {
          light: green[400],
          main: green[500],
          dark: green[700],
        }),
      },
      grey: {
        ...gray,
      },
      divider: mode === 'dark' ? alpha(gray[700], 0.6) : alpha(gray[300], 0.4),
      background: {
        ...bodyScheme.light,
        ...(mode === 'dark' && { ...bodyScheme.dark }),
      },
      text: {
        primary: gray[800],
        secondary: gray[600],
        warning: orange[400],
        ...(mode === 'dark' && { primary: 'hsl(0, 0%, 100%)', secondary: gray[400] }),
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`,
        ...(mode === 'dark' && {
          hover: alpha(gray[600], 0.2),
          selected: alpha(gray[600], 0.3),
        }),
      },
    },
    shape: {
      borderRadius: 16,
    },
    shadows: customShadows,
  };
};

export const colorSchemes = {
  light: {
    palette: {
      primary: {
        light: brand[200],
        main: brand[400],
        dark: brand[700],
        contrastText: brand[50],
      },
      info: {
        light: brand[100],
        main: brand[300],
        dark: brand[600],
        contrastText: gray[50],
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800],
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800],
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
      },
      grey: {
        ...gray,
      },
      divider: alpha(gray[300], 0.4),
      background: bodyScheme.light,
      text: {
        primary: gray[800],
        secondary: gray[600],
        warning: orange[400],
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`,
      },
    },
  },
  dark: {
    palette: {
      primary: {
        contrastText: brand[50],
        light: brand[300],
        main: brand[400],
        dark: brand[700],
      },
      info: {
        contrastText: brand[300],
        light: brand[500],
        main: brand[700],
        dark: brand[900],
      },
      warning: {
        light: orange[400],
        main: orange[500],
        dark: orange[700],
      },
      error: {
        light: red[400],
        main: red[500],
        dark: red[700],
      },
      success: {
        light: green[400],
        main: green[500],
        dark: green[700],
      },
      grey: {
        ...gray,
      },
      divider: alpha(gray[700], 0.6),
      background: bodyScheme.dark,
      text: {
        primary: 'hsl(0, 0%, 100%)',
        secondary: gray[400],
      },
      action: {
        hover: alpha(gray[600], 0.2),
        selected: alpha(gray[600], 0.3),
      },
    },
  },
  purple: {
    palette: {
      primary: {
        light: purpleVariant[300],
        main: purpleVariant[500], // #7B3BB9
        dark: purpleVariant[700],
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: orangeVariant[300],
        main: orangeVariant[500], // #F75643
        dark: orangeVariant[700],
        contrastText: '#FFFFFF',
      },
      info: {
        light: purpleVariant[100],
        main: purpleVariant[300],
        dark: purpleVariant[600],
        contrastText: gray[50],
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800],
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800],
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
      },
      grey: {
        ...gray,
      },
      divider: alpha(purpleVariant[300], 0.4),
      background: bodyScheme.light,
      text: {
        primary: darkPurpleVariant[900],
        secondary: purpleVariant[200], // Complementary warm orange for purple theme
        warning: orange[400],
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`,
      },
    },
  },
  yellow: {
    palette: {
      primary: {
        light: yellowVariant[300],
        main: yellowVariant[500], // #FFD700
        dark: yellowVariant[700],
        contrastText: '#000000',
      },
      secondary: {
        light: purpleVariant[300],
        main: purpleVariant[500], // #7B3BB9
        dark: purpleVariant[700],
        contrastText: '#FFFFFF',
      },
      info: {
        light: yellowVariant[100],
        main: yellowVariant[300],
        dark: yellowVariant[600],
        contrastText: gray[800],
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800],
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800],
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
      },
      grey: {
        ...gray,
      },
      divider: alpha(yellowVariant[200], 0.4),
      background: bodyScheme.light,
      text: {
        primary: darkPurpleVariant[500],
        secondary: yellowVariant[200], // Complementary purple for yellow theme
        warning: orange[400],
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`,
      },
    },
  },
  orange: {
    palette: {
      primary: {
        light: orangeVariant[300],
        main: orangeVariant[500], // #FF6B35
        dark: orangeVariant[700],
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: purpleVariant[300],
        main: purpleVariant[500], // #7B3BB9
        dark: purpleVariant[700],
        contrastText: '#FFFFFF',
      },
      info: {
        light: orangeVariant[100],
        main: orangeVariant[300],
        dark: orangeVariant[600],
        contrastText: gray[50],
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800],
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800],
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
      },
      grey: {
        ...gray,
      },
      divider: alpha(orangeVariant[300], 0.4),
      background: bodyScheme.light,
      text: {
        primary: '#FFFFFF',
        secondary: orangeVariant[200], // Complementary purple for orange theme
        warning: orange[400],
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`,
      },
    },
  },
  'dark-purple': {
    palette: {
      primary: {
        light: darkPurpleVariant[300],
        main: darkPurpleVariant[500], // #260449
        dark: darkPurpleVariant[700],
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: yellowVariant[300],
        main: yellowVariant[500], // #FFD700
        dark: yellowVariant[700],
        contrastText: '#000000',
      },
      info: {
        light: darkPurpleVariant[100],
        main: darkPurpleVariant[300],
        dark: darkPurpleVariant[600],
        contrastText: gray[50],
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800],
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800],
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
      },
      grey: {
        ...gray,
      },
      divider: 'rgb(80 42 121 / 40%)',
      background: bodyScheme.light,
      text: {
        primary: '#FFFFFF',
        secondary: darkPurpleVariant[200], // Complementary yellow for dark-purple theme
        warning: orange[400],
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`,
      },
    },
  },
};

export const typography = {
  fontFamily: '"DM Sans", sans-serif',
  h1: {
    fontSize: '2.25em',
    fontWeight: 900,
    lineHeight: 1.2,
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: '2em',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: '1.875em',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h4: {
    fontSize: '1.5em',
    fontWeight: 700,
    lineHeight: 1.5,
  },
  h5: {
    fontSize: '1.25em',
    fontWeight: 700,
  },
  h6: {
    fontSize: '1.125em',
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: '1.125em',
  },
  subtitle2: {
    fontSize: '1em',
    fontWeight: 700,
  },
  body1: {
    fontSize: '1em',
  },
  body2: {
    fontSize: '0.85em',
    fontWeight: 400,
  },
  caption: {
    fontSize: '0.85em',
    fontWeight: 400,
  },
};

export const shape = {
  borderRadius: 16,
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const defaultShadows: Shadows = ['none', 'var(--template-palette-baseShadow)', ...defaultTheme.shadows.slice(2)];
export const shadows = defaultShadows;
