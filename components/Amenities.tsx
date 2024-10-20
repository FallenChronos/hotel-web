'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Coffee, HandPlatter, Utensils, Car, Waves } from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'Stay connected with our high-speed internet access throughout the hotel.',
    image: '/images/wifi.jpg'
  },
  {
    icon: Coffee,
    title: 'Complimentary Breakfast',
    description: 'Enjoy complimentary coffee and tea in our cozy lounge area.',
    image: '/images/breakfast.jpeg'
  },
  {
    icon: HandPlatter,
    title: '24/7 Quick Service',
    description: 'We have a well trained and dedicated staff available round the clock availabe at your service.',
    image: '/images/room-service.jpg'
  },
  {
    icon: Utensils,
    title: 'Restaurant',
    description: 'Savor delicious meals at our in-house restaurant with a varied menu including local cuisine.',
    image: '/images/food.jpg'
  },
  {
    icon: Car,
    title: 'Local Cab and Parking',
    description: 'Available city wide cab including pickup and drop along with convenient on-site parking available for all our guests.',
    image: '/images/car-cab.jpeg'
  },
  {
    icon: Waves,
    title: 'Pool',
    description: 'Relax and unwind in our beautiful swimming pool area.',
    image: '/images/swimming-pool.jpg'
  },
];

const AmenityCard = ({ icon: Icon, title, description, image }: { icon: any, title: string, description: string, image: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      id='services'
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative w-full h-48 md:h-64">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-all duration-300 group-hover:blur-sm brightness-50"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
          <Icon className="w-12 h-12 mb-2 text-yellow-300" />
          <h3 className="text-2xl font-semibold text-center shadow-sm">{title}</h3>
          <motion.p
            className="mt-2 text-sm text-center opacity-0 group-hover:opacity-100"
            initial={{ height: 0 }}
            animate={{ height: isHovered ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const Amenities = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Amenities We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <AmenityCard key={index} {...amenity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;