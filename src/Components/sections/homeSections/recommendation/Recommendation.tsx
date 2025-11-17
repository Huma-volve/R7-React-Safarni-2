import { Container } from '@/Components/ui/Container';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router';

interface RecommendationType {
    id: number;
    title: string;
    image: string;
    location: string;
    rate: string;
}

const RecommendationList: RecommendationType[] = [
    {
        id: 1,
        title: 'The Pyramids',
        image: '/image/Recommendation-pyramids.png',
        location: 'Giza',
        rate: '4.5'
    },
    {
        id: 2,
        title: 'The Citadel of Saladin',
        image: '/image/Recommendation-saladin.png',
        location: 'Cairo',
        rate: '4.2'
    },
    {
        id: 3,
        title: 'The Karnak Temple',
        image: '/image/Recommendation-karnak.png',
        location: 'Luxor',
        rate: '4.8'
    },
    {
        id: 4,
        title: 'The Library of Alexandria',
        image: '/image/Recommendation-library.png',
        location: 'Alexandria',
        rate: '4.6'
    }
];

const Recommendation: React.FC = () => {
    return (
        <div className="relative py-5 lg:py-8">
            <Container>
                <div className="flex items-center justify-between mb-5">
                    <h2 className="md:text-[25px] text-[20px] font-medium text-(--main-text)">
                        Recommendation
                    </h2>
                    <Link to="/recommendations" className="text-sm font-medium text-(--color-main)">
                        View all
                    </Link>
                </div>
                {/* Recommendation content */}
                <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {RecommendationList.map((item) => (
                        <li
                            key={item.id}
                            className="rounded-lg overflow-hidden p-3 bg-white shadow-[0_0_26px_0_rgba(111,111,111,0.25)] hover:shadow-[0_4px_20px_0_rgba(26,86,219,0.4)] transition-shadow duration-300 group"
                        >
                            <div className="image overflow-hidden rounded-lg">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-auto group-hover:scale-105 duration-300"
                                />
                            </div>
                            <div className="pt-4 pb-2">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="lg:text-[16px] text-[14px] font-medium text-(--main-text)">
                                        {item.title}
                                    </h3>
                                    <p className="text-[14px] text-[#6B7280] me-1 flex items-center">
                                        <img
                                            src="/icons/full-star.svg"
                                            alt="full-star"
                                            className="me-1"
                                        />
                                        {item.rate}
                                    </p>
                                </div>
                                <p className="text-[18px] text-[#9CA3AF] flex items-center">
                                    <IoLocationOutline className="me-2 text-[25px] text-[#1A56DB]" />
                                    {item.location}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    );
};

export default Recommendation;
