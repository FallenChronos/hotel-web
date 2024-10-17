'use client'

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import GoogleMapComponent from './Map';

const reviews = [
    {
        id: 1,
        rating: 5,
        text: "Absolutely stunning hotel with impeccable service. The amenities were top-notch and the staff went above and beyond.",
        author: "Emma Thompson"
    },
    {
        id: 2,
        rating: 4,
        text: "Beautiful location and comfortable rooms. The restaurant offered delicious meals. Highly recommended!",
        author: "Michael Chen"
    },
    {
        id: 3,
        rating: 5,
        text: "An unforgettable experience. The attention to detail in every aspect of our stay was remarkable.",
        author: "Sophie Martin"
    },
    {
        id: 4,
        rating: 5,
        text: "Luxurious accommodations and breathtaking views. The spa treatments were incredibly relaxing.",
        author: "James Wilson"
    },
    {
        id: 5,
        rating: 4,
        text: "Great value for a high-end hotel. The fitness center and pool area were highlights of our stay.",
        author: "Olivia Brown"
    }
];

const ReviewCard = ({ review }: { review: any }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="bg-white rounded-lg shadow-md p-6 mb-6"
    >
        <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill={i < review.rating ? 'currentColor' : 'none'}
                />
            ))}
        </div>
        <p className="text-gray-600 mb-4">{review.text}</p>
        <p className="font-semibold text-gray-800">{review.author}</p>
    </motion.div>
);

const TestimonialsSection = () => {
    const [visibleReviews, setVisibleReviews] = useState(reviews.slice(0, 2));

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleReviews(prevReviews => {
                const nextIndex = (reviews.findIndex(r => r.id === prevReviews[1].id) + 1) % reviews.length;
                return [prevReviews[1], reviews[nextIndex]];
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-12 bg-teal-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
                    What Our Guests Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="overflow-hidden" style={{ height: '400px' }}>
                        <AnimatePresence>
                            {visibleReviews.map((review) => (
                                <ReviewCard key={review.id} review={review} />
                            ))}
                        </AnimatePresence>
                    </div>
                    <div className="bg-gray-300 rounded-lg" style={{ height: '400px' }}>
                        {/* Placeholder for the map component */}
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                            <GoogleMapComponent />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;