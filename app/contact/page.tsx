import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import ContactHero from '@/components/contact/ContactHero';
import EmailContactCard from '@/components/contact/EmailContactCard';
import SocialMediaCards from '@/components/contact/SocialMediaCards';
import CommunityNoteSection from '@/components/contact/CommunityNoteSection';

export const metadata = {
  title: 'Contact MILLIONBONE - Get in Touch with Our Community',
  description: 'Get in touch with the MILLIONBONE team and community. Join our social channels or reach out via email for support and inquiries.',
};

export default function Contact() {
  return (
    <PageTransition>
      <Navbar />
      <main>
        <ContactHero />
        <EmailContactCard />
        <SocialMediaCards />
        <CommunityNoteSection />
      </main>
      <Footer />
    </PageTransition>
  );
}