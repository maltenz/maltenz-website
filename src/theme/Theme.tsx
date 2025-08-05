import { useMemo, type ReactNode } from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { type ColorScheme } from '../stores/themeStore';
import { baseline } from './customizations/baseline';
import { dataDisplayCustomizations } from './customizations/dataDisplay';
import { feedbackCustomizations } from './customizations/feedback';
import { inputsCustomizations } from './customizations/inputs';
import { navigationCustomizations } from './customizations/navigation';
import { surfacesCustomizations } from './customizations/surfaces';
import { colorSchemes, typography, shadows, shape } from './themePrimitives';

type Props = {
  children: ReactNode;
  colorScheme: ColorScheme;
};

export default function Theme({ children, colorScheme }: Props) {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorScheme,
          ...(colorScheme === 'light' ? colorSchemes.light.palette : colorSchemes.dark.palette),
        },
        typography,
        shadows,
        shape,
        components: {
          ...baseline,
          ...inputsCustomizations,
          ...dataDisplayCustomizations,
          ...feedbackCustomizations,
          ...navigationCustomizations,
          ...surfacesCustomizations,
        },
      }),
    [colorScheme],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
