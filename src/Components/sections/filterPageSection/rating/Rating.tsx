import React, { useState } from 'react';

const Rating: React.FC = () => {
    const [activeRating, setActiveRating] = useState<string[]>([]);
    const ratingOptions = ['1', '2', '3', '4', '5'];

    return (
        <div className="mb-10 pb-10">
            <h4 className="lg:text-[25px] text-[20px] font-medium text-(--main-text) mb-8">
                Rating
                <span className="text-[#6B7280] font-normal"> Multi Select</span>
            </h4>

            <div className="flex flex-wrap items-center gap-5 mb-10">
                {ratingOptions.map((option) => (
                    <div
                        key={option}
                        onClick={() => {
                            if (activeRating.includes(option)) {
                                setActiveRating(
                                    activeRating.filter((item) => item !== option)
                                );
                            } else {
                                setActiveRating([...activeRating, option]);
                            }
                        }}
                        className={`lg:py-4 py-3 lg:px-9 px-5 rounded-[120px] flex items-center gap-3 cursor-pointer font-medium
                    border transition-all duration-300
                    ${
                        activeRating.includes(option)
                            ? 'bg-blue-100 text-blue-600 border-blue-100 shadow-sm'
                            : 'border-[#EBF5FF] text-[#6B7280] hover:bg-[#F9FAFB]'
                    }
                    lg:text-[22px] text-[19px]
                    `}
                    >
                        <img
                            src="/icons/star-icon.svg"
                            alt="star-icon"
                            className={`lg:w-[30px] w-[25px] lg:h-[30px] h-[25px]  ${
                                activeRating.includes(option)
                                    ? 'filter-[brightness(0)_invert(.16)_sepia(.88)_saturate(7494%)_hue-rotate(213deg)_brightness(.95)]'
                                    : ''
                            }`}
                        />
                        <p className="lg:text-[40px] text-[30px] font-medium">{option}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rating;
