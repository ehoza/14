import React from 'react';
import FloatingHearts from '../components/FloatingHearts';
import TimeCounter from '../components/TimeCounter';

const Landing = () => {
    return (
        <div className="min-h-[400vh] relative overflow-hidden">
            <FloatingHearts />
            
            {/* Main Content */}
            <div className="fixed inset-0 flex items-center justify-center z-10">
                <TimeCounter />
            </div>
        </div>
    );
};

export default Landing; 