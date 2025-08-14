import Footer from './lib/Footer';
import type { HeroData, ProjectEntry } from '../../types/content';
import AppWrapper from '../AppWrapper';
import Hero from '../Hero';
import Products from './lib/Products';

type MerchProps = {
  heroData: HeroData;
  projectsData: ProjectEntry[];
};

export default function Merch({ heroData }: MerchProps) {
  return (
    <AppWrapper>
      <Hero data={heroData} slogan="product" />
      <Products />
      <Footer />
    </AppWrapper>
  );
}
