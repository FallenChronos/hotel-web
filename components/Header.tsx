'use client'

import React, { useState } from 'react';
import { Playfair_Display, Poppins } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

const playfair = Playfair_Display({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Rooms', path: '#rooms' },
    { title: 'Dining', path: '#dining' },
    { title: 'Services', path: '#services' },
    { title: 'Contact', path: '#contact' }
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed w-full z-50 bg-white shadow-md">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="/" className={`text-3xl font-bold text-gray-800 ${playfair.className} relative group`}>
                        <span className="relative z-10">Hotel Agrawal Pride</span>
                        <motion.span
                            className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </a>

                    {/* Desktop Menu */}
                    <div className={`hidden md:flex space-x-8 ${poppins.className}`}>
                        {navItems.map((item) => (
                            <motion.a
                                key={item.title}
                                href={item.path}
                                className="text-gray-700 hover:text-gray-900 font-semibold relative group"
                                whileHover={{ y: -2 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            >
                                {item.title}
                                <motion.span
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </motion.button>
                </div>
            </nav>

            {/* Mobile Side Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 md:hidden ${poppins.className}`}
                    >
                        <div className="p-6">
                            <motion.button
                                className="mb-8 text-gray-600 focus:outline-none"
                                onClick={toggleMenu}
                                aria-label="Close menu"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>
                            <div className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <motion.a
                                        key={item.title}
                                        href={item.path}
                                        className="text-gray-700 hover:text-gray-900 font-semibold"
                                        whileHover={{ x: 5 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                    >
                                        {item.title}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={toggleMenu}
                />
            )}
        </header>
    );
};

export default Header;