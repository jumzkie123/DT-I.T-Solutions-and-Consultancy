import React from 'react';

const partners = [
    'SAP Business One',
    'MYOB',
    'Sage 50',
    'QuickBooks',
    'Microsoft Server',
    'Ubuntu Linux'
];

const Partners: React.FC = () => {
    return (
        <section className="py-12 bg-white/5 border-y border-white/5 overflow-hidden">
            <div className="section-container !py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="shrink-0">
                        <h5 className="text-gray-500 font-bold text-xs uppercase tracking-widest">Supporting World-Class Platforms</h5>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40 hover:opacity-100 transition-opacity duration-700">
                        {partners.map((partner, idx) => (
                            <span key={idx} className="text-xl font-black text-white whitespace-nowrap tracking-tighter italic">
                                {partner}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
