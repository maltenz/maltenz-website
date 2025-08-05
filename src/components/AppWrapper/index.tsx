import { useEffect, useState, type ReactNode } from 'react';

import { useThemeStore } from '../../stores/themeStore';
import Theme from '../../theme/Theme';
import AppBar from '../Layouts/lib/AppBar';

type AppWrapperProps = {
  children: ReactNode;
};

export default function AppWrapper({ children }: AppWrapperProps) {
  const colorScheme = useThemeStore((s) => s.colorScheme);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  console.log({ colorScheme });

  return (
    <Theme colorScheme={colorScheme}>
      <AppBar />
      {children}
    </Theme>
  );
}
