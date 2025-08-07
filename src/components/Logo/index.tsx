import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

import { useThemeStore } from '../../stores/themeStore';

type LogoProps = {
  sx?: SxProps<Theme>;
};

function Logo({ sx }: LogoProps) {
  const { colorScheme } = useThemeStore();
  const isDark = colorScheme === 'dark';

  return (
    <Box
      component="img"
      src={isDark ? '/brand/aimi-color.svg' : '/brand/aimi-color.svg'}
      sx={{
        transition: 'opacity 0.3s ease',
        '&:hover': {
          content: `url('/brand/aimi-color-light.svg')`,
        },
        ...sx,
      }}
    />
  );
}

export default Logo;
