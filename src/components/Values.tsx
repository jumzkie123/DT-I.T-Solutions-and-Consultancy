import React from 'react';
import { motion } from 'framer-motion';

const values = [
    { title: 'Total Customer Satisfaction', desc: 'We focus on understanding our customers and strive to deliver with speed.' },
    { title: 'Respect', desc: 'We hold strong values in business and fully respect our customers and partners.' },
    { title: 'Competence', desc: 'We make it a point that all our projects are on par with world standards.' },
    { title: 'Cost Effectiveness', desc: 'High-quality yet economically sound investment for our clients.' },
    { title: 'Teamwork', desc: 'Diversity and unity brings creativity to our relationships.' },
    { title: 'Integrity', desc: 'We uphold the highest ethical standards and professionalism.' },
    { title: 'Innovation', desc: 'Informative regarding new ideas and emerging market needs.' },
    { title: 'Growth', desc: 'Ensuring lasting, rewarding careers for our people.' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
}

const Values: React.FC = () => {
    return (
        <section id="values" className="py-16 md:py-24 bg-primary border-t border-white/5">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-black text-white text-center uppercase mb-12 md:mb-16 tracking-tight"
                >
                    Our Core Values
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {values.map((val, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="bg-white/5 p-6 md:p-8 border border-white/10 shadow-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            <div className="w-8 h-1 bg-blue-400 mb-4"></div>
                            <h3 className="text-base md:text-lg font-black text-white uppercase mb-4 leading-tight">{val.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed">{val.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Values;
