import React, { useState } from 'react';

const SortBySection: React.FC = () => {
    // Active Sort By Filtration state
    const [activeSortBy, setActiveSortBy] = useState<string>('');
    const sortByOptions = [
        'Price (Low to High)',
        'Price (High to Low)',
        'Biggest Deals (Highest Saving)',
        'Most Reviewed',
        'Most Popular'
    ];

    return (
        <div className='mt-6'>
            <h4 className="lg:text-[25px] text-[20px] font-medium text-(--main-text) mb-6">
                Sort By
            </h4>
            {/* Sort By Filter */}
            <div className="flex flex-wrap items-center gap-5 mb-10 pb-6 border-b border-[#E5E7EB]">
                {sortByOptions.map((option) => (
                    <div
                        key={option}
                        onClick={() => setActiveSortBy(option)}
                        className={`lg:py-4 py-3 lg:px-4 px-6 rounded-full mr-3 mb-3 cursor-pointer font-medium
                    border transition-all duration-300
                    ${
                        activeSortBy === option
                            ? 'bg-blue-100 text-blue-600 border-blue-100 shadow-sm'
                            : 'border-[#EBF5FF] text-[#6B7280] hover:bg-[#F9FAFB]'
                    }
                    lg:text-[22px] text-[19px]
                    `}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SortBySection;
