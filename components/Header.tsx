'use client'

import React, { useState } from 'react';
import { Playfair_Display } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

const playfair = Playfair_Display({ subsets: ['latin'] });

const navItems = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Rooms',
        path: '#rooms'
    },
    {
        title: 'Dining',
        path: '/dining'
    },
    {
        title: 'Spa',
        path: '/spa'
    },
    {
        title: 'Contact',
        path: '/contact'
    }];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed w-full z-50 bg-white shadow-md">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <a href="#" className={`text-2xl font-bold text-gray-800 ${playfair.className}`}>Luxe Haven</a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <a key={item.title} href={item.path} className="text-gray-600 hover:text-gray-900 transition duration-300">{item.title}</a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
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
                        className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 md:hidden"
                    >
                        <div className="p-6">
                            <button
                                className="mb-8 text-gray-600 focus:outline-none"
                                onClick={toggleMenu}
                                aria-label="Close menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <a key={item.title} href={item.path} className="text-gray-600 hover:text-gray-900 transition duration-300">{item.title}</a>
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