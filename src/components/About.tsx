import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about us.avif';

const About: React.FC = () => {
    return (
        <section id="about" className="bg-primary py-16 md:py-24 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-black text-center uppercase mb-12 md:mb-20 tracking-tight"
                >
                    About Us
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* About Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative overflow-hidden rounded-lg shadow-2xl group w-full"
                    >
                        <img
                            src={aboutImg}
                            alt="DreamTeam I.T. Solutions and Consultancy"
                            className="w-full h-64 sm:h-80 lg:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <p className="text-base md:text-lg leading-relaxed">
                            <strong className="font-black">DreamTeam I.T. Solutions and Consultancy</strong> has designed and developed custom business software solutions. It can advise and build custom software that streamlines your business processes, makes your employees more effective, and improves your business operations.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-white/80">
                            Our software developers are skilled across all phases and features of custom software design, program development, and software integration.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-white/80">
                            DT I.T. Solutions and Consultancy personnel have experience with numerous operating system platforms, including Microsoft Server, Windows 10/11, and Ubuntu Linux.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-white/80">
                            At DreamTeam... We bring IT Vision to Life through Technology & Excellence.
                        </p>

                        <div className="pt-4">
                            <a
                                href="#contact-form"
                                className="border-2 border-white px-8 py-3 rounded-sm font-black uppercase text-sm hover:bg-white hover:text-primary transition-all inline-block"
                            >
                                Book a Consultation
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
