
function ForgetPassword() {
    return (
        <div className="max-w-[1240px] mx-auto">
            <div className="flex items-center justify-between mt-[32px]">
                <div className="w-[60px] h-[60px] rounded-full bg-[#F3F4F6] flex items-center justify-center cursor-pointer">
                    <svg width="17" height="15" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 18.25L0.75 9.5L9.5 0.75" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="w-[145px] h-[104px]  flex flex-col ">
                    <div className="w-[60px] h-[55px] ml-2 cursor-pointer">
                        <img src="../../../public/images/ball.png" alt="" className="w-full h-full" />
                    </div>
                    <div className="text-[25px] font-semibold text-[#1E429F]">Safarni</div>
                </div>
            </div>
            <div className="flex gap-14 mt-[20px]">
                <div className="w-[500px] h-[600px] bg-[#F4F4F4]  rounded-[30px]">
                    <img src="../../../public/images/Password.png" alt="" className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div className="w-[510px]  flex flex-col gap-[20px] mt-30">
                    <div className="text-[28px] font-medium text-[#111928] flex items-center justify-center">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.4375 5.125C22.8537 5.125 24.8125 7.08375 24.8125 9.5M29.1875 9.5C29.1875 14.3325 25.27 18.25 20.4375 18.25C19.926 18.25 19.4247 18.2061 18.9373 18.1219C18.1162 17.98 17.2467 18.1596 16.6575 18.7487L12.7812 22.625H9.5V25.9062H6.21875V29.1875H0.75V25.0779C0.75 24.2076 1.0957 23.373 1.71106 22.7577L11.1888 13.28C11.7779 12.6908 11.9575 11.8213 11.8156 11.0002C11.7314 10.5128 11.6875 10.0115 11.6875 9.5C11.6875 4.66751 15.605 0.75 20.4375 0.75C25.27 0.75 29.1875 4.66751 29.1875 9.5Z"
                                stroke="#AFAFAF"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="text-[28px] font-medium text-[#111928] text-center">Forgot Password?</div>
                    <div className="text-[18px] font-normal text-[#6B7280] text-center">please enter your email to reset that password</div>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-[18px] font-medium text-[#373737]">Email</label>

                            <div className="flex items-center gap-2 px-4 py-2 h-[56px] border border-[#D0D5DD] rounded-[6px]">
                                <svg width="15" height="18" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17 2.625V11.375C17 12.4105 16.1605 13.25 15.125 13.25H2.625C1.58947 13.25 0.75 12.4105 0.75 11.375V2.625M17 2.625C17 1.58947 16.1605 0.75 15.125 0.75H2.625C1.58947 0.75 0.75 1.58947 0.75 2.625M17 2.625V2.82726C17 3.47837 16.6622 4.08287 16.1077 4.42412L9.85768 8.27027C9.25504 8.64113 8.49496 8.64113 7.89232 8.27027L1.64232 4.42412C1.08779 4.08287 0.75 3.47837 0.75 2.82726V2.625"
                                        stroke="#AFAFAF"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <input type="text" placeholder="Enter your email" className="flex-1 text-[14px] text-black outline-none placeholder:text-[#6B7280]" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[56px] flex items-center justify-center bg-[#1E429F] text-[20px] font-semibold text-white rounded-[10px] cursor-pointer transition duration-200 hover:bg-[#163a8c] hover:scale-[1.03]">
                        Reset Password
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword