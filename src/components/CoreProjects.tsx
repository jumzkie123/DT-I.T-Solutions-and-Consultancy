import React from 'react';
import { motion } from 'framer-motion';
import AgriTrack from '../assets/AgriTrack.png';
import DocTrack from '../assets/DocTrack.png';
import HRIS from '../assets/HRIS.webp';
import QR from '../assets/QR.png';
import ASSIST from '../assets/ASSIST.jpg';

const projects = [
    {
        title: 'AgriTrack',
        image: AgriTrack,
        link: 'https://agritrackdtitsolutions.vercel.app/'
    },
    {
        title: 'DocTrack',
        image: DocTrack,
        link: 'https://document-tracking-system-one.vercel.app/'
    },
    {
        title: 'HRIS',
        image: HRIS,
        link: 'https://ajgsecurityv2.vercel.app/'
    },
    {
        title: 'Attendance with QR',
        image: QR,
        link: 'https://attendance-with-qr.vercel.app/'
    },
    {
        title: 'ASSIST',
        image: ASSIST,
        link: 'https://ticketting-system-drab.vercel.app/'
    }
];

const CoreProjects: React.FC = () => {
    return (
        <section className="bg-primary py-16 md:py-24 text-white border-t border-white/5">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
                            Our Core Projects
                        </h2>
                        <p className="text-white/60 text-lg">
                            Showcasing our latest innovations and custom software solutions designed for excellence.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 block"
                        >
                            <div className="aspect-video overflow-hidden bg-white flex items-center justify-center p-6">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold tracking-tight group-hover:text-white/90 transition-colors">
                                        {project.title}
                                    </h3>
                                    <svg 
                                        className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                                <p className="mt-2 text-sm text-white/40 uppercase font-bold tracking-widest">
                                    View Project
                                </p>
                            </div>
                            
                            {/* Glass overlay on hover */}
                            <div className="absolute inset-x-0 top-0 h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreProjects;
