import Footer from './lib/Footer';
import type { HeroData, ProjectEntry } from '../../types/content';
import AppWrapper from '../AppWrapper';
import Hero from '../Hero';
import Latest from '../Projects/Latest';
import Emblems from './lib/Emblems';

type MerchProps = {
  heroData: HeroData;
  projectsData: ProjectEntry[];
};

export default function Merch({ heroData, projectsData }: MerchProps) {
  return (
    <AppWrapper>
      <Hero data={heroData} />
      <Latest data={projectsData} />
      <Emblems />
      <Footer />
    </AppWrapper>
  );
}
