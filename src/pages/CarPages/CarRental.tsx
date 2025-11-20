import React, { useState } from 'react';
import { ChevronLeft, Search, Heart, BarChart3, Map, User } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const CarRental = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const brands = [
    { name: 'Mercedes', count: 32, logo: '🔰' },
    { name: 'Geely', count: 22, logo: '🔷' },
    { name: 'Jeep', count: 31, logo: '⭐' },
    { name: 'Subaru', count: 25, logo: '⭐' },
    { name: 'BMW', count: 12, logo: '🔵' },
    { name: 'Renault', count: 8, logo: '🔶' },
    { name: 'Porsche', count: 8, logo: '🏁' }
  ];

  const cars = [
    {
      name: 'S 500 Sedan',
      type: 'Automatic',
      seats: 5,
      fuel: 'Diesel',
      image: '/public/images/Sedan.png'
    },
    {
      name: 'GLA 250 SUV',
      type: 'Automatic',
      seats: 7,
      fuel: 'Diesel',
      image: '/public/images/GLA.png'
    },
    {
      name: 'Volvo XC40',
      type: 'Automatic',
      seats: 5,
      fuel: 'Petrol',
      image: '/public/images/VOLVO.png'
    },
    {
      name: 'Mazda CX-30',
      type: 'Automatic',
      seats: 5,
      fuel: 'Diesel',
      image: '/public/images/Mazda.png'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="md:mx-24 mx-2 pt-6 md:pt-12">
        {/* Search Section */}
        <div className="flex flex-col lg:flex-row justify-center gap-4 md:gap-5">
          <button className="cursor-pointer w-[60px] h-[60px] md:w-[65px] md:h-[60px] flex items-center justify-center bg-gray-100 rounded-full hover:shadow-lg hover:bg-gray-200 transition duration-300">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              className="w-full border border-gray-200 pl-12 pr-4 h-[60px] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              type="text"
              placeholder="Search ...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Hero Image - Mobile Only */}
        <div className="md:hidden mt-6 rounded-2xl overflow-hidden">
          <img
            src="/public/images/carRentalimg.jpg"
            alt="Sports car"
            className="w-full h-[280px] object-cover object-center"
          />
        </div>

        {/* Brands Section */}
        <div className="mt-8">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">Brands</h1>
          <Swiper
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="brands-swiper flex pb-4 justify-between"
            breakpoints={{
    320: {     // موبايل صغير
      slidesPerView: 3,
      spaceBetween: 15,
    },
    480: {     // موبايل كبير
      slidesPerView: 4,
      spaceBetween: 20,
    },
    640: {     // تابلت صغير
      slidesPerView: 5,
      spaceBetween: 20,
    },
    768: {     // تابلت كبير
      slidesPerView: 6,
      spaceBetween: 25,
    },
    1024: {    // لابتوب
      slidesPerView: 7,
      spaceBetween: 30,
    },
    1280: {    // شاشات كبيرة
      slidesPerView: 8,
      spaceBetween: 35,
    },
  }}
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <div className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition duration-300">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl md:text-3xl hover:bg-gray-200 transition">
                    {brand.logo}
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm font-medium text-gray-900">{brand.name}</p>
                    <p className="text-xs text-blue-600">+{brand.count}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Popular Cars Section */}
        <div className="mt-10 md:mt-12 mb-12">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
            {window.innerWidth < 768 ? 'Popular Cars' : 'popular Cars'}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-15 gap-20 ">
            {cars.map((car, index) => (
              <div key={index} className="shadow-sm rounded-2xl p-4 md:p-6 hover:shadow-lg transition duration-300 relative">
                <div className="flex items-start justify-between mb-4">
                  <div className='w-full flex flex-col'>
                    <div className='flex w-full justify-between'>
                    <h3 className=" text-xl font-semibold text-gray-900">{car.name}</h3>
                    
                    <img src={car.image} alt="" className='absolute -top-[60%] right-0 lg:-top-[10%] lg:-right-[2%] w-2/5 scale-x-[-1] md:-top-[5%]  '/>

                    </div>
                    <div className="w-full flex justify-around gap-3 md:gap-4 mt-2 text-xs md:text-sm text-gray-500 mt-8">
                      <span className='text-[#6B7280] text-sm'>{car.type}</span>
                      <span className='text-[#6B7280] text-sm'>|</span>
                      <span>{car.seats} seats</span>
                      <span className='text-[#6B7280] text-sm'>|</span>
                      <span>{car.fuel}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <button className="cursor-pointer  flex-1 bg-[#1E429F] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#152a60] active:bg-white active:outline active:outline-[#1E429F] active:text-[#1E429F] transition duration-300">
                    Rent Now
                  </button>
                  <button className="cursor-pointer flex-1 border border-[#1E429F] text-[#1E429F] py-2 px-4 rounded-lg font-medium hover:bg-[#1e439f3d] active:bg-[#1E429F] active:text-white  transition duration-300">
                    Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-3">
        <div className="flex justify-between items-center">
          <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CarRental;