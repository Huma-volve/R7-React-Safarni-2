import React, { useState } from 'react';

interface AdventureStyle {
    id: number;
    name: string;
    image: string;
}

const AdventureStyle: React.FC = () => {
    // Active Sort By Filtration state
    const [activeStyles, setActiveStyles] = useState<string[]>([]);
    const adventureStyles: AdventureStyle[] = [
        {
            id: 1,
            name: 'Adventure Travel',
            image: '/icons/building-carousel.svg'
        },
        {
            id: 2,
            name: 'City Breaks',
            image: '/icons/buildings.svg'
        },
        {
            id: 3,
            name: 'Water Activity',
            image: '/icons/scuba-mask.svg'
        },
        {
            id: 4,
            name: 'Road Trips',
            image: '/icons/driving.svg'
        }
    ];

    return (
        <div className="mb-10 pb-10 border-b border-[#E5E7EB]">
            <h4 className="lg:text-[25px] text-[20px] font-medium text-(--main-text) mb-8">
                Adventure Style
                <span className="text-[#6B7280] font-normal"> Multi Select</span>
            </h4>

            <div className="flex flex-wrap items-center gap-5">
                {adventureStyles.map((option) => (
                    <div
                        key={option.id}
                        onClick={() => {
                            if (activeStyles.includes(option.name)) {
                                setActiveStyles(
                                    activeStyles.filter((item) => item !== option.name)
                                );
                            } else {
                                setActiveStyles([...activeStyles, option.name]);
                            }
                        }}
                        className={`flex items-center gap-2 lg:py-4 py-3 lg:px-4 px-6 rounded-full mr-3 mb-3 cursor-pointer font-medium
                                        border transition-all duration-300
                                        ${
                                            activeStyles.includes(option.name)
                                                ? 'bg-blue-100 text-blue-600 border-blue-100 shadow-sm'
                                                : 'border-[#EBF5FF] text-[#6B7280] hover:bg-[#F9FAFB]'
                                        }
                                        lg:text-[22px] text-[19px]
                                    `}
                    >
                        <img
                            src={option.image}
                            alt={option.name}
                            className={`w-6 h-6 transition-all duration-300
                                            ${
                                                activeStyles.includes(option.name)
                                                    ? 'filter-[brightness(0)_invert(.16)_sepia(.88)_saturate(7494%)_hue-rotate(213deg)_brightness(.95)]'
                                                    : ''
                                            }
                                        `}
                        />
                        <p>{option.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdventureStyle;
