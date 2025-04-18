import React from 'react';
import FloatingHearts from '../components/FloatingHearts';
import TimeCounter from '../components/TimeCounter';
import ScrollPrompt from '../components/ScrollPrompt';
import LoveMessage from '../components/LoveMessage';

const Landing = () => {
    return (
        <div className="min-h-[600vh] relative overflow-hidden">
            <FloatingHearts />
            
            {/* Main Content */}
            <div className="fixed inset-0 flex items-center justify-center z-10">
                <TimeCounter />
            </div>

            {/* Love Message */}
            <LoveMessage />

            {/* Scroll Prompt */}
            <ScrollPrompt />

            {/* Additional content can go here */}
            <div className="relative mt-[100vh] px-8 py-16">
                {/* Add more content here if needed */}
            </div>

            {/* New Love Messages Section */}
        </div>
    );
};

export default Landing; 