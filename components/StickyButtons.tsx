'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hotel, X, Phone, MessageCircle } from 'lucide-react';

const StickyContactButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = "+918318419334";

    const buttonVariants = {
        closed: { rotate: 0 },
        open: { rotate: 45 }
    };

    const optionVariants = {
        closed: { opacity: 0, y: 20 },
        open: { opacity: 1, y: 0 }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.a
                            href={`https://wa.me/${phoneNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 mb-4 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
                            variants={optionVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            transition={{ duration: 0.2, delay: 0.1 }}
                        >
                            <MessageCircle className="text-white" size={24} />
                        </motion.a>
                        <motion.a
                            href={`tel:${phoneNumber}`}
                            className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
                            variants={optionVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            transition={{ duration: 0.2 }}
                        >
                            <Phone className="text-white" size={24} />
                        </motion.a>
                    </>
                )}
            </AnimatePresence>
            <motion.button
                className="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                variants={buttonVariants}
                animate={isOpen ? 'open' : 'closed'}
                transition={{ duration: 0.3 }}
            >
                {isOpen ? (
                    <X className="text-white" size={32} />
                ) : (
                    <Hotel className="text-white" size={32} />
                )}
            </motion.button>
        </div>
    );
};

export default StickyContactButton;