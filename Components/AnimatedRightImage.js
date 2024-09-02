import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const imageVariants = {
    initial: {
        x: -50,
        opacity: 0, // Start as invisible
    },
    animate: {
        x: 0, // Move to the final position
        opacity: 1, // Make visible
        transition: {
            duration: 1, // Adjust the duration as needed
            ease: 'easeOut', // Smooth animation
        },
    },
};

const AnimatedRightImage = ({ src, alt, width, height, className = '' }) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const elementRef = ref.current;
        if (!elementRef) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                  
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            {
                threshold: 0.01, // Lower threshold to trigger sooner
                rootMargin: '0px 0px -20% 0px', // Extend observer's range
            }
        );

        observer.observe(elementRef);

        return () => {
            if (elementRef) observer.unobserve(elementRef);
        };
    }, []);

    return (
        <motion.div
            ref={ref}
            className={`overflow-hidden ${className}`}
            variants={imageVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
        >
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="object-contain"
                style={{ width: 'auto', height: 'auto' }} // Ensure aspect ratio is maintained
            />
        </motion.div>
    );
};

export default AnimatedRightImage;
