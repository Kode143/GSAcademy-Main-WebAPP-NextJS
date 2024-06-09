import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            
        }
    }
};

const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
};

const AnimatedText = ({ text, className = '' }) => {
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
            { threshold: 0.1 } // Adjust the threshold as needed
        );

        observer.observe(elementRef);

        return () => {
            observer.unobserve(elementRef);
        };
    }, []);

    return (
        <div className='py-2 justify-center overflow-hidden sm:py-0' ref={ref}>
            <motion.h1 className={className}
                variants={quote}
                initial='initial'
                animate={isInView ? 'animate' : 'initial'}>
                {
                    text.split(" ").map((word, index) =>
                        <motion.span key={word + '-' + index} className='inline-flex'
                            variants={singleWord}>
                            {word}&nbsp;
                        </motion.span>
                    )
                }
            </motion.h1>
        </div>
    );
};

export default AnimatedText;
