import React from 'react';
import { motion } from 'framer-motion';

// Accounting Logos
import sapLogo from '../assets/SAP Business One .png';
import quickbooksLogo from '../assets/QuickBooks.png';
import myobLogo from '../assets/MYOB.png';
import sageLogo from '../assets/Sage50.png';

// Payroll & HRIS Logos
import payrollLogo from '../assets/Payroll.png';
import hrisLogo from '../assets/HRIS.png';

// Customized Systems Logos
import docTrackingLogo from '../assets/Document Tracking.png';
import pawnshopLogo from '../assets/pawnshop.webp';
import posRetailLogo from '../assets/POS RETAIL.png';
import surveyLogo from '../assets/669433957_1716298556444427_1534753694458362846_n.png';

const categories = [
    {
        id: 'accounting',
        title: 'ACCOUNTING',
        solutions: [
            {
                title: 'SAP Business One',
                image: sapLogo,
                desc: 'Comprehensive ERP solution for small and medium-sized enterprises to manage every aspect of the company from accounting to inventory.'
            },
            {
                title: 'QuickBooks',
                image: quickbooksLogo,
                desc: 'Efficient accounting software designed for small businesses to track income, expenses, and manage financial health with ease.'
            },
            {
                title: 'MYOB',
                image: myobLogo,
                desc: 'A robust business management platform that simplifies accounting, payroll, and professional services for growing teams.'
            },
            {
                title: 'Sage 50',
                image: sageLogo,
                desc: 'Standardized accounting and business management software offering advanced reporting and inventory tracking capabilities.'
            },
        ]
    },
    {
        id: 'payroll',
        title: 'PAYROLL & HRIS',
        solutions: [
            {
                title: 'Payroll System',
                image: payrollLogo,
                desc: 'Automated solution for calculating wages, managing tax deductions, and generating accurate payslips effortlessly.'
            },
            {
                title: 'HRIS',
                image: hrisLogo,
                desc: 'An integrated Human Resource Information System to manage employee data, attendance, and leave requests in one place.'
            },
        ]
    },
    {
        id: 'customized',
        title: 'CUSTOMIZED SYSTEMS',
        solutions: [
            {
                title: 'Document Tracking Info Sys',
                image: docTrackingLogo,
                desc: 'A secure system designed to monitor the real-time flow and status of documents across your entire organization.'
            },
            {
                title: 'Pawnshop System',
                image: pawnshopLogo,
                desc: 'Specialized software tailored for pawnshop operations, including appraisals, pawn ticket management, and inventory.'
            },
            {
                title: 'POS Retail',
                image: posRetailLogo,
                desc: 'A modern Point of Sale system built to streamline retail transactions, manage stocks, and provide detailed sales analytics.'
            },
            {
                title: 'S.U.R.V.E.Y.',
                image: surveyLogo,
                desc: 'Smart Unified Response Validation and Evaluation System designed for comprehensive data gathering and analysis.'
            },
        ]
    }
];

interface SolutionsProps {
    initialCategory?: string;
    isFullPage?: boolean;
    onNavigate?: (page: string, category?: string) => void;
}

const Solutions: React.FC<SolutionsProps> = ({ initialCategory, isFullPage, onNavigate }) => {
    // Show selected category or default to 'accounting'
    const activeId = isFullPage ? (initialCategory || 'accounting') : 'accounting';
    const activeCategory = categories.find(c => c.id === activeId) || categories[0];

    return (
        <section id="solutions" className={`py-16 md:py-24 bg-slate-200 text-primary ${isFullPage ? 'min-h-[80vh] pt-32' : ''}`}>
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
                {isFullPage && (
                    <div className="mb-8">
                        <button
                            onClick={() => onNavigate ? onNavigate('home') : window.location.href = '#'}
                            className="text-xs font-black uppercase tracking-widest text-primary/40 hover:text-primary flex items-center gap-2 transition-colors uppercase"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            Back to Home
                        </button>
                    </div>
                )}

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-6xl font-black text-center text-primary uppercase mb-16 md:mb-24 tracking-tight"
                >
                    {isFullPage ? activeCategory.title : "OUR SOLUTIONS"}
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-x-12 gap-y-20 max-w-5xl mx-auto">
                    {activeCategory.solutions.map((sol, index) => (
                        <motion.div
                            key={sol.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="w-full md:w-[calc(50%-1.5rem)] flex flex-col items-center text-center group"
                        >
                            <div className="w-full aspect-[4/3] flex items-center justify-center p-12 md:p-16 bg-white/50 backdrop-blur-sm mb-6 rounded-lg border border-slate-300 shadow-sm relative overflow-hidden transition-all duration-500 group-hover:bg-white group-hover:shadow-xl">
                                <img
                                    src={sol.image}
                                    alt={sol.title}
                                    className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105 relative z-10"
                                />
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-primary uppercase tracking-tight mb-3">
                                {sol.title}
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm">
                                {sol.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
