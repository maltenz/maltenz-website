import Footer from './lib/Footer';
import type { HeroData, ProjectEntry } from '../../types/content';
import AppWrapper from '../AppWrapper';
import Hero from '../Hero';
import AboutContent from './lib/AboutContent';

type AboutProps = {
  heroData: HeroData;
  projectsData: ProjectEntry[];
};

export default function About({ heroData }: AboutProps) {
  return (
    <AppWrapper>
      <Hero data={heroData} slogan="about" />
      <AboutContent />
      <Footer />
    </AppWrapper>
  );
}
