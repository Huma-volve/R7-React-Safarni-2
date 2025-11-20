import { Plane } from "lucide-react"
import { Link } from "react-router"

const FlightCardTickets: React.FC<FlightCardTicketsProps> = ({ 
  departureTime, 
  arrivalTime, 
  duration, 
  airport, 
  layover, 
  airline, 
  price 
}) => {  
    return (
<div className="relative">
      {/* Main Card */}
      <div className="relative bg-white rounded-2xl shadow-md overflow-visible hover:shadow-lg transition-shadow">
        
        {/* Left Notch */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full -ml-3 
          bg-gray-50 shadow-[inset_-4px_0_6px_rgba(0,0,0,0.04)]"
        ></div>

        {/* Right Notch */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full -mr-3 
          bg-gray-50 shadow-[inset_4px_0_6px_rgba(0,0,0,0.04)]"
        ></div>
        
        {/* Ticket Content */}
        <Link to={'/seats'}>
        <div className="relative p-6">
          {/* Flight Times and Route */}
          <div className="flex items-start justify-between mb-4">
            {/* Departure */}
            <div className="flex-1">
              <div className="text-2xl font-bold text-gray-900">{departureTime}</div>
              <div className="text-sm text-gray-500 mt-1">{airport}</div>
            </div>
            
            {/* Flight Duration & Icon */}
            <div className="flex flex-col items-center px-4 flex-1">
              <Plane className="w-5 h-5 text-gray-600 rotate-90 mb-1" />
              <div className="text-xs text-gray-600 font-medium">{duration}</div>
            </div>
            
            {/* Arrival */}
            <div className="flex-1 text-right">
              <div className="text-2xl font-bold text-gray-900">{arrivalTime}</div>
              <div className="text-sm text-gray-500 mt-1">{airport}</div>
            </div>
          </div>
          
          {/* Layover Info */}
          <div className="text-xs text-gray-500 mb-4">
            {layover}
          </div>
          
          {/* Airline and Price */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="text-base font-semibold text-gray-900">{airline}</div>
            <div className="text-xl font-bold text-gray-900">$ {price.toLocaleString()}</div>
          </div>
        </div>
        </Link>
      </div>
    </div>

  )
}

export default FlightCardTickets
