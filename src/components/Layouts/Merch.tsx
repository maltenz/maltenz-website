import Footer from './lib/Footer';
import type { HeroData, ProjectEntry } from '../../types/content';
import AppWrapper from '../AppWrapper';
import Hero from '../Hero';

type MerchProps = {
  heroData: HeroData;
  projectsData: ProjectEntry[];
};

export default function Merch({ heroData }: MerchProps) {
  return (
    <AppWrapper>
      <Hero data={heroData} />
      <Footer />
    </AppWrapper>
  );
}
