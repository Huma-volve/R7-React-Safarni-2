import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

interface SearchItemType {
    id: number;
    title: string;
    description: string;
    image: string;
}

const AvailableSearchList: SearchItemType[] = [
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

const LocationSection: React.FC = () => {
    // Location Search state
    const [searchResults, setSearchResults] = useState<SearchItemType[]>(AvailableSearchList);
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setSearchTerm(query);

        if (query === '') {
            setSearchResults([]);
            return;
        }

        const filteredResults = AvailableSearchList.filter(
            (item) =>
                item.title.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query)
        );
        setSearchResults(filteredResults);
    };

    // select location
    const [selectedLocations, setSelectedLocations] = useState<SearchItemType[]>([]);

    const handleSelectLocation = (item: SearchItemType) => {
        if (selectedLocations.some((loc) => loc.id === item.id)) return;
        setSelectedLocations([...selectedLocations, item]);
        setSearchTerm('');
        setSearchResults([]);
    };

    // remove selected location
    const handleRemoveLocation = (id: number) => {
        setSelectedLocations(selectedLocations.filter((loc) => loc.id !== id));
    };

    return (
        <div className="mb-10 pb-10 border-b border-[#E5E7EB]">
            <h4 className="lg:text-[25px] text-[20px] font-medium text-(--main-text) mb-8 flex items-center gap-3 justify-between">
                Location
                <img src="/icons/map-icon.svg" alt="/map-icon" />
            </h4>

            {/* Content */}
            <div className="flex-1 mx-4 relative">
                <input
                    value={searchTerm}
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search destinations, tours, hotels..."
                    className="w-full px-4 py-3 ps-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:shadow-[0_0_8px_rgba(63,82,180,0.4)] duration-300 text-[#1C64F2] placeholder:text-(--second-text)"
                />

                <FiSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#1C64F2] text-[20px]" />

                {searchTerm.length > 0 && searchResults.length > 0 && (
                    <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg mt-2 shadow-lg max-h-60 overflow-y-auto z-50">
                        {searchResults.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => handleSelectLocation(item)}
                                className="flex items-center gap-4 p-3 cursor-pointer hover:bg-blue-50 transition-all"
                            >
                                <img src={item.image} alt={item.title} className="w-10 h-10" />

                                <div>
                                    <p className="font-semibold text-gray-700">{item.title}</p>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {selectedLocations.length > 0 && (
                <div className="flex items-center gap-3 flex-wrap py-3 px-5 mt-3">
                    {selectedLocations.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-3 py-2 px-4 rounded-full border border-[#EBF5FF] w-fit bg-blue-50"
                        >
                            <img
                                src="/icons/Vector (Stroke).svg"
                                alt="remove"
                                className="w-3 h-3 cursor-pointer"
                                onClick={() => handleRemoveLocation(item.id)}
                            />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LocationSection;
