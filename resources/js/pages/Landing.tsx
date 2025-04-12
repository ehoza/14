import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

const FloatingHeart = ({ color, size, initialX, initialY, duration }: { 
    color: string;
    size: number;
    initialX: number;
    initialY: number;
    duration: number;
}) => {
    return (
        <motion.div
            className="absolute"
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
};

const TimeCounter = () => {
    const [timeElapsed, setTimeElapsed] = useState({
        years: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Set start date (April 14, 2024 00:00:00 UTC)
        const startDate = new Date(Date.UTC(2024, 3, 14, 0, 0, 0));
        
        const updateTime = () => {
            const now = new Date();
            const difference = now.getTime() - startDate.getTime();

            if (difference <= 0) {
                setTimeElapsed({ years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
            const years = Math.floor(totalDays / 365);
            const days = totalDays % 365;
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeElapsed({ years, days, hours, minutes, seconds });
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-[500vw]" data-scroll-section>
            {/* Base Text - Always Visible */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <h1 className="text-4xl text-white font-mono text-center">
                    We've been together for
                </h1>
            </div>

            <div className="flex">
                <section className="w-screen h-screen flex items-center justify-center" data-scroll data-scroll-speed="1">
                    <motion.div className="text-center">
                        <div className="text-9xl font-bold text-white font-mono tracking-tight">
                            {String(timeElapsed.years).padStart(2, '0')}
                        </div>
                        <div className="text-3xl text-white font-mono mt-2">years</div>
                    </motion.div>
                </section>

                <section className="w-screen h-screen flex items-center justify-center" data-scroll data-scroll-speed="1">
                    <motion.div className="text-center">
                        <div className="text-8xl font-bold text-white font-mono tracking-tight">
                            {String(timeElapsed.days).padStart(2, '0')}
                        </div>
                        <div className="text-3xl text-white font-mono mt-2">days</div>
                    </motion.div>
                </section>

                <section className="w-screen h-screen flex items-center justify-center" data-scroll data-scroll-speed="1">
                    <motion.div className="text-center">
                        <div className="text-7xl font-bold text-white font-mono tracking-tight">
                            {String(timeElapsed.hours).padStart(2, '0')}
                        </div>
                        <div className="text-2xl text-white font-mono mt-2">hours</div>
                    </motion.div>
                </section>

                <section className="w-screen h-screen flex items-center justify-center" data-scroll data-scroll-speed="1">
                    <motion.div className="text-center">
                        <div className="text-7xl font-bold text-white font-mono tracking-tight">
                            {String(timeElapsed.minutes).padStart(2, '0')}
                        </div>
                        <div className="text-2xl text-white font-mono mt-2">minutes</div>
                    </motion.div>
                </section>

                <section className="w-screen h-screen flex items-center justify-center" data-scroll data-scroll-speed="1">
                    <motion.div className="text-center">
                        <div className="text-6xl font-bold text-white font-mono tracking-tight">
                            {String(timeElapsed.seconds).padStart(2, '0')}
                        </div>
                        <div className="text-xl text-white font-mono mt-2">seconds</div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

const Landing = () => {
    useEffect(() => {
        const element = document.querySelector('[data-scroll-container]');
        if (!element) return;
        
        const scroll = new LocomotiveScroll({
            el: element as HTMLElement,
            smooth: true,
            direction: 'horizontal',
            multiplier: 0.8,
            lerp: 0.1,
            class: 'is-inview',
            reloadOnContextChange: true,
            scrollFromAnywhere: true
        });

        return () => {
            scroll.destroy();
        };
    }, []);

    // Generate random positions for hearts
    const hearts = Array.from({ length: 35 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 3 + 2,
    }));

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]" data-scroll-container>
            {/* Animated background */}
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
            >
                <div className="absolute inset-0 bg-gradient-radial from-white/[0.01] to-white/[0.005]" />
            </motion.div>

            {/* Hearts */}
            {hearts.map((heart) => (
                <FloatingHeart
                    key={heart.id}
                    color="#8E1616"
                    size={heart.size}
                    initialX={heart.x}
                    initialY={heart.y}
                    duration={heart.duration}
                />
            ))}

            {/* Time Counter */}
            <TimeCounter />
        </div>
    );
};

export default Landing; 