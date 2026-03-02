import React from 'react';
import { motion } from 'framer-motion';

const MissionVision: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-primary relative">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-black text-center text-white uppercase mb-12 md:mb-20 tracking-tight"
                >
                    Mission & Vision
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="bg-primary p-8 md:p-16"
                    >
                        <h3 className="text-sm font-black text-blue-300 uppercase tracking-widest mb-4">Mission</h3>
                        <p className="text-xl md:text-2xl font-black text-white leading-tight lowercase first-letter:uppercase">
                            To provide the best technological support and to offer innovative IT Solutions and services to our customers that are manageable and cost-effective.
                        </p>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="bg-primary p-8 md:p-16 border-t md:border-t-0 border-white/10"
                    >
                        <h3 className="text-sm font-black text-blue-300 uppercase tracking-widest mb-4">Vision</h3>
                        <p className="text-lg md:text-xl font-black text-white leading-tight lowercase first-letter:uppercase">
                            Our vision is to develop continuously and grow into a major IT Solutions service provider, becoming a leading performer. We always guide our customers to success. <span className="font-accent text-white normal-case text-base md:text-lg">Bringing IT Vision to Life.</span>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
