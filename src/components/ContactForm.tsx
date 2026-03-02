import React from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
    const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://formsubmit.co/ajax/limutinkerby@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok && result.success === "true") {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact-form" className="py-16 md:py-24 bg-slate-200">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
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
                    >
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white p-12 rounded-sm shadow-xl text-center space-y-6 flex flex-col items-center justify-center min-h-[400px]"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-black text-primary uppercase tracking-tight">Thank You!</h3>
                                <p className="text-gray-500 font-medium">Your message has been submitted successfully. We will get back to you shortly.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="text-primary font-black uppercase text-xs tracking-widest border-b-2 border-primary hover:text-blue-600 hover:border-blue-600 transition-all pb-1"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 flex items-center gap-1">
                                            Name <span className="text-gray-400 font-normal lowercase">(required)</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="First Name"
                                            placeholder="First Name"
                                            required
                                            className="w-full bg-slate-100 border-slate-300 p-4 rounded-sm text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2 sm:pt-6">
                                        <input
                                            type="text"
                                            name="Last Name"
                                            placeholder="Last Name"
                                            required
                                            className="w-full bg-slate-100 border-slate-300 p-4 rounded-sm text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 flex items-center gap-1">
                                        Company Name <span className="text-gray-400 font-normal lowercase">(required)</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="Company"
                                        required
                                        className="w-full bg-slate-100 border-slate-300 p-4 rounded-sm text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 flex items-center gap-1">
                                        Email <span className="text-gray-400 font-normal lowercase">(required)</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="Email Address"
                                        required
                                        className="w-full bg-slate-100 border-slate-300 p-4 rounded-sm text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 flex items-center gap-1">
                                        Phone <span className="text-gray-400 font-normal lowercase">(required)</span>
                                    </label>
                                    <p className="text-[10px] text-gray-400">Ex. +63 916 842 3904</p>
                                    <div className="grid grid-cols-3 gap-3">
                                        <select
                                            name="Country"
                                            className="col-span-1 w-full bg-slate-100 border-slate-300 p-4 rounded-sm text-sm text-primary/70 focus:outline-none"
                                        >
                                            <option className="bg-white" value="Philippines">Philippines</option>
                                        </select>
                                        <input
                                            type="text"
                                            name="Phone Number"
                                            placeholder="+63"
                                            required
                                            className="col-span-2 w-full bg-slate-100 border-slate-300 p-4 rounded-sm text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 flex items-center gap-1">
                                        Message <span className="text-gray-400 font-normal lowercase">(required)</span>
                                    </label>
                                    <textarea
                                        name="Message"
                                        rows={4}
                                        required
                                        className="w-full bg-slate-100 border-slate-300 p-4 rounded-sm text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-all"
                                    ></textarea>
                                </div>

                                {/* FormSubmit Configuration */}
                                <input type="hidden" name="_subject" value="New Inquiry: DT I.T. Solutions Website" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_captcha" value="true" />
                                <input type="hidden" name="_honey" style={{ display: 'none' }} />

                                {status === 'error' && (
                                    <p className="text-red-500 text-xs font-bold uppercase tracking-widest">
                                        Something went wrong. Please try again.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full md:w-auto bg-primary text-white px-12 py-4 rounded-sm font-black uppercase text-sm tracking-widest hover:bg-primary/90 transform hover:-translate-y-1 transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? 'Submitting...' : 'Submit'}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
