import React from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
    return (
        <section id="contact-form" className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Side: Text */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tight">LET'S TALK.</h2>
                        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md">
                            It all begins with the idea that you want to <span className="font-bold text-primary">DREAMTEAM</span> your business towards excellence. And through <span className="text-blue-500">digital transformation</span>, you can do just that by unlocking the fullest potential of your business.
                        </p>
                        <p className="text-primary font-bold text-xs tracking-widest uppercase">
                            DREAMTEAM your digital transformation journey with us.
                        </p>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-5"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 flex items-center gap-1">
                                    Name <span className="text-gray-400 font-normal lowercase">(required)</span>
                                </label>
                                <input type="text" placeholder="First Name" className="w-full bg-gray-100 border-none p-4 rounded-sm text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                            </div>
                            <div className="space-y-2 sm:pt-6">
                                <input type="text" placeholder="Last Name" className="w-full bg-gray-100 border-none p-4 rounded-sm text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 flex items-center gap-1">
                                Company Name <span className="text-gray-400 font-normal lowercase">(required)</span>
                            </label>
                            <input type="text" className="w-full bg-gray-100 border-none p-4 rounded-sm text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 flex items-center gap-1">
                                Email <span className="text-gray-400 font-normal lowercase">(required)</span>
                            </label>
                            <input type="email" className="w-full bg-gray-100 border-none p-4 rounded-sm text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 flex items-center gap-1">
                                Phone <span className="text-gray-400 font-normal lowercase">(required)</span>
                            </label>
                            <p className="text-[10px] text-gray-400 italic">Ex. +63 916 842 3904</p>
                            <div className="grid grid-cols-3 gap-3">
                                <select className="col-span-1 w-full bg-gray-100 border-none p-4 rounded-sm text-sm text-primary/70 focus:outline-none">
                                    <option className="bg-white">Philippines</option>
                                </select>
                                <input type="text" placeholder="+63" className="col-span-2 w-full bg-gray-100 border-none p-4 rounded-sm text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 flex items-center gap-1">
                                Message <span className="text-gray-400 font-normal lowercase">(required)</span>
                            </label>
                            <textarea rows={4} className="w-full bg-gray-100 border-none p-4 rounded-sm text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-all"></textarea>
                        </div>

                        <button className="w-full md:w-auto bg-primary text-white px-12 py-4 rounded-sm font-black uppercase text-sm tracking-widest hover:bg-primary/90 transform hover:-translate-y-1 transition-all shadow-lg active:scale-95">
                            Submit
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
