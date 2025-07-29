import AppBar from './lib/AppBar';
import Footer from './lib/Footer';
import Theme from '../../theme/Theme';
import type { HeroData, ProjectEntry } from '../../types/content';
import Hero from '../Hero';
import Latest from '../Projects/Latest';

type HomeProps = {
  heroData: HeroData;
  projectsData: ProjectEntry[];
};

export default function Home({ heroData, projectsData }: HomeProps) {
  return (
    <Theme>
      <AppBar />
      <Hero data={heroData} />
      <Latest data={projectsData} />
      <Footer />
    </Theme>
  );
}
