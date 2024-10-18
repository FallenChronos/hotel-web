'use client'

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ImageStrip = () => {
    const [images, setImages] = useState<string[]>([]);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const getImageFilenames = async () => {
            const response = await fetch('/api/getImages');
            if (!response.ok) {
                throw new Error('Failed to fetch image list');
            }
            return response.json();
        };

        getImageFilenames().then(setImages).catch(console.error);
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
        }
    }, [images]);

    const baseX = useMotionValue(0);
    const scrollVelocity = useSpring(useMotionValue(100), {
        damping: 50,
        stiffness: 400
    });
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-containerWidth, 0, v)}px`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * -20 * (delta / 1000);

        baseX.set(baseX.get() + moveBy);
    });

    const imageWidth = 300; // Adjust this value based on your needs
    const imageHeight = 200; // Adjust this to make the strip thinner

    return (
        <div ref={containerRef} className="w-full overflow-hidden bg-gray-100">
            <motion.div className="flex" style={{ x }}>
                {[...images, ...images, ...images].map((image, index) => (
                    <motion.div
                        key={index}
                        style={{
                            width: imageWidth,
                            height: imageHeight,
                            flexShrink: 0
                        }}
                        className="relative"
                    >
                        <img
                            src={`/images/property/${image}`}
                            alt={`Property image ${index + 1}`}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default ImageStrip;