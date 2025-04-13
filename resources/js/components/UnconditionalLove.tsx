import React from 'react';

const HeartBowDecoration = () => (
    <>
        {/* Top Heart */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-400/50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
        </div>
        {/* Bow */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="relative w-16 h-8">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-pink-400/30 rounded-full transform -rotate-45"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-pink-400/30 rounded-full transform rotate-45"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-pink-400/40 rounded-full"></div>
            </div>
        </div>
        {/* Corner Hearts */}
        <div className="absolute -top-2 -left-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-400/40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
        </div>
        <div className="absolute -bottom-2 -right-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-400/40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
        </div>
    </>
);

const UnconditionalLove = () => {
    return (
        <div className="min-h-screen py-32 px-6 relative z-20">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm border-2 border-pink-300/30 hover:border-pink-400/50 transition-all duration-300 relative group">
                        <HeartBowDecoration />
                        <p className="text-2xl font-mono text-white/90 leading-relaxed group-hover:text-white transition-colors">
                            When we argue, I still love you the most
                        </p>
                    </div>
                    <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm border-2 border-pink-300/30 hover:border-pink-400/50 transition-all duration-300 relative group">
                        <HeartBowDecoration />
                        <p className="text-2xl font-mono text-white/90 leading-relaxed group-hover:text-white transition-colors">
                            When you're mad, I still love you the most
                        </p>
                    </div>
                    <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm border-2 border-pink-300/30 hover:border-pink-400/50 transition-all duration-300 relative group">
                        <HeartBowDecoration />
                        <p className="text-2xl font-mono text-white/90 leading-relaxed group-hover:text-white transition-colors">
                            When you're upset with me, I still love you the most
                        </p>
                    </div>
                    <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm border-2 border-pink-300/30 hover:border-pink-400/50 transition-all duration-300 relative group">
                        <HeartBowDecoration />
                        <p className="text-2xl font-mono text-white/90 leading-relaxed group-hover:text-white transition-colors">
                            When I'm mad, I still love you the most
                        </p>
                    </div>
                    <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm border-2 border-pink-300/30 hover:border-pink-400/50 transition-all duration-300 relative group">
                        <HeartBowDecoration />
                        <p className="text-2xl font-mono text-white/90 leading-relaxed group-hover:text-white transition-colors">
                            When you're having a hard time, I still love you the most
                        </p>
                    </div>
                    <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm border-2 border-pink-300/30 hover:border-pink-400/50 transition-all duration-300 relative group">
                        <HeartBowDecoration />
                        <p className="text-2xl font-mono text-white/90 leading-relaxed group-hover:text-white transition-colors">
                            When you're overwhelmed or overstimulated, I still love you the most
                        </p>
                    </div>
                </div>

                <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm border-2 border-pink-300/30 hover:border-pink-400/50 transition-all duration-300 relative group">
                    <HeartBowDecoration />
                    <p className="text-2xl font-mono text-white/90 leading-relaxed group-hover:text-white transition-colors">
                        When you're feeling empty, I'll fill you up with my love
                        <span className="text-pink-300"> (and not only :3)</span>
                    </p>
                </div>

                <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm border-2 border-pink-300/30 hover:border-pink-400/50 transition-all duration-300 relative group">
                    <HeartBowDecoration />
                    <p className="text-2xl font-mono text-white/90 leading-relaxed group-hover:text-white transition-colors">
                        I still love you the most, my love for you is unconditional. I'm always here to support you no matter what. I wouldn't trade my love for you for anything in existence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm border-2 border-pink-300/30 hover:border-pink-400/50 transition-all duration-300 relative group">
                        <HeartBowDecoration />
                        <p className="text-2xl font-mono text-white/90 leading-relaxed group-hover:text-white transition-colors">
                            And every day my love for you grows
                        </p>
                    </div>
                    <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm border-2 border-pink-300/30 hover:border-pink-400/50 transition-all duration-300 relative group">
                        <HeartBowDecoration />
                        <p className="text-2xl font-mono text-white/90 leading-relaxed group-hover:text-white transition-colors">
                            And every day we're apart, I miss you a little extra
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnconditionalLove; 