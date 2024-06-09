import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const boxVariant = {
    initial: {
        opacity: 0,
        y: 50, // Start from 50px below
    },
    animate: {
        opacity: 1,
        y: 0, // Move to its original position
        transition: {
            duration: 0.9,
            ease: 'easeInOut',
        }
    }
};

const AnimatedBox = ({ children, className = '' }) => {
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
            { threshold: 0.30 } // Adjust the threshold as needed
        );

        observer.observe(elementRef);

        return () => {
            observer.unobserve(elementRef);
        };
    }, []);

    return (
        <motion.div className={className}
            variants={boxVariant}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            ref={ref}>
            {children}
        </motion.div>
    );
};

export default AnimatedBox;
