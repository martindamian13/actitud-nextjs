import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Amenities from '@/components/Amenities';
import Location from '@/components/Location';
import FloorPlans from '@/components/FloorPlans';
import FeaturedAmenities from '@/components/FeaturedAmenities';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import StickyContactButton from '@/components/StickyContactButton';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Location />
      <FloorPlans />
      <Amenities />
      <FeaturedAmenities />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <StickyContactButton />
    </main>
  );
}
