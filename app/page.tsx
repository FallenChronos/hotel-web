import Amenities from '@/components/Amenities';
import ContactForm from '@/components/ContactForm';
import HeroSlider from '@/components/HeroSlider';
import ImageStrip from '@/components/ImageStrip';
import Rooms from '@/components/Rooms';
import TestimonialsSection from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import { Playfair_Display, Raleway } from 'next/font/google';
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`min-h-screen ${raleway.className}`}>
      <HeroSlider />

      <Rooms />

      <Amenities />

      <section id='dining' className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-12 ${playfair.className}`}>Experience Culinary Excellence</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src="/images/food.jpg" alt="Fine Dining" width={600} height={400} className="rounded-lg shadow-2xl" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className={`text-3xl font-semibold mb-4 ${playfair.className}`}>Gourmet Delights</h3>
              <p className="text-gray-300 mb-6">
                Indulge in a culinary journey crafted by our chefs. Our restaurants offer a fusion of international flavors and local specialties, ensuring an unforgettable dining experience.
              </p>
              <Button variant="outline" size="lg" className="bg-white text-gray-900 hover:bg-gray-200">
                Explore Dining Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <ContactForm />

      <ImageStrip />
    </main>
  );
}