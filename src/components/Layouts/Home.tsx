import Footer from './lib/Footer';
import type { HeroData, ProjectEntry } from '../../types/content';
import AppWrapper from '../AppWrapper';
import Companies from '../Companies';
import Hero from '../Hero';
import Latest from '../Projects/Latest';

type HomeProps = {
  heroData: HeroData;
  projectsData: ProjectEntry[];
};

export default function Home({ heroData, projectsData }: HomeProps) {
  return (
    <AppWrapper>
      <Hero data={heroData} />
      <Latest data={projectsData} />
      <Companies />
      <Footer />
    </AppWrapper>
  );
}
