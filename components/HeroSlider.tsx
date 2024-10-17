'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        image: '/images/slider1.jpg',
        title: 'Welcome to Luxe Haven',
        address: '123 Luxury Lane, Cityville',
        subtitle: 'Experience Unparalleled Luxury',
    },
    {
        image: '/images/slider2.jpg',
        title: 'Exquisite Accommodations',
        address: 'In the Heart of Downtown',
        subtitle: 'Your Home Away From Home',
    },
    {
        image: '/images/slider3.jpg',
        title: 'Relax and Unwind',
        address: 'Oasis in the City',
        subtitle: 'Indulge in Pure Bliss',
    },
];

const HeroSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white px-4">
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-6xl font-bold mb-4"
                            >
                                {slides[currentSlide].title}
                            </motion.h1>
                            <motion.h5
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl md:text-2xl mb-2"
                            >
                                {slides[currentSlide].address}
                            </motion.h5>
                            <motion.h3
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-2xl md:text-3xl mb-8"
                            >
                                {slides[currentSlide].subtitle}
                            </motion.h3>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="space-x-4"
                            >
                                <Button variant="outline" size="lg" className="bg-white text-gray-900 hover:bg-gray-200">
                                    Book Now
                                </Button>
                                <Button variant="outline" size="lg" className="border-white text-blue-950 hover:bg-white hover:text-gray-900">
                                    Learn More
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default HeroSlider;