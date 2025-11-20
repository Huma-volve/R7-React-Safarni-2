
import React from 'react';
import Maps, { type POI } from '@/Components/mapFilter/Maps';
import { BiHomeAlt } from "react-icons/bi";
import { MdHotel, MdOutlineMuseum, MdOutlineRestaurant } from "react-icons/md";

interface Props {
    yourLatitude?: number;
    yourLongitude?: number;
    yourPois?: POI[];
}

interface LocationFilter {
    setHomeLocation: (location: { latitude: number; longitude: number }) => void;
    restaurants: POI[];
    hotels: POI[];
    touristSpots: POI[];
}
const MapPage: React.FC<Props> = ({ yourLatitude = 30.033, yourLongitude = 31.233, yourPois = [] }) => {
    const navbar = [
        {
            name: "Set home",
            icon: <BiHomeAlt />,
            pois: [
                {
                    lat: yourLatitude,
                    lng: yourLongitude,
                    name: "Your Location",
                    type: "home"
                }
            ]
        },
        {
            name: "Restaurants",
            icon: <MdOutlineRestaurant />
            ,
            pois: [
                {
                    lat: 30.04,
                    lng: 31.20,
                    name: "Test Restaurant",
                    type: "restaurant"
                }
            ]
        },
        {
            name: "Tourist Places",
            icon: <MdOutlineMuseum />,
            pois: [
                {
                    lat: 30.04,
                    lng: 31.20,
                    name: "Test Tourist Spot",
                    type: "tourist"
                }
            ]
        }, {
            name: "Hotel",
            icon: <MdHotel />,
            pois: [
                {
                    lat: 30.04,
                    lng: 31.20,
                    name: "Test Hotel",
                    type: "hotel"
                }
            ]
        },
    ]

    return (
        <section className="w-screen flex flex-col overflow-hidden min-h-screen relative">
            <div className="w-full flex items-center gap-8 justify-center h-24  absolute z-10">
                {navbar.map((item, index) => (
                    <nav key={index} className="bg-white cursor-pointer hover:-translate-y-px hover:text-[#1A56DB] hover:bg-[#1a57db76] rounded-full px-5! py-3! flex items-center gap-3 justify-center shadow-lg">
                        <span className="material-symbols-outlined">{item.icon}</span>
                        <span>{item.name}</span>
                    </nav>
                ))}
            </div>
            <div className="w-full h-screen  absolute z-0">
                <Maps
                    latitude={yourLatitude}
                    longitude={yourLongitude}
                    pois={yourPois}
                />
            </div>
        </section>
    );
};

export default MapPage;
