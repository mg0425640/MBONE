import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import TokenomicsHero from '@/components/tokenomics/TokenomicsHero';
import DistributionSection from '@/components/tokenomics/DistributionSection';
import TaxMechanismSection from '@/components/tokenomics/TaxMechanismSection';
import BurnAndRewardsSection from '@/components/tokenomics/BurnAndRewardsSection';
import RoadmapPreviewSection from '@/components/tokenomics/RoadmapPreviewSection';

export const metadata = {
  title: 'MILLIONBONE Tokenomics - $MBONE Distribution & Mechanics',
  description: 'Detailed breakdown of MILLIONBONE tokenomics including distribution, tax structure, burn mechanism, and holder rewards system.',
};

export default function Tokenomics() {
  return (
    <PageTransition>
      <Navbar />
      <main>
        <TokenomicsHero />
        <DistributionSection />
        <TaxMechanismSection />
        <BurnAndRewardsSection />
        <RoadmapPreviewSection />
      </main>
      <Footer />
    </PageTransition>
  );
}