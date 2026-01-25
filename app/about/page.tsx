import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AboutHero from '@/components/about/AboutHero';
import StorySection from '@/components/about/StorySection';
import VisionSection from '@/components/about/VisionSection';
import ValuesSection from '@/components/about/ValuesSection';
import TeamDisclaimerSection from '@/components/about/TeamDisclaimerSection';

export const metadata = {
  title: 'About MILLIONBONE ($MBONE) - Community-Driven Meme Coin',
  description: 'Learn about MILLIONBONE\'s mission, vision, and values. A community-driven meme coin project built on transparency and innovation.',
};

export default function About() {
  return (
    <PageTransition>
      <Navbar />
      <main>
        <AboutHero />
        <StorySection />
        <VisionSection />
        <ValuesSection />
        <TeamDisclaimerSection />
      </main>
      <Footer />
    </PageTransition>
  );
}