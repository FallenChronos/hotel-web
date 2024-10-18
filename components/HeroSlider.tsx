'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';


const slides = [
    {
        image: '/images/slider1.jpeg',
        title: 'Welcome to Hotel Agrawal Pride',
        address: 'Marchikote Square, Puri, Odisha 752001',
        subtitle: 'Experience Unparalleled Luxury',
    },
    {
        image: '/images/slider2.jpeg',
        title: 'Exquisite Accommodations',
        address: 'In the Heart of Downtown',
        subtitle: 'Your Home Away From Home',
    },
    {
        image: '/images/slider3.jpeg',
        title: 'Celebrate with Us',
        address: 'Keep up the party wibe evrywhere',
        subtitle: 'Let us help you out',
    },
    {
        image: '/images/slider4.jpeg',
        title: 'Relax and Unwind',
        address: 'Oasis in the City',
        subtitle: 'Indulge in Pure Bliss',
    },
    {
        image: '/images/slider5.jpeg',
        title: 'Your Occasions are our celebrations',
        address: 'Organize your events with us',
        subtitle: 'We take care of all the events.',
    },
];

const HeroSlider = () => {
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
                        fill={true}
                        style={{ objectFit: 'cover' }}
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
                                <Button
                                    asChild
                                    className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
                                >
                                    <Link
                                        href="https://wa.me/+918318419334"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center"
                                    >
                                        <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                                        <span className="hidden sm:inline">Chat on WhatsApp</span>
                                    </Link>

                                </Button>
                                <Button
                                    asChild
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
                                >
                                    <Link
                                        href={`tel:+918318419334`}
                                        className="inline-flex items-center justify-center"
                                    >
                                        <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                                        <span className="hidden sm:inline">Call Us</span>
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div >
    );
};

export default HeroSlider;