import { BackArrowWhite } from "../icons/icons"

const FlightMobileHeader = () => {
  return (
<div className="w-full md:hidden relative">
  <div className="w-full absolute top-4 sm:top-6 flex items-center justify-between px-6 z-10">
    <button 
      onClick={() => window.history.back()}
      className="p-2 hover:bg-white/10 rounded-full transition"
    >
      <BackArrowWhite />
    </button>

    <h1 className="text-white text-base sm:text-lg font-semibold absolute left-1/2 -translate-x-1/2">
      Book Your Flight
    </h1>
  </div>

  <img 
    className="w-full h-[55vh] object-cover object-center" 
    src="/public/images/flightMobileView.jpg" 
    alt="Flight Booking" 
  />
</div>

  )
}

export default FlightMobileHeader
