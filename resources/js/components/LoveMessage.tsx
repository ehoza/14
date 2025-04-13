import React, { useState } from 'react';
import { motion, useScroll, useTransform, cubicBezier, AnimatePresence } from 'framer-motion';

const LoveMessage = () => {
    const { scrollYProgress } = useScroll();
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
    
    // First message animations
    const firstOpacity = useTransform(
        scrollYProgress,
        [0.85, 0.87, 0.9, 0.92, 0.95, 0.97],
        [0, 0.3, 0.7, 1, 0.7, 0],
        { ease: cubicBezier(0.4, 0, 0.2, 1) }
    );

    const firstX = useTransform(
        scrollYProgress,
        [0.85, 0.92, 0.95],
        ['100%', '0%', '-100%'],
        { ease: cubicBezier(0, 0, 0, 1) }
    );

    const firstY = useTransform(
        scrollYProgress,
        [0.85, 0.92, 0.95],
        ['0%', '0%', '-100%'],
        { ease: cubicBezier(0, 0, 0, 1) }
    );

    const firstScale = useTransform(
        scrollYProgress,
        [0.85, 0.87, 0.9, 0.92, 0.95],
        [0.8, 0.85, 0.95, 1, 0.8],
        { ease: cubicBezier(0, 0, 0.2, 1) }
    );

    // Second message animations
    const secondOpacity = useTransform(
        scrollYProgress,
        [0.92, 0.94, 0.96, 0.98, 0.99, 1],
        [0, 0.3, 0.7, 1, 0.7, 0],
        { ease: cubicBezier(0.4, 0, 0.2, 1) }
    );

    const secondY = useTransform(
        scrollYProgress,
        [0.92, 0.98, 1],
        ['100%', '0%', '-100%'],
        { ease: cubicBezier(0, 0, 0, 1) }
    );

    const secondX = useTransform(
        scrollYProgress,
        [0.92, 0.98, 1],
        ['0%', '0%', '-100%'],
        { ease: cubicBezier(0, 0, 0, 1) }
    );

    const secondScale = useTransform(
        scrollYProgress,
        [0.92, 0.94, 0.96, 0.98, 0.99, 1],
        [0.8, 0.85, 0.95, 1, 0.95, 0.8],
        { ease: cubicBezier(0, 0, 0.2, 1) }
    );

    // Third message animations
    const thirdOpacity = useTransform(
        scrollYProgress,
        [0.98, 0.99, 0.995, 1],
        [0, 1, 1, 0],
        { ease: cubicBezier(0.4, 0, 0.2, 1) }
    );

    const thirdY = useTransform(
        scrollYProgress,
        [0.98, 0.99, 1],
        ['100%', '0%', '-100%'],
        { ease: cubicBezier(0, 0, 0, 1) }
    );

    const thirdScale = useTransform(
        scrollYProgress,
        [0.98, 0.99, 0.995, 1],
        [0.8, 1, 1, 0.8],
        { ease: cubicBezier(0, 0, 0.2, 1) }
    );

    // Photos section animations
    const photosOpacity = useTransform(
        scrollYProgress,
        [0.995, 1, 1.01, 1.02],
        [0, 1, 1, 0],
        { ease: cubicBezier(0.4, 0, 0.2, 1) }
    );

    const photosY = useTransform(
        scrollYProgress,
        [0.995, 1, 1.02],
        ['100%', '0%', '-100%'],
        { ease: cubicBezier(0, 0, 0, 1) }
    );

    const photosScale = useTransform(
        scrollYProgress,
        [0.995, 1, 1.01, 1.02],
        [0.8, 1, 1, 0.8],
        { ease: cubicBezier(0, 0, 0.2, 1) }
    );

    const initialPhotos = Array.from({ length: 6 }, (_, i) => `/images/memories/memory-${i + 1}.jpeg`);
    const remainingPhotos = Array.from({ length: 91 }, (_, i) => `/images/memories/memory-${i + 7}.jpeg`);
    const videos = Array.from({ length: 5 }, (_, i) => `/images/memories/video-${i + 1}.mp4`);
    const allMedia = [...remainingPhotos, ...videos];

    return (
        <>
            <motion.div
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none w-full max-w-2xl px-6"
                style={{ opacity: firstOpacity, x: firstX, y: firstY, scale: firstScale }}
            >
                <motion.div className="flex flex-col items-center gap-6">
                    <motion.p
                        className="text-3xl font-mono text-white/90 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        And there is no one I'd like to spend
                        <br />
                        all that time with
                        <br />
                        <motion.span
                            className="text-pink-300 font-semibold"
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            except you, only you
                        </motion.span>
                    </motion.p>

                    <div className="flex gap-2 justify-center">
                        {[...Array(3)].map((_, i) => (
                            <motion.svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 text-pink-300/80"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 10, -10, 0]
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.4
                                }}
                            >
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </motion.svg>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none w-full max-w-2xl px-6"
                style={{ opacity: secondOpacity, y: secondY, x: secondX, scale: secondScale }}
            >
                <motion.div className="flex flex-col items-center gap-6">
                    <motion.p
                        className="text-3xl font-mono text-white/90 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        Countless memories we made together
                        <br />
                        <motion.span
                            className="text-pink-300 font-semibold"
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            each one more precious than the last
                        </motion.span>
                    </motion.p>
                </motion.div>
            </motion.div>

            <motion.div
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none w-full max-w-2xl px-6"
                style={{ opacity: thirdOpacity, y: thirdY, scale: thirdScale }}
            >
                <motion.div className="flex flex-col items-center gap-6">
                    <motion.p
                        className="text-3xl font-mono text-white/90 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        Countless dumb things we did together
                        <br />
                        <motion.span
                            className="text-pink-300 font-semibold"
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            and I'd do them all again with you
                        </motion.span>
                    </motion.p>
                </motion.div>
            </motion.div>

            <motion.div
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none w-full max-w-4xl px-6"
                style={{ opacity: photosOpacity, y: photosY, scale: photosScale }}
            >
                <motion.div className="flex flex-col items-center gap-8">
                    <motion.h2
                        className="text-4xl font-mono text-white/90"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        And these are my favorite memories
                    </motion.h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                        {initialPhotos.map((photo, i) => (
                            <motion.div
                                key={i}
                                className="aspect-square rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm cursor-pointer group"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.1,
                                    ease: "easeOut"
                                }}
                                onClick={() => {
                                    setIsGalleryOpen(true);
                                    setSelectedPhoto(i);
                                }}
                            >
                                <img
                                    src={photo}
                                    alt={`Memory ${i + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        className="mt-8 px-6 py-3 bg-pink-500/20 hover:bg-pink-500/30 text-white rounded-lg backdrop-blur-sm border border-pink-500/30 transition-all duration-300 pointer-events-auto"
                        onClick={() => setIsGalleryOpen(true)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        View all of them
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Gallery Modal */}
            <AnimatePresence>
                {isGalleryOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsGalleryOpen(false)}
                    >
                        <motion.div
                            className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-lg"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 z-10 text-white hover:text-pink-300 transition-colors"
                                onClick={() => setIsGalleryOpen(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 overflow-y-auto max-h-[90vh]">
                                {allMedia.map((media, i) => (
                                    <motion.div
                                        key={i}
                                        className="aspect-square rounded-lg overflow-hidden cursor-pointer group relative"
                                        onClick={() => setSelectedPhoto(i + 6)}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        {media.includes('video') ? (
                                            <>
                                                <video
                                                    src={media}
                                                    className="w-full h-full object-cover"
                                                    muted
                                                    loop
                                                    playsInline
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                            </>
                                        ) : (
                                            <img
                                                src={media}
                                                alt={`Memory ${i + 7}`}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Media Viewer Modal */}
            <AnimatePresence>
                {selectedPhoto !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <motion.div
                            className="relative w-full max-w-4xl"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 z-10 text-white hover:text-pink-300 transition-colors"
                                onClick={() => setSelectedPhoto(null)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="aspect-square rounded-lg overflow-hidden bg-white/10">
                                {selectedPhoto < 6 ? (
                                    <img
                                        src={initialPhotos[selectedPhoto]}
                                        alt={`Memory ${selectedPhoto + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    allMedia[selectedPhoto - 6].includes('video') ? (
                                        <video
                                            src={allMedia[selectedPhoto - 6]}
                                            className="w-full h-full object-cover"
                                            controls
                                            autoPlay
                                        />
                                    ) : (
                                        <img
                                            src={allMedia[selectedPhoto - 6]}
                                            alt={`Memory ${selectedPhoto + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    )
                                )}
                            </div>

                            <div className="flex justify-between mt-4">
                                <button
                                    className="px-4 py-2 bg-pink-500/20 hover:bg-pink-500/30 text-white rounded-lg backdrop-blur-sm border border-pink-500/30 transition-all duration-300"
                                    onClick={() => setSelectedPhoto(prev => prev !== null ? Math.max(0, prev - 1) : null)}
                                >
                                    Previous
                                </button>
                                <button
                                    className="px-4 py-2 bg-pink-500/20 hover:bg-pink-500/30 text-white rounded-lg backdrop-blur-sm border border-pink-500/30 transition-all duration-300"
                                    onClick={() => setSelectedPhoto(prev => prev !== null ? Math.min(initialPhotos.length + allMedia.length - 1, prev + 1) : null)}
                                >
                                    Next
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default LoveMessage; 