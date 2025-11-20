import { BackArrowWhite, DropdownArrow, MultiCity, OneWay, RoundTrip } from "@/Components/icons/icons"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode } from 'swiper/modules';
import { useState } from "react";
import FlightMobileHeader from "@/Components/Flights/FlightMobileHeader";
import DesktopFlightImg from "@/Components/Flights/DesktopFlightImg";
import { Link } from "react-router";

const FlightBooking = () => {

  const [flightType, setFlightType] = useState("round trip");
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [passengers, setPassengers] = useState({ adults: 1, children: 0, infants: 0 });
  const [multiCityFlights, setMultiCityFlights] = useState([
    { from: "", to: "", date: "" },
    { from: "", to: "", date: "" }
  ]);

  const totalPassengers = passengers.adults + passengers.children + passengers.infants;

  const updatePassenger = (type: string, increment: boolean) => {
    setPassengers(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] + (increment ? 1 : -1))
    }));
  };

  const addMultiCityFlight = () => {
    setMultiCityFlights([...multiCityFlights, { from: "", to: "", date: "" }]);
  };

  const removeMultiCityFlight = (index: number) => {
    if (multiCityFlights.length > 2) {
      setMultiCityFlights(multiCityFlights.filter((_, i) => i !== index));
    }
  };
  
  return (
    <div className="md:mt-24">
      <div className=" lg:mx-24 ">
        <div className="flex flex-col md:flex-row justify-center gap-6 xl:gap-8">
          
          {/* Mobile Header Image */}
          <FlightMobileHeader/>

          {/* Desktop Image */}
          <DesktopFlightImg/>
          
          {/* Form Section */}
          <div className="w-full md:w-1/2 pb-8">
            
            {/* Flight Type Slider */}
            <div className="mb-6 md:mb-8 overflow-hidden">

              <Swiper
                breakpoints={{
                  0: {
                    slidesPerView: 1.8,
                    spaceBetween: 12,
                  },
                  480: {
                    slidesPerView: 2.5,
                    spaceBetween: 16,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper h-20 overflow-visible"
              >
                <SwiperSlide>
                  <button
                    onClick={() => setFlightType("round trip")}
                    className={`${
                      flightType === "round trip" 
                        ? "bg-[#EBF5FF] text-[#1E429F]" 
                        : "bg-[#F3F4F6] text-[#4B5563]"
                    } w-full py-2.5 sm:py-3 px-4 sm:px-6 flex justify-center items-center gap-2 hover:shadow-md hover:bg-white hover:shadow-gray-300 active:bg-[#d9eafb] transition duration-300 rounded-full cursor-pointer text-sm sm:text-base font-medium whitespace-nowrap`}
                  >
                    <RoundTrip className={`${flightType === "round trip" ? "text-[#1E429F]" : "text-[#4B5563]"} w-4 h-4 sm:w-5 sm:h-5`}/>
                    Round Trip
                  </button>
                </SwiperSlide>

                <SwiperSlide>
                  <button
                    onClick={() => setFlightType("multi city")}
                    className={`${
                      flightType === "multi city" 
                        ? "bg-[#EBF5FF] text-[#1E429F]" 
                        : "bg-[#F3F4F6] text-[#4B5563]"
                    } w-full py-2.5 sm:py-3 px-4 sm:px-6 flex justify-center items-center gap-2 hover:shadow-md hover:bg-white hover:shadow-gray-300 active:bg-[#d9eafb] transition duration-300 rounded-full cursor-pointer text-sm sm:text-base font-medium whitespace-nowrap`}
                  >
                    <MultiCity className={`${flightType === "multi city" ? "text-[#1E429F]" : "text-[#4B5563]"} w-4 h-4 sm:w-5 sm:h-5`}/>
                    Multi City
                  </button>
                </SwiperSlide>

                <SwiperSlide>
                  <button
                    onClick={() => setFlightType("one way")}
                    className={`${
                      flightType === "one way" 
                        ? "bg-[#EBF5FF] text-[#1E429F]" 
                        : "bg-[#F3F4F6] text-[#4B5563]"
                    } w-full py-2.5 sm:py-3 px-4 sm:px-6 flex justify-center items-center gap-2 hover:shadow-md hover:bg-white hover:shadow-gray-300 active:bg-[#d9eafb] transition duration-300 rounded-full cursor-pointer text-sm sm:text-base font-medium whitespace-nowrap`}
                  >
                    <OneWay className={`${flightType === "one way" ? "text-[#1E429F]" : "text-[#4B5563]"} w-4 h-4 sm:w-5 sm:h-5`}/>
                    One Way
                  </button>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5">
              
              {/* Round Trip Form */}
              {flightType === "round trip" && (
                <>
                  {/* Location */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Location</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Montreal, Canada" 
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Destination</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Tokyo, Japan" 
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  {/* Departure & Return */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Departure</label>
                      <div className="relative">
                        <input 
                          type="date" 
                          defaultValue="2025-12-16"
                          className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Return</label>
                      <div className="relative">
                        <input 
                          type="date" 
                          defaultValue="2026-01-06"
                          className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* One Way Form */}
              {flightType === "one way" && (
                <>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Location</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Montreal, Canada" 
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Destination</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Tokyo, Japan" 
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Departure</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        defaultValue="2025-12-16"
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Multi City Form */}
              {flightType === "multi city" && (
                <>
                  {multiCityFlights.map((flight, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-4 relative">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-700 text-sm sm:text-base">Flight {index + 1}</h3>
                        {multiCityFlights.length > 2 && (
                          <button
                            type="button"
                            onClick={() => removeMultiCityFlight(index)}
                            className="text-red-500 text-xs sm:text-sm hover:text-red-700 font-medium"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">From</label>
                        <div className="relative">
                          <input 
                            type="text" 
                            placeholder="Montreal, Canada" 
                            className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">To</label>
                        <div className="relative">
                          <input 
                            type="text" 
                            placeholder="Tokyo, Japan" 
                            className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Date</label>
                        <div className="relative">
                          <input 
                            type="date" 
                            defaultValue="2025-12-16"
                            className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={addMultiCityFlight}
                    className="w-full py-3 sm:py-3.5 border-2 border-dashed border-gray-300 rounded-lg text-blue-600 font-medium hover:border-blue-500 hover:bg-blue-50 transition text-sm sm:text-base"
                  >
                    + Add Another Flight
                  </button>
                </>
              )}

              {/* Passenger Dropdown */}
              <div className="relative">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Passenger</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-left bg-white flex items-center justify-between text-sm sm:text-base"
                  >
                    <span className="text-gray-700">
                      {totalPassengers} Passenger{totalPassengers > 1 ? 's' : ''}
                    </span>
                    <DropdownArrow className="w-4 h-4" />
                  </button>
                </div>

                {showPassengerDropdown && (
                  <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 space-y-4">
                    {/* Adults */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900 text-sm sm:text-base">Adults</div>
                        <div className="text-xs sm:text-sm text-gray-500">12+ years</div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <button
                          type="button"
                          onClick={() => updatePassenger('adults', false)}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 text-sm sm:text-base"
                          disabled={passengers.adults <= 1}
                        >
                          −
                        </button>
                        <span className="w-6 sm:w-8 text-center font-medium text-sm sm:text-base">{passengers.adults}</span>
                        <button
                          type="button"
                          onClick={() => updatePassenger('adults', true)}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-sm sm:text-base"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Children */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900 text-sm sm:text-base">Children</div>
                        <div className="text-xs sm:text-sm text-gray-500">2-11 years</div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <button
                          type="button"
                          onClick={() => updatePassenger('children', false)}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 text-sm sm:text-base"
                          disabled={passengers.children <= 0}
                        >
                          −
                        </button>
                        <span className="w-6 sm:w-8 text-center font-medium text-sm sm:text-base">{passengers.children}</span>
                        <button
                          type="button"
                          onClick={() => updatePassenger('children', true)}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-sm sm:text-base"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Infants */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900 text-sm sm:text-base">Infants</div>
                        <div className="text-xs sm:text-sm text-gray-500">Under 2 years</div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <button
                          type="button"
                          onClick={() => updatePassenger('infants', false)}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 text-sm sm:text-base"
                          disabled={passengers.infants <= 0}
                        >
                          −
                        </button>
                        <span className="w-6 sm:w-8 text-center font-medium text-sm sm:text-base">{passengers.infants}</span>
                        <button
                          type="button"
                          onClick={() => updatePassenger('infants', true)}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-sm sm:text-base"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowPassengerDropdown(false)}
                      className="w-full py-2 sm:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base font-medium"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <Link to={'/flightttickets'}>
                <button
                  type="submit"
                  className="w-full bg-[#1E429F] text-white py-3 sm:py-3.5 rounded-lg font-semibold hover:bg-[#152d70] transition duration-300 mt-6 text-sm sm:text-base"
                >
                  Search Flights
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightBooking