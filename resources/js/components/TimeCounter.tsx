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

    // Transform scroll progress for each number
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

    useEffect(() => {
        // Set start date (April 14, 2024 00:00:00 UTC)
        const startDate = new Date(Date.UTC(2024, 3, 14, 0, 0, 0));
        
        const updateTime = () => {
            const now = new Date();
            const difference = now.getTime() - startDate.getTime();

            if (difference <= 0) {
                setTimeElapsed({ 
                    years: 0, months: 0, weeks: 0, days: 0,
                    hours: 0, minutes: 0, seconds: 0 
                });
                return;
            }

            const totalSeconds = Math.floor(difference / 1000);
            const totalMinutes = Math.floor(totalSeconds / 60);
            const totalHours = Math.floor(totalMinutes / 60);
            const totalDays = Math.floor(totalHours / 24);

            const years = Math.floor(totalDays / 365);
            const remainingDays = totalDays % 365;
            const months = Math.floor(remainingDays / 30);
            const remainingDaysAfterMonths = remainingDays % 30;
            const weeks = Math.floor(remainingDaysAfterMonths / 7);
            const days = remainingDaysAfterMonths % 7;
            const hours = totalHours % 24;
            const minutes = totalMinutes % 60;
            const seconds = totalSeconds % 60;

            setTimeElapsed({ 
                years, months, weeks, days,
                hours, minutes, seconds 
            });
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-16 text-6xl font-mono text-white/80"
            >
                We've been together for...
            </motion.h1>

            <div className="grid grid-cols-7 gap-8">
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
            </div>
        </div>
    );
};

export default TimeCounter; 