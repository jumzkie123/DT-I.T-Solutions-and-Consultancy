import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import Carousel from './Carousel';

interface NewsItem {
    id?: string;
    date: string;
    title: string;
    description: string;
    category: string;
}

const mockNewsItems: NewsItem[] = [
    {
        date: 'March 15, 2024',
        title: 'DreamTeam Hosts Digital Transformation Summit',
        description: 'Our annual summit brought together industry leaders to discuss the impact of AI and automated ERP systems in the local market.',
        category: 'Events'
    },
    {
        date: 'February 28, 2024',
        title: 'New Cloud Integration for POS Systems',
        description: 'We are excited to announce full cloud synchronization for our POS Retail solutions, allowing real-time monitoring from anywhere.',
        category: 'Product Update'
    },
    {
        date: 'January 12, 2024',
        title: 'Enhanced SAP Business One Support',
        description: 'DreamTeam expands its dedicated support team to provide 24/7 assistance for our SAP Business One clients.',
        category: 'Service'
    },
    {
        date: 'December 05, 2023',
        title: 'New Office Branch Opening in Cebu',
        description: 'DreamTeam expands its reach to the Visayas region to better serve our growing client base in the south.',
        category: 'Corporate'
    },
    {
        date: 'November 20, 2023',
        title: 'DreamTeam Receives Quality Service Award',
        description: 'We are honored to be recognized for our commitment to excellence in providing I.T. solutions to local businesses.',
        category: 'Milestone'
    },
    {
        date: 'October 15, 2023',
        title: 'Tech Talk: The Future of ERP Systems',
        description: 'Join our upcoming webinar where we discuss how modern ERP systems are evolving with AI and machine learning.',
        category: 'Events'
    }
];

const NewsUpdates: React.FC = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const { data, error } = await supabase
                    .from('news')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                if (data && data.length > 0) {
                    setNews(data);
                } else {
                    setNews(mockNewsItems);
                }
            } catch (err) {
                console.error('Error fetching news:', err);
                setNews(mockNewsItems);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const displayItems = news.length > 0 ? news : (loading ? [] : mockNewsItems);
    const isCarousel = displayItems.length > 3;

    return (
        <section id="news" className="py-16 md:py-24 bg-slate-200 text-primary">
            <div className="max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">Latest News</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight">NEWS AND UPDATES</h3>
                    </div>
                </motion.div>

                {isCarousel ? (
                    <Carousel
                        items={displayItems}
                        visibleItems={3}
                        renderItem={(item, idx) => (
                            <motion.div
                                key={item.id || idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-12 md:p-14 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between border border-slate-300 h-full min-h-[500px]"
                            >
                                <div>
                                    <div className="flex justify-between items-center mb-8">
                                        <span className="text-[14px] font-black text-blue-600 uppercase tracking-widest bg-blue-500/10 px-5 py-2">{item.category}</span>
                                        <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">{item.date}</span>
                                    </div>
                                    <h4 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-tight mb-8 group-hover:text-blue-600 transition-colors leading-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12 line-clamp-5">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {displayItems.map((item, idx) => (
                            <motion.div
                                key={item.id || idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-10 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between border border-slate-300 h-full min-h-[400px]"
                            >
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-500/10 px-3 py-1">{item.category}</span>
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.date}</span>
                                    </div>
                                    <h4 className="text-xl font-black text-primary uppercase tracking-tight mb-4 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-8 line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
                {loading && displayItems.length === 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {Array(3).fill(0).map((_, i) => (
                            <div key={i} className="bg-white p-8 border border-slate-300 animate-pulse h-64"></div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsUpdates;

