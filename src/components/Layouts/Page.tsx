import type { ReactNode } from 'react';

import AppBar from './lib/AppBar';
import Footer from './lib/Footer';
import Theme from '../../theme/Theme';

type PageProps = {
  children: ReactNode;
};

export default function Page({ children }: PageProps) {
  return (
    <Theme>
      <AppBar />
      {children}
      <Footer />
    </Theme>
  );
}
