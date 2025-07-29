import AppBar from './lib/AppBar';
import Footer from './lib/Footer';
import Theme from '../../theme/Theme';
import type { HeroData } from '../../types/content';
import Hero from '../Hero';

type PageProps = {
  heroData: HeroData;
};

export default function Page({ heroData }: PageProps) {
  return (
    <Theme>
      <AppBar />
      <Hero data={heroData} />
      <Footer />
    </Theme>
  );
}
