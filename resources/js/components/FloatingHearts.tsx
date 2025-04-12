import React from 'react';
import { motion } from 'framer-motion';

type FloatingHeartProps = {
    color: string;
    size: number;
    initialX: number;
    initialY: number;
    duration: number;
};

const FloatingHeart = ({ color, size, initialX, initialY, duration }: FloatingHeartProps) => (
    <motion.div
        className="absolute pointer-events-none"
        initial={{ x: initialX, y: initialY }}
        animate={{
            y: [initialY - 100, initialY + 100],
            x: [initialX - 50, initialX + 50],
        }}
        transition={{
            y: {
                duration: duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            },
            x: {
                duration: duration * 1.3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            },
        }}
        style={{ color }}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ width: size, height: size }}
        >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
    </motion.div>
);

const FloatingHearts = () => {
    // Generate random positions for hearts
    const hearts = Array.from({ length: 35 }, (_, i) => ({
        id: i,
        x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
        y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 3 + 2,
    }));

    return (
        <>
            {/* Animated gradient background */}
            <motion.div
                className="fixed inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#141414]"
                style={{
                    backgroundSize: '200% 200%',
                    backgroundPosition: '0% 0%',
                }}
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
            />

            {/* Floating Hearts */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {hearts.map((heart) => (
                    <FloatingHeart
                        key={heart.id}
                        color="rgba(142, 22, 22, 0.3)"
                        size={heart.size}
                        initialX={heart.x}
                        initialY={heart.y}
                        duration={heart.duration}
                    />
                ))}
            </div>
        </>
    );
};

export default FloatingHearts; 