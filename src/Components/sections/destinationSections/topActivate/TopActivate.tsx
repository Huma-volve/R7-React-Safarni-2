import React from 'react';

interface TopActive {
    id: number;
    title: string;
    description: string;
    image: string;
}

const TopActivateList: TopActive[] = [
    {
        id: 1,
        title: 'Visit the Grand Plaza',
        description: 'The heart of Eldoria, surrounded by historical buildings and lively cafes.',
        image: '/image/topActive-1.png'
    },
    {
        id: 2,
        title: 'Explore the Museum ',
        description: 'Features modern art by local and global artists.',
        image: '/image/topActive-2.png'
    },
    {
        id: 3,
        title: 'Wander lush, green paths',
        description: 'A serene oasis featuring diverse plant species and tranquil walking paths.',
        image: '/image/topActive-3.png'
    },
    {
        id: 4,
        title: 'Discover Sunset Bay',
        description: 'A peaceful coastal spot, perfect for golden views and quiet strolls',
        image: '/image/topActive-4.png'
    }
];

const TopActivate: React.FC = () => {
    return (
        <div className="relative md:mb-10 mb-7">
            <h4 className="text-[25px] font-medium text-(--main-text) mb-6">Top Activates</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {TopActivateList.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col gap-4 duration-300 group"
                    >
                        <div className="image overflow-hidden rounded-2xl">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 duration-300"
                            />
                        </div>
                        <div className="flex flex-col justify-between">
                            <h3 className="text-[17px] font-medium text-(--main-text)">
                                {item.title}
                            </h3>
                            <p className="text-[14px] text-[#6B7280]">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopActivate;
