import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

import { useThemeStore } from '../../stores/themeStore';

type LogoVariant = 'dark' | 'light' | 'brand';

type LogoProps = {
  variant?: LogoVariant;
  sx?: SxProps<Theme>;
};

function Logo({ variant, sx }: LogoProps) {
  const { colorScheme } = useThemeStore();
  const isDark = colorScheme === 'dark';

  const getLogoSrc = () => {
    if (variant) {
      // Use specific variant
      switch (variant) {
        case 'dark':
          return '/brand/aimi-dark.svg';
        case 'light':
          return '/brand/aimi-white.svg';
        case 'brand':
          return '/brand/aimi-color.svg';
        default:
          return '/brand/aimi-color.svg';
      }
    }

    // Auto theme-based selection when no variant specified
    return isDark ? '/brand/aimi-color.svg' : '/brand/aimi-color.svg';
  };

  const getHoverSrc = () => {
    // Auto theme-based hover
    return '/brand/aimi-color.svg';
  };

  return (
    <Box
      component="img"
      src={getLogoSrc()}
      sx={{
        transition: 'opacity 0.3s ease',
        '&:hover': {
          content: `url('${getHoverSrc()}')`,
        },
        ...sx,
      }}
    />
  );
}

export default Logo;
