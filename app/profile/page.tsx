import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import ProfileClient from '@/components/profile/ProfileClient';

export const metadata = {
  title: 'Profile - MILLIONBONE',
  description: 'Manage your MILLIONBONE profile and account settings.',
};

export default function Profile() {
  return (
    <PageTransition>
      <Navbar />
      <ProfileClient />
      <Footer />
    </PageTransition>
  );
}