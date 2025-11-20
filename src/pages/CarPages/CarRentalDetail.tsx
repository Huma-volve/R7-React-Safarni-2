import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Calendar, MapPin } from 'lucide-react';

const CarRentalDetail = () => {
  const [selectedPlan, setSelectedPlan] = useState('hourly');

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:flex md:mx-12 lg:mx-24 pt-12 gap-8">
        {/* Left Side - Car Image */}
        <div className="w-1/2">
          <button className="mb-6 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 relative">
            {/* Left Arrow */}
            <button className="absolute left-6 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50 z-10">
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {/* Car Image */}
            <div className="relative">
              {/* Circular Shadow/Platform */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-8 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent rounded-full blur-md"></div>
              
              <img
                src="/public/images/Sedan.png"
                alt="Mercedes S-Class"
                className="w-full h-auto object-contain relative z-10"
              />
            </div>
            
            {/* Right Arrow */}
            <button className="absolute right-6 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50 z-10">
              <ChevronRight className="w-4 h-4" />
            </button>
            
            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5">
              <div className="w-6 h-1 bg-gray-800 rounded-full"></div>
              <div className="w-6 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="w-1/2">
          <h1 className="text-3xl font-semibold text-gray-900 mb-8">Popular Cars</h1>
          
          {/* Specs */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900 mb-1">Power</p>
              <p className="text-xs text-gray-500">429 hp @ 6,100 rpm</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900 mb-1">Max Speed</p>
              <p className="text-xs text-gray-500">280 km/h</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900 mb-1">Acceleration</p>
              <p className="text-xs text-gray-500">4.9 sec 0-60 mph</p>
            </div>
          </div>

          {/* Plan Section */}
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Plan</h2>
          
          <div className="space-y-3 mb-8">
            {/* Hourly $10 */}
            <div
              onClick={() => setSelectedPlan('hourly')}
              className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                selectedPlan === 'hourly'
                  ? 'border-[#1E429F] bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  selectedPlan === 'hourly' ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  <Clock className={`w-5 h-5 ${
                    selectedPlan === 'hourly' ? 'text-[#1E429F]' : 'text-gray-500'
                  }`} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Hourly Rent</p>
                  <p className="text-sm text-gray-500">Best for business appointments</p>
                </div>
                <p className="text-2xl font-bold text-[#1E429F]">$10</p>
              </div>
            </div>

            {/* Hourly $80 */}
            <div
              onClick={() => setSelectedPlan('daily')}
              className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                selectedPlan === 'daily'
                  ? 'border-[#1E429F] bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  selectedPlan === 'daily' ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  <Calendar className={`w-5 h-5 ${
                    selectedPlan === 'daily' ? 'text-[#1E429F]' : 'text-gray-500'
                  }`} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Hourly Rent</p>
                  <p className="text-sm text-gray-500">Best for business appointments</p>
                </div>
                <p className="text-2xl font-bold text-gray-600">$80</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Location</h2>
          <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl mb-8">
            <MapPin className="w-5 h-5 text-gray-400" />
            <p className="text-sm text-gray-600">200-298 Clipper St San Francisco</p>
          </div>

          {/* Pick Up Button */}
          <button className="w-full bg-[#1E429F] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#152a60] transition">
            Pick Up
          </button>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-4 pt-6 pb-24">
        <button className="mb-6 w-10 h-10 flex items-center justify-center">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Car Image */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 mb-6 relative">
          {/* Left Arrow */}
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-md z-10">
            <ChevronLeft className="w-3 h-3" />
          </button>
          
          {/* Car Image */}
          <div className="relative">
            {/* Circular Shadow/Platform */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-6 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent rounded-full blur-md"></div>
            
            <img
              src="/public/images/Sedan.png"
              alt="Mercedes S-Class"
              className="w-full h-auto object-contain relative z-10"
            />
          </div>
          
          {/* Right Arrow */}
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-md z-10">
            <ChevronRight className="w-3 h-3" />
          </button>
          
          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5">
            <div className="w-5 h-1 bg-gray-800 rounded-full"></div>
            <div className="w-5 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-900 mb-6">Popular Cars</h1>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div>
            <p className="text-xs font-medium text-gray-900 mb-1">Power</p>
            <p className="text-[10px] text-gray-500">429 hp @ 6,100 rpm</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-900 mb-1">Max Speed</p>
            <p className="text-[10px] text-gray-500">280 km/h</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-900 mb-1">Acceleration</p>
            <p className="text-[10px] text-gray-500">4.9 sec 0-60 mph</p>
          </div>
        </div>

        {/* Plan Section */}
        <h2 className="text-base font-semibold text-gray-900 mb-3">Plan</h2>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* Hourly $10 */}
          <div
            onClick={() => setSelectedPlan('hourly')}
            className={`p-3 rounded-xl border-2 cursor-pointer transition ${
              selectedPlan === 'hourly'
                ? 'border-[#1E429F] bg-blue-50'
                : 'border-gray-200'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
              selectedPlan === 'hourly' ? 'bg-blue-100' : 'bg-gray-100'
            }`}>
              <Clock className={`w-4 h-4 ${
                selectedPlan === 'hourly' ? 'text-[#1E429F]' : 'text-gray-500'
              }`} />
            </div>
            <p className="text-sm font-semibold text-gray-900 mb-1">Hourly Rent</p>
            <p className="text-xl font-bold text-[#1E429F] mb-1">$10</p>
            <p className="text-[10px] text-gray-500">Best for business appointments</p>
          </div>

          {/* Hourly $80 */}
          <div
            onClick={() => setSelectedPlan('daily')}
            className={`p-3 rounded-xl border-2 cursor-pointer transition ${
              selectedPlan === 'daily'
                ? 'border-[#1E429F] bg-blue-50'
                : 'border-gray-200'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
              selectedPlan === 'daily' ? 'bg-blue-100' : 'bg-gray-100'
            }`}>
              <Calendar className={`w-4 h-4 ${
                selectedPlan === 'daily' ? 'text-[#1E429F]' : 'text-gray-500'
              }`} />
            </div>
            <p className="text-sm font-semibold text-gray-900 mb-1">Hourly Rent</p>
            <p className="text-xl font-bold text-gray-600 mb-1">$80</p>
            <p className="text-[10px] text-gray-500">Best for business appointments</p>
          </div>
        </div>

        {/* Location */}
        <h2 className="text-base font-semibold text-gray-900 mb-3">Location</h2>
        <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl mb-6">
          <MapPin className="w-4 h-4 text-gray-400" />
          <p className="text-xs text-gray-600">200-298 Clipper St San Francisco</p>
        </div>

        {/* Pick Up Button */}
        <button className="w-full bg-[#1E429F] text-white py-3.5 rounded-xl font-semibold hover:bg-[#152a60] transition">
          Pick Up
        </button>
      </div>
    </div>
  );
};

export default CarRentalDetail;