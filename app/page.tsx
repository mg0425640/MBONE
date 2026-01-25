import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import AboutPreviewSection from '@/components/home/AboutPreviewSection';
import TokenUtilitySection from '@/components/home/TokenUtilitySection';
import CommunityCTASection from '@/components/home/CommunityCTASection';

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutPreviewSection />
        <TokenUtilitySection />
        <CommunityCTASection />
      </main>
      <Footer />
    </PageTransition>
  );
}