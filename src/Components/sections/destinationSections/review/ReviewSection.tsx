import type React from 'react';

interface ReviewType {
    id: number;
    name: string;
    image: string;
    description: string;
    rate: string;
    timeStatus: string;
}

const ReviewList: ReviewType[] = [
    {
        id: 1,
        name: 'Dale Thiel',
        image: '/image/review-person.png',
        description:
            'I really enjoyed my stay—the room was clean, the staff were friendly, and everything I needed was nearby.',
        rate: '4.5',
        timeStatus: '11 months ago'
    },
    {
        id: 2,
        name: 'Dale Thiel',
        image: '/image/review-person.png',
        description:
            'I really enjoyed my stay—the room was clean, the staff were friendly, and everything I needed was nearby.',
        rate: '4.2',
        timeStatus: '11 months ago'
    },
    {
        id: 3,
        name: 'Dale Thiel',
        image: '/image/review-person.png',
        description:
            'I really enjoyed my stay—the room was clean, the staff were friendly, and everything I needed was nearby.',
        rate: '4.8',
        timeStatus: '11 months ago'
    },
    {
        id: 4,
        name: 'Dale Thiel',
        image: '/image/review-person.png',
        description:
            'I really enjoyed my stay—the room was clean, the staff were friendly, and everything I needed was nearby.',
        rate: '4.6',
        timeStatus: '11 months ago'
    }
];

const ReviewSection: React.FC = () => {
    return (
        <div className="relative py-5 lg:py-8">
            <h2 className="md:text-[25px] text-[20px] font-medium text-(--main-text) mb-5">
                Reviews
            </h2>
            {/* Reviews content */}
            <ul className="grid md:grid-cols-2 grid-cols-1 gap-8">
                {ReviewList.map((item) => (
                    <li
                        key={item.id}
                        className="rounded-xl overflow-hidden bg-white border border-[#6B7280] group p-4"
                    >
                        <div className="flex items-center justify-between w-full mb-3 flex-wrap">
                            <div className='flex items-center gap-2'>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="md:w-[60px] w-[50px] rounded-full group-hover:scale-105 transition-transform duration-300"
                                />
                                <p className="text-[17px] lg:text-[23px] text-[#2C2C2C] font-medium">
                                    {item.name}
                                </p>
                            </div>
                            <p className="text-[16px] lg:text-[20px] text-[#4B5563] font-medium">
                                {item.timeStatus}
                            </p>
                        </div>
                        <div className="flex sm:items-start justify-between flex-1 items-center w-full flex-wrap">
                            <div className="text">
                                <div className="flex items-center gap-1 mb-2">
                                    {Array.from({ length: Math.floor(Number(item.rate)) }).map((_, index) => (
                                        <img src="/icons/full-star.svg" className='w-5.5 h-5.5' alt="full-star" key={index} />
                                    ))}
                                    <img src="/icons/half-star.svg" className='w-5.5 h-5.5' alt="half-star" />
                                </div>
                            </div>
                            <p className="text-[17px] lg:text-[22px] text-[#2C2C2C] font-normal">
                                {item.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewSection;
