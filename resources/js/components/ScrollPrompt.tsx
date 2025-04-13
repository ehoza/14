import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollPrompt = () => {
    const { scrollYProgress } = useScroll();
    
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.85, 0.95],
        [1, 1, 0]
    );

    const scale = useTransform(
        scrollYProgress,
        [0, 0.85, 0.95],
        [1, 1, 0.8]
    );

    return (
        <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none"
            style={{ opacity, scale }}
        >
            <div className="flex flex-col items-center gap-3">
                <motion.div
                    className="text-pink-300/80 font-mono text-lg"
                    animate={{
                        y: [0, -8, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    Keep scrolling, my love
                    <div className="mt-2">
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 mx-auto"
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, -10, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </motion.svg>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ScrollPrompt; 