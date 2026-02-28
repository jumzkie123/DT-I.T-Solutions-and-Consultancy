import React from 'react';
import { motion } from 'framer-motion';
import server08 from '../assets/Microsoft Server 2008jpg.jpg';
import server12 from '../assets/Microsoft Server 2012.jpg';
import server22 from '../assets/Microsoft 2022.jpg';
import win7_10 from '../assets/Windows 7 and Windows 10 workstations.jpg';
import win11 from '../assets/Windows 11 workstationjpg.jpg';
import ubuntu from '../assets/Ubuntu Desktop (Linux), and Ubuntu Server (Linux).png';

const expertise = [
    { title: 'Microsoft Server 2008', image: server08 },
    { title: 'Microsoft Server 2012', image: server12 },
    { title: 'Microsoft 2022', image: server22 },
    { title: 'Windows 7 & 10 Workstations', image: win7_10 },
    { title: 'Windows 11 Workstation', image: win11 },
    { title: 'Ubuntu Desktop & Server', image: ubuntu },
];

const Expertise: React.FC = () => {
    return (
        <section id="expertise" className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-black text-primary text-center uppercase mb-6 md:mb-10 tracking-tight"
                >
                    Our Expertise
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center text-gray-500 mb-12 md:mb-20 max-w-3xl mx-auto font-medium text-sm md:text-base"
                >
                    Our team is skilled across numerous operating system platforms and enterprise infrastructure environments.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 md:gap-x-12 max-w-5xl mx-auto">
                    {expertise.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="flex flex-col items-center group cursor-default"
                        >
                            <div className="w-full aspect-video flex items-center justify-center p-6 md:p-8 bg-white border border-gray-100 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-500">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-base md:text-xl font-black text-primary uppercase text-center">
                                {item.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
