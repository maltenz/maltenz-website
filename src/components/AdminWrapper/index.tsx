import { useEffect, useState, type ReactNode } from 'react';

import { useThemeStore } from '../../stores/themeStore';
import Theme from '../../theme/Theme';

type AdminWrapperProps = {
  children: ReactNode;
};

export default function AdminWrapper({ children }: AdminWrapperProps) {
  const { colorScheme, setColorScheme } = useThemeStore((s) => ({
    colorScheme: s.colorScheme,
    setColorScheme: s.setColorScheme,
  }));
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    setColorScheme('light');
  }, [setColorScheme]);

  if (!isHydrated) return null;

  return <Theme colorScheme={colorScheme}>{children}</Theme>;
}
