import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@inertiajs/react';

const MemoriesGallery = () => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

    const initialPhotos = Array.from({ length: 6 }, (_, i) => `/images/memories/memory-${i + 1}.jpeg`);
    const remainingPhotos = Array.from({ length: 91 }, (_, i) => `/images/memories/memory-${i + 7}.jpeg`);
    const videos = Array.from({ length: 5 }, (_, i) => `/images/memories/video-${i + 1}.mp4`);
    const allMedia = [...remainingPhotos, ...videos];

    return (
        <div className="pointer-events-auto">
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

            <div className="mt-8 flex gap-4">
                <motion.button
                    className="px-6 py-3 bg-pink-500/20 hover:bg-pink-500/30 text-white rounded-lg backdrop-blur-sm border border-pink-500/30 transition-all duration-300"
                    onClick={() => setIsGalleryOpen(true)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    View all of them
                </motion.button>

                <Link href="/next-page">
                    <motion.button
                        className="px-6 py-3 bg-pink-500/20 hover:bg-pink-500/30 text-white rounded-lg backdrop-blur-sm border border-pink-500/30 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        Next Page
                    </motion.button>
                </Link>
            </div>

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
        </div>
    );
};

export default MemoriesGallery; 