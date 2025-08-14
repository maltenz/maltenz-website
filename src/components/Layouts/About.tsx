import type { ReactNode } from 'react';

import type { AboutData } from '../../types/content';
import AppWrapper from '../AppWrapper';
import Project from '../Projects';

type AboutProps = {
  aboutData: AboutData;
  children: ReactNode;
};

export default function About({ aboutData, children }: AboutProps) {
  return (
    <AppWrapper>
      <Project {...aboutData}>{children}</Project>
    </AppWrapper>
  );
}
