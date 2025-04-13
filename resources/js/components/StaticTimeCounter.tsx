import React, { useEffect, useState } from 'react';

type TimeElapsed = {
    years: number;
    months: number;
    weeks: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const StaticTimeCounter = () => {
    const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

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

    const sections = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'] as const;

    return (
        <div className="fixed top-4 left-0 right-0 flex justify-center z-50">
            <div className="grid grid-cols-7 gap-4 scale-[0.4] origin-top">
                {sections.map((section) => (
                    <div key={section} className="text-center">
                        <div className="text-6xl font-bold text-white font-mono">
                            {String(timeElapsed[section]).padStart(2, '0')}
                        </div>
                        <div className="text-lg text-white/60 font-mono mt-2 capitalize">
                            {section}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StaticTimeCounter; 