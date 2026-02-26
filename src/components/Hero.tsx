import React from 'react';
import { motion } from 'framer-motion';
import handshake from '../assets/handshake.jpg';

const Hero: React.FC = () => {
    return (
        <div className="relative min-h-[60vh] md:h-[85vh] flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.8 }}
                    transition={{ duration: 1.5 }}
                    src={handshake}
                    alt="Business Handshake"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-primary/40"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-0">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-3xl sm:text-5xl md:text-7xl font-black text-white uppercase leading-tight tracking-normal max-w-5xl mx-auto drop-shadow-sm"
                >
                    DreamTeam Growth Through Technology and Excellence
                </motion.h1>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "6rem" }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-8 mx-auto h-1.5 md:h-2 bg-white"
                ></motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
                >
                    <a href="#contact-form" className="bg-white text-primary px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-white/90 transition-all">
                        Book a Consultation
                    </a>
                    <a href="#solutions" className="border-2 border-white text-white px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-white hover:text-primary transition-all">
                        Our Solutions
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
