import AppWrapper from '../AppWrapper';
import Hero from '../Hero';
import AppBar from './lib/AppBar';
import Footer from './lib/Footer';
import type { HeroData, ProjectEntry } from '../../types/content';
import Latest from '../Projects/Latest';

type ProjectsProps = {
  heroData: HeroData;
  projectsData: ProjectEntry[];
};

export default function Projects({ heroData, projectsData }: ProjectsProps) {
  return (
    <AppWrapper>
      <AppBar />
      <Hero data={heroData} />
      <Latest data={projectsData} />
      <Footer />
    </AppWrapper>
  );
}
