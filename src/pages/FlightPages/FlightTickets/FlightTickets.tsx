import React from 'react';
import { Calendar, User, ChevronLeft } from 'lucide-react';
import FlightCardTickets from '@/Components/Flights/FlightCardTikets';

interface Flight {
  departureTime: string;
  arrivalTime: string;
  duration: string;
  airport: string;
  layover: string;
  airline: string;
  price: number;
}


const FlightTickets: React.FC = () => {
  const flights: Flight[] = [
    {
      departureTime: "7:05 AM",
      arrivalTime: "8:55 PM",
      duration: "18:55",
      airport: "YUL",
      layover: "1 layover: YYZ (3:55)",
      airline: "Scoot",
      price: 1300
    },
    {
      departureTime: "9:05 AM",
      arrivalTime: "4:05 PM",
      duration: "18:55",
      airport: "YUL",
      layover: "1 layover: YYZ (3:55)",
      airline: "Scoot",
      price: 1400
    },
    {
      departureTime: "9:05 AM",
      arrivalTime: "4:55 PM",
      duration: "18:55",
      airport: "YUL",
      layover: "1 layover: YYZ (3:55)",
      airline: "Scoot",
      price: 1300
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Back Button */}
        <button className="mb-6 p-2 hover:bg-white rounded-lg transition-colors">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Date Headers */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 flex items-center justify-center gap-3 shadow-sm">
            <Calendar className="w-5 h-5 text-gray-600" />
            <span className="text-gray-900 font-medium">Dec 16th, 2025</span>
          </div>
          <div className="bg-white rounded-xl p-6 flex items-center justify-center gap-3 shadow-sm">
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-gray-900 font-medium">Jan 6th, 2025</span>
          </div>
        </div>

        {/* Flight Cards Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column - Dec 16th flights */}
          <div className="space-y-4">
            {flights.map((flight, index) => (
              <FlightCardTickets key={`left-${index}`} {...flight} />
            ))}
          </div>

          {/* Right Column - Jan 6th flights */}
          <div className="space-y-4">
            {flights.map((flight, index) => (
              <FlightCardTickets key={`right-${index}`} {...flight} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default FlightTickets;
