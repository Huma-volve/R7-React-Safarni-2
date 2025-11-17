import { Container } from '@/Components/ui/Container';
import React from 'react';

interface CategoriesType {
    id: number;
    name: string;
    image: string;
}

const CategoriesList: CategoriesType[] = [
    {
        id: 1,
        name: 'Flight',
        image: '/image/flight-image.png'
    },
    {
        id: 2,
        name: 'Cars',
        image: '/image/car-image.png'
    },
    {
        id: 3,
        name: 'Tours',
        image: '/image/tours-image.png'
    },
    {
        id: 4,
        name: 'Hotel',
        image: '/image/hotel-image.png'
    }
];

const CategoriesSection: React.FC = () => {
    return (
        <div className="relative py-5 lg:py-8">
            <Container>
                <h2 className="md:text-[25px] text-[20px] font-medium text-(--main-text) mb-5">
                    Categories
                </h2>
                <ul className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-20 text-(--main-color) text-[40px] ">
                    {CategoriesList.map((category) => (
                        <li className="flex flex-col items-center group" key={category.id}>
                            <div className="image overflow-hidden rounded-full">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300 rounded-full "
                                />
                            </div>
                            <p className="lg:text-[40px] sm:text-[30px] text-[22px] text-[#1A56DB]">
                                {category.name}
                            </p>
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    );
};

export default CategoriesSection;
