import React from 'react';
import { motion } from 'framer-motion';
import sapLogo from '../assets/SAP Business One .png';
import quickbooksLogo from '../assets/QuickBooks.png';
import myobLogo from '../assets/MYOB.png';
import sageLogo from '../assets/Sage50.png';

const solutions = [
    { title: 'SAP Business One', image: sapLogo },
    { title: 'QuickBooks', image: quickbooksLogo },
    { title: 'MYOB', image: myobLogo },
    { title: 'Sage 50', image: sageLogo },
];

const Solutions: React.FC = () => {
    return (
        <section id="solutions" className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-black text-center text-primary uppercase mb-12 md:mb-20 tracking-tight"
                >
                    Our Solutions
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 md:gap-x-12 max-w-5xl mx-auto">
                    {solutions.map((sol, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="flex flex-col items-center text-center group cursor-pointer"
                        >
                            <div className="w-full aspect-video flex items-center justify-center p-6 md:p-8 bg-gray-50 mb-4 md:mb-6 group-hover:bg-primary/5 transition-all duration-500 rounded-lg border border-gray-100 shadow-sm">
                                <img
                                    src={sol.image}
                                    alt={sol.title}
                                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-lg md:text-2xl font-black text-primary uppercase">
                                {sol.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
    