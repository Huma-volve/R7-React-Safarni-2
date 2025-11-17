import { Container } from '@/Components/ui/Container';
import React from 'react';
import { Link } from 'react-router';

interface AvailableType {
    id: number;
    title: string;
    image: string;
    price: number;
    rate: string;
    TimeStatus: string;
}

const AvailableList: AvailableType[] = [
    {
        id: 1,
        title: 'Luxor',
        image: '/image/available-luxor.png',
        price: 100,
        rate: '4.5',
        TimeStatus: 'Full Day Tour'
    },
    {
        id: 2,
        title: 'Fayoum',
        image: '/image/available-fayoum.png',
        price: 100,
        rate: '4.2',
        TimeStatus: 'Full Day Tour'
    },
    {
        id: 3,
        title: 'Dahab',
        image: '/image/available-dahab.png',
        price: 100,
        rate: '4.8',
        TimeStatus: 'Full Day Tour'
    },
    {
        id: 4,
        title: 'Marsa Alam',
        image: '/image/available-marsaAlam.png',
        price: 100,
        rate: '4.6',
        TimeStatus: 'Full Day Tour'
    }
];

const AvailableTours: React.FC = () => {
    return (
        <div className="relative py-5 lg:py-8">
            <Container>
                <div className="flex items-center justify-between  mb-5">
                    <h2 className="md:text-[25px] text-[20px] font-medium text-(--main-text)">
                        Available Tours
                    </h2>
                    <Link to="/available-tours" className="text-sm font-medium text-(--color-main)">
                        View all
                    </Link>
                </div>
                {/* Available Tours content */}
                <ul className="grid md:grid-cols-2 grid-cols-1 gap-8">
                    {AvailableList.map((item) => (
                        <li
                            key={item.id}
                            className="rounded-xl overflow-hidden shadow-[0_0_13.53px_rgba(131,139,180,0.12)] bg-white hover:shadow-[0_0_13.53px_rgba(131,139,180,0.25)] transition-shadow flex items-center gap-5 group p-4 flex-col sm:flex-row"
                        >
                            <div className="image overflow-hidden sm:w-[150px] sm:h-[150px] rounded-2xl">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="flex sm:items-start justify-between flex-1 items-center w-full flex-wrap">
                                <div className="text">
                                    <p className="text-[17px] lg:text-[22px] text-[#6B7280] font-semibold">
                                        {item.TimeStatus}
                                    </p>
                                    <h3 className="lg:text-[28px] text-[20px] font-medium text-[#111928]">
                                        {item.title}
                                    </h3>
                                    <p className="text-[18px] lg:text-[24px] font-semibold text-[#6B7280]">
                                        From
                                        <span className="text-[#1A56DB]"> {item.price}$ </span>
                                        Per Person
                                    </p>
                                </div>
                                <p className="text-[16px] lg:text-[22px] text-[#6B7280] font-semibold flex items-center">
                                    <img
                                        src="/icons/full-star.svg"
                                        alt="full-star"
                                        className="me-1 w-[30px] h-[30px]"
                                    />
                                    {item.rate}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    );
};

export default AvailableTours;
