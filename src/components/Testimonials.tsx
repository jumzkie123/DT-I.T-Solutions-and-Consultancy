import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import Carousel from './Carousel';

interface Testimonial {
    id?: string;
    name: string;
    role: string;
    text: string;
    company: string;
}

const mockTestimonials: Testimonial[] = [
    {
        name: 'Kerby S. Cruz',
        role: 'Operations Manager, G&L Trading',
        text: 'The SAP Business One implementation by DreamTeam has completely streamlined our internal processes. Their technical expertise and after-sales support are truly world-class.',
        company: 'Retail Industry'
    },
    {
        name: 'Marianne L. Santos',
        role: 'Human Resources Director',
        text: 'Moving to their Payroll and HRIS solution was the best decision we made this year. It handled our complex employee benefits and government deductions flawlessly.',
        company: 'Logistics Sector'
    },
    {
        name: 'Roberto V. Go',
        role: 'Business Owner',
        text: 'Their customized Document Tracking System eliminated the bottlenecks in our paperwork flow. I can now track every request in real-time from my mobile device.',
        company: 'Services'
    },
    {
        name: 'Angelica M. Cruz',
        role: 'Financial Controller',
        text: 'The implementation process was very professional. They took the time to understand our business needs and delivered a solution that exceeded our expectations.',
        company: 'Manufacturing'
    },
    {
        name: 'Juan Dela Cruz',
        role: 'IT Director',
        text: 'Excellent service and top-notch technical support. Their team is always ready to help whenever we encounter any issues.',
        company: 'Education'
    },
    {
        name: 'Maria Clara',
        role: 'HR Manager',
        text: 'The payroll system has saved us hours of manual work every month. Highly recommended for any growing business.',
        company: 'Hospitality'
    }
];

const Testimonials: React.FC = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const { data, error } = await supabase
                    .from('testimonials')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                if (data && data.length > 0) {
                    setTestimonials(data);
                } else {
                    setTestimonials(mockTestimonials);
                }
            } catch (err) {
                console.error('Error fetching testimonials:', err);
                setTestimonials(mockTestimonials);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    const displayItems = testimonials.length > 0 ? testimonials : (loading ? [] : mockTestimonials);
    const isCarousel = displayItems.length > 3;

    return (
        <section id="testimonials" className="py-16 md:py-24 bg-slate-200">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 overflow-hidden">
                <div className="flex flex-col items-center mb-16 md:mb-24">
                    <h2 className="text-sm font-black text-primary/40 uppercase tracking-[0.3em] mb-4">Clients Feedback</h2>
                    <h3 className="text-3xl md:text-6xl font-black text-primary uppercase tracking-tight text-center">TESTIMONIALS</h3>
                    <div className="w-20 h-1.5 bg-primary mt-8"></div>
                </div>

                {isCarousel ? (
                    <Carousel
                        items={displayItems}
                        visibleItems={3}
                        renderItem={(t, idx) => (
                            <motion.div
                                key={t.id || idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white p-12 md:p-20 shadow-xl shadow-black/5 relative flex flex-col justify-between h-full min-h-[550px]"
                            >
                                <div className="absolute top-0 right-0 p-12">
                                    <svg className="h-16 w-16 text-slate-100" fill="currentColor" viewBox="0 0 32 32">
                                        <path d="M10 8v8H6c0 4.418 3.582 8 8 8v4c-6.627 0-12-5.373-12-12V8h8zm18 0v8h-4c0 4.418 3.582 8 8 8v4c-6.627 0-12-5.373-12-12V8h8z" />
                                    </svg>
                                </div>

                                <div>
                                    <h4 className="text-base font-black text-blue-500 uppercase tracking-widest mb-10">{t.company}</h4>
                                    <p className="text-2xl md:text-3xl font-medium text-primary/80 leading-relaxed mb-12 italic">
                                        "{t.text}"
                                    </p>
                                </div>

                                <div className="border-t border-slate-100 pt-10 mt-auto">
                                    <h5 className="text-xl font-black text-primary uppercase">{t.name}</h5>
                                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">{t.role}</p>
                                </div>
                            </motion.div>
                        )}
                    />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {displayItems.map((t, idx) => (
                            <motion.div
                                key={t.id || idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-12 md:p-14 shadow-xl shadow-black/5 relative flex flex-col justify-between h-full min-h-[450px]"
                            >
                                <div className="absolute top-0 right-0 p-8">
                                    <svg className="h-12 w-12 text-slate-100" fill="currentColor" viewBox="0 0 32 32">
                                        <path d="M10 8v8H6c0 4.418 3.582 8 8 8v4c-6.627 0-12-5.373-12-12V8h8zm18 0v8h-4c0 4.418 3.582 8 8 8v4c-6.627 0-12-5.373-12-12V8h8z" />
                                    </svg>
                                </div>

                                <div>
                                    <h4 className="text-sm font-black text-blue-500 uppercase tracking-widest mb-6">{t.company}</h4>
                                    <p className="text-xl font-medium text-primary/80 leading-relaxed mb-10">
                                        "{t.text}"
                                    </p>
                                </div>

                                <div className="border-t border-slate-100 pt-8 mt-auto">
                                    <h5 className="text-lg font-black text-primary uppercase">{t.name}</h5>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{t.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
                {loading && displayItems.length === 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {Array(3).fill(0).map((_, i) => (
                            <div key={i} className="bg-white p-10 h-64 animate-pulse"></div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;

