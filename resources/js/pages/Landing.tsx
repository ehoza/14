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
            <div className="relative mt-[200vh] px-8 py-16 bg-gradient-to-b from-pink-50/50 to-white/50">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">My Promises to You</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-pink-100">
                            <p className="text-lg text-gray-800">"We argue, I still love you the most"</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-pink-100">
                            <p className="text-lg text-gray-800">"You are mad, I still love you the most"</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-pink-100">
                            <p className="text-lg text-gray-800">"You are upset with me, I still love you the most"</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-pink-100">
                            <p className="text-lg text-gray-800">"I'm mad, still love you the most"</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-pink-100">
                            <p className="text-lg text-gray-800">"You are having a hard time, I still love you the most"</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-pink-100">
                            <p className="text-lg text-gray-800">"You are overwhelmed/overstimulated, still love you the most"</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-pink-100">
                            <p className="text-lg text-gray-800">"You are feeling empty, i'll fill you up with my love(and not only :3)"</p>
                        </div>
                    </div>

                    <div className="mt-12 space-y-8">
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-pink-100">
                            <p className="text-xl text-gray-800 leading-relaxed">
                                "I still love you the most, my love for you is unconditional. i'm always here to support you no matter what, i wouldn't trade my love for you for anything in existence"
                            </p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-pink-100">
                            <p className="text-lg text-gray-800">"And every day my love for you grows"</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-pink-100">
                            <p className="text-lg text-gray-800">"And everyday we are appart, i miss you a little extra"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing; 