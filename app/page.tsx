import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Playfair_Display, Raleway } from 'next/font/google';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import AmenitiesGrid from '@/components/Amenities';
import Amenities from '@/components/Amenities';

const playfair = Playfair_Display({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`min-h-screen ${raleway.className}`}>
      <HeroSlider />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-12 ${playfair.className}`}>Our Exquisite Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Deluxe Suite', 'Executive Room', 'Penthouse Suite'].map((room) => (
              <div key={room} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl">
                <Image src={`/images/${room.toLowerCase().replace(' ', '-')}.jpg`} alt={room} width={400} height={300} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className={`text-2xl font-semibold mb-2 ${playfair.className}`}>{room}</h3>
                  <p className="text-gray-600 mb-4">Indulge in spacious comfort with breathtaking views.</p>
                  <Button variant="link" className="text-blue-600 hover:text-blue-800 p-0">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <Amenities />
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold text-center mb-12 ${playfair.className}`}>Experience Culinary Excellence</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src="/images/food.jpg" alt="Fine Dining" width={600} height={400} className="rounded-lg shadow-2xl" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className={`text-3xl font-semibold mb-4 ${playfair.className}`}>Gourmet Delights</h3>
              <p className="text-gray-300 mb-6">
                Indulge in a culinary journey crafted by world-renowned chefs. Our restaurants offer a fusion of international flavors and local specialties, ensuring an unforgettable dining experience.
              </p>
              <Button variant="outline" size="lg" className="bg-white text-gray-900 hover:bg-gray-200">
                Explore Dining Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}