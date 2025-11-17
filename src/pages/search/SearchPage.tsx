import { Container } from '@/Components/ui/Container';
import PreviousPageBtn from '@/Components/ui/previousPageBtn/PreviousPageBtn';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router';

interface SearchItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

const AvailableSearchList: SearchItem[] = [
    {
        id: 1,
        title: 'Paris',
        description: 'City of arts',
        image: '/icons/eiffel-tower-1188609.svg'
    },
    {
        id: 2,
        title: 'Rome',
        description: 'History lives here',
        image: '/icons/rome-over-coliseum-1188581.svg'
    },
    {
        id: 3,
        title: 'Rio De Janeiro',
        description: 'Joy shines here',
        image: '/icons/statua-di-cristo-1188530.svg'
    },
    {
        id: 4,
        title: 'Dubai',
        description: 'Dream rise here',
        image: '/icons/burj-al-arab-1188604.svg'
    },
    {
        id: 5,
        title: 'London',
        description: 'City of culture',
        image: '/icons/london-city-1188600.svg'
    },
    {
        id: 6,
        title: 'Sydney',
        description: 'Vibes soar here',
        image: '/icons/bahai-lotus-temple-1188566.svg'
    },
    {
        id: 7,
        title: 'Beijing',
        description: 'Lives in tradition',
        image: '/icons/de-torii-1188570.svg'
    },
    {
        id: 8,
        title: 'Amsterdam',
        description: 'City of Flowers',
        image: '/icons/amsterdam-1188536.svg'
    },
    {
        id: 9,
        title: 'Berlin',
        description: 'City of arts',
        image: '/icons/brandenburg-1188502.svg'
    },
    {
        id: 10,
        title: 'Ankara',
        description: 'City of arts',
        image: '/icons/ankara-1188532.svg'
    },
    {
        id: 11,
        title: 'Pizza',
        description: 'City of arts',
        image: '/icons/pisa-tower-1188603.svg'
    },
    {
        id: 12,
        title: 'Washington',
        description: 'City of arts',
        image: '/icons/white-house-1188538.svg'
    },
    {
        id: 13,
        title: 'Malaysia',
        description: 'Family friendly',
        image: '/icons/twin-tower-1188543.svg'
    },
    {
        id: 14,
        title: 'Barcelona',
        description: 'City of arts',
        image: '/icons/barcellona-1188539.svg'
    },
    {
        id: 15,
        title: 'Florence',
        description: 'City of arts',
        image: '/icons/basilica-of-santa-1188509.svg'
    },
    {
        id: 16,
        title: 'Delhi',
        description: 'City of color',
        image: '/icons/elephant-1188556.svg'
    },
    {
        id: 17,
        title: 'Dhaka',
        description: 'City of arts',
        image: '/icons/dhaka-smriti-1188495.svg'
    },
    {
        id: 18,
        title: 'Istanbul',
        description: 'City of arts',
        image: '/icons/istanbul-1188499.svg'
    },
    {
        id: 19,
        title: 'Egypt',
        description: 'City of arts',
        image: '/icons/hiran-minar-1188486.svg'
    }
];

const SearchPage: React.FC = () => {
    // Handle Search Functionality
    const [searchResults, setSearchResults] = useState<SearchItem[]>(AvailableSearchList);
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        const filteredResults = AvailableSearchList.filter(
            (item) =>
                item.title.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query)
        );
        setSearchResults(filteredResults);
    };

    return (
        <div className="relative py-5 lg:py-8">
            <Container>
                {/* SearchBar && Go Back Button */}
                <div className="flex items-center justify-between mb-8">
                    <PreviousPageBtn />
                    <div className="flex-1 mx-4 relative">
                        <input
                            onChange={handleSearch}
                            type="text"
                            placeholder="Search destinations, tours, hotels..."
                            className="w-full px-4 py-3 ps-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:shadow-[0_0_8px_rgba(63,82,180,0.4)] duration-300 text-[#1C64F2] placeholder:text-(--second-text)"
                        />

                        <FiSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#1C64F2] text-[20px]" />
                    </div>
                </div>
                {/* Search List */}
                <ul className="grid grid-cols-12 gap-5">
                    {searchResults.map((item) => (
                        <li
                            className="col-span-12 duration-300 hover:bg-gray-100 p-3 rounded-2xl"
                            key={item.id}
                        >
                            <Link to="" className="block">
                                <div className="flex items-center gap-3">
                                    <div className="image rounded-2xl overflow-hidden">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="content flex flex-col justify-between">
                                        <h3 className="text-[25px] font-medium text-(--main-text)">
                                            {item.title}
                                        </h3>
                                        <p className="text-[26px] text-(--second-text)">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    );
};

export default SearchPage;
