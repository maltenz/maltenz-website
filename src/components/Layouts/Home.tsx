import AppBar from './lib/AppBar';
import Footer from './lib/Footer';
import Theme from '../../theme/Theme';
import type { HeroData } from '../../types/content';
import Hero from '../Hero';
import Latest from '../Post/Latest';

type HomeProps = {
  heroData: HeroData;
};

export default function Home({ heroData }: HomeProps) {
  return (
    <Theme>
      <AppBar />
      <Hero data={heroData} />
      <Latest />
      <Footer />
    </Theme>
  );
}
