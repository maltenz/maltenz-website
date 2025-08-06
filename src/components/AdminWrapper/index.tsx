import { useEffect, useRef, type ReactNode } from 'react';

import Theme from '../../theme/Theme';

type AdminWrapperProps = {
  children: ReactNode;
};

export default function AdminWrapper({ children }: AdminWrapperProps) {
  const prevSchemeDarkRef = useRef<boolean>(false);

  useEffect(() => {
    const docThemeAttr = document.documentElement.dataset.theme;

    if (docThemeAttr === 'dark') {
      prevSchemeDarkRef.current = true;
      document.documentElement.dataset.theme = 'light';
    }

    return () => {
      if (prevSchemeDarkRef) {
        document.documentElement.dataset.theme = 'dark';
      }
    };
  }, []);

  return <Theme colorScheme="light">{children}</Theme>;
}
