function GetStarted() {
  return (
    <div className='max-w-[1240px] mx-auto'>
      <div className="flex justify-end w-full mt-[32px] h-[90px]">
        <div className="w-[145px] h-[104px]  flex flex-col ">
          <div className="w-[60px] h-[55px] ml-2 cursor-pointer">
            <img src="../../../public/images/ball.png" alt="" className="w-full h-full" />
          </div>
          <div className="text-[25px] font-semibold text-[#1E429F]">Safarni</div>
        </div>
      </div>
      <div className="flex gap-14">
        <div className="w-[500px] h-[550px] bg-[#F4F4F4] mt-[20px] rounded-[30px]">
          <img src="../../../public/images/plane.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="w-[510px] h-[346px] mt-[120px] flex flex-col gap-[24px]">
          <div className="text-[28px] font-medium text-[#111928] text-center">Welcome</div>
          <div className="text-[21px] font-normal text-[#4B5563] text-center">Safarni is your all-in-one travel guide. Discover destinations, compare trip prices, book flights, hotels, car rentals, and local tours — all through one interactive experience.</div>
          <div className="w-full h-[56px] flex items-center justify-center bg-[#1E429F] text-[20px] font-semibold text-white rounded-[10px] cursor-pointer transition duration-200 hover:bg-[#163a8c] hover:scale-[1.03]">
            Sign Up
          </div>
          <div className="w-full h-[56px] flex items-center justify-center border border-[#1E429F] text-[20px] font-semibold text-[#1E429F] rounded-[10px] cursor-pointer transition duration-200  hover:scale-[1.03]">
            Log in
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default GetStarted
