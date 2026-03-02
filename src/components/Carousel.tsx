import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CarouselProps {
    items: any[];
    renderItem: (item: any, index: number) => React.ReactNode;
    visibleItems?: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, renderItem, visibleItems = 3 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(visibleItems);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(Math.min(2, visibleItems));
            } else if (window.innerWidth < 1280) {
                setItemsPerView(Math.min(3, visibleItems));
            } else {
                setItemsPerView(visibleItems);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [visibleItems]);

    const maxIndex = Math.max(0, items.length - itemsPerView);

    const next = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    // Auto-scroll logic if desired, but user didn't ask. 
    // I'll skip auto-scroll for now to keep it simple, or add it for WOW.

    return (
        <div className="relative w-full group" ref={containerRef}>
            <div className="overflow-hidden px-2 py-4">
                <motion.div
                    className="flex gap-6 lg:gap-10"
                    animate={{
                        x: `-${currentIndex * (100 / itemsPerView)}%`
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0"
                            style={{ width: `calc((100% - ${(itemsPerView - 1) * 2.5}rem) / ${itemsPerView})` }}
                        >
                            {renderItem(item, idx)}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Controls */}
            {currentIndex > 0 && (
                <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-2xl p-4 rounded-full text-primary z-10 hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center"
                    aria-label="Previous"
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}

            {currentIndex < maxIndex && (
                <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-2xl p-4 rounded-full text-primary z-10 hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center"
                    aria-label="Next"
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}

            {/* Pagination dots for mobile */}
            <div className="flex justify-center gap-2 mt-8 md:hidden">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-1.5 transition-all duration-300 ${currentIndex === i ? 'w-8 bg-primary' : 'w-2 bg-primary/20'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
