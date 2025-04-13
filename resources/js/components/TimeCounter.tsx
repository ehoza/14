import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type TimeElapsed = {
    years: number;
    months: number;
    weeks: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const TimeCounter = () => {
    const { scrollYProgress } = useScroll();
    const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Transform scroll progress for initial number reveals
    const sections = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'] as const;
    type Section = typeof sections[number];
    
    const sectionProgress = sections.map((_, index) => {
        const start = index * 0.12;
        const end = start + 0.12;
        return {
            opacity: useTransform(scrollYProgress, [start, end], [0, 1]),
            x: useTransform(scrollYProgress, [start, end], [-50, 0])
        };
    });

    // Transform for the shrinking animation
    const containerScale = useTransform(
        scrollYProgress,
        [0.85, 1],
        [1, 0.4]  // Made slightly smaller to fit better at the top
    );

    const containerY = useTransform(
        scrollYProgress,
        [0.85, 1],
        ['0%', '-50vh']  // Moved higher up
    );

    // Title fade out and move up faster
    const titleOpacity = useTransform(
        scrollYProgress,
        [0.85, 0.9],
        [1, 0]
    );

    const titleY = useTransform(
        scrollYProgress,
        [0.85, 0.9],
        [0, -50]
    );

    const numbersScale = useTransform(
        scrollYProgress,
        [0.85, 1],
        [1, 0.6]
    );

    const gridGap = useTransform(
        scrollYProgress,
        [0.85, 1],
        ['2rem', '0.4rem']  // Slightly tighter gap for better fit
    );

    useEffect(() => {
        // Set start date (April 14, 2024 14:11:00 UTC+2)
        const startDate = new Date('2024-04-14T14:11:00+02:00');
        
        const updateTime = () => {
            const now = new Date();
            const difference = Math.abs(now.getTime() - startDate.getTime());
            
            // Calculate total values for each unit
            const totalSeconds = Math.floor(difference / 1000);
            const totalMinutes = Math.floor(difference / (1000 * 60));
            const totalHours = Math.floor(difference / (1000 * 60 * 60));
            const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
            const totalWeeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
            const totalMonths = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44)); // Average month length
            const totalYears = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25)); // Account for leap years

            setTimeElapsed({ 
                years: totalYears,
                months: totalMonths,
                weeks: totalWeeks,
                days: totalDays,
                hours: totalHours,
                minutes: totalMinutes,
                seconds: totalSeconds
            });
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div 
            className="text-center"
            style={{ 
                scale: containerScale,
                y: containerY
            }}
        >
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ 
                    opacity: titleOpacity,
                    y: titleY
                }}
                className="mb-16 text-6xl font-mono text-white/80"
            >
                We've been together for...
            </motion.h1>

            <motion.div 
                className="grid grid-cols-7"
                style={{ 
                    scale: numbersScale,
                    gap: gridGap
                }}
            >
                {sections.map((section, index) => (
                    <motion.div 
                        key={section}
                        style={{ 
                            opacity: sectionProgress[index].opacity,
                            x: sectionProgress[index].x
                        }}
                        className="text-center"
                    >
                        <div className="text-6xl font-bold text-white font-mono">
                            {String(timeElapsed[section]).padStart(2, '0')}
                        </div>
                        <div className="text-lg text-white/60 font-mono mt-2 capitalize">
                            {section}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default TimeCounter; 