
function Login() {
     const cards = [
      {
          id: 1,
          name: "Name",
          icon: (
              <svg width="15" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M10.1241 3.875C10.1241 5.60089 8.72494 7 6.99905 7C5.27316 7 3.87405 5.60089 3.87405 3.875C3.87405 2.14911 5.27316 0.75 6.99905 0.75C8.72494 0.75 10.1241 2.14911 10.1241 3.875Z"
                      fill="white"
                  />
                  <path
                      d="M0.75 15.6402C0.808588 12.2391 3.58395 9.5 6.99905 9.5C10.4142 9.5 13.1897 12.2392 13.2481 15.6404C11.3458 16.5133 9.22938 17 6.99932 17C4.76905 17 2.65247 16.5133 0.75 15.6402Z"
                      fill="white"
                  />
                  <path
                      d="M10.1241 3.875C10.1241 5.60089 8.72494 7 6.99905 7C5.27316 7 3.87405 5.60089 3.87405 3.875C3.87405 2.14911 5.27316 0.75 6.99905 0.75C8.72494 0.75 10.1241 2.14911 10.1241 3.875Z"
                      stroke="#AFAFAF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  />
                  <path
                      d="M0.75 15.6402C0.808588 12.2391 3.58395 9.5 6.99905 9.5C10.4142 9.5 13.1897 12.2392 13.2481 15.6404C11.3458 16.5133 9.22938 17 6.99932 17C4.76905 17 2.65247 16.5133 0.75 15.6402Z"
                      stroke="#AFAFAF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  />
              </svg>
          ),
          inf: "Enter your full name",
      },
      {
          id: 2,
          name: "Email",
          icon: (
              <svg width="15" height="18" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M17 2.625V11.375C17 12.4105 16.1605 13.25 15.125 13.25H2.625C1.58947 13.25 0.75 12.4105 0.75 11.375V2.625M17 2.625C17 1.58947 16.1605 0.75 15.125 0.75H2.625C1.58947 0.75 0.75 1.58947 0.75 2.625M17 2.625V2.82726C17 3.47837 16.6622 4.08287 16.1077 4.42412L9.85768 8.27027C9.25504 8.64113 8.49496 8.64113 7.89232 8.27027L1.64232 4.42412C1.08779 4.08287 0.75 3.47837 0.75 2.82726V2.625"
                      stroke="#AFAFAF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  />
              </svg>
          ),
          inf: "Enter your email",
      }
  ];
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
                  <img src="../../../public/images/login.png" alt="" className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <div className="w-[510px]  flex flex-col gap-[20px]">
                  <div className="text-[28px] font-medium text-[#111928] text-center">Welcome Again</div>
                  <div className="text-[18px] font-normal text-[#6B7280] text-center">welcome back! please Fill Your data</div>
                  <div className="w-full flex flex-col gap-4">
                      {cards.map((card) => (
                          <div key={card.id} className="flex flex-col gap-2">
                              {/* label ديناميكي */}
                              <label htmlFor={card.id} className="text-[18px] font-medium text-[#373737]">
                                  {card.name}
                              </label>

                              {/* input ديناميكي */}
                              <div className="flex items-center gap-2 px-4 py-2 h-[56px] border border-[#D0D5DD] rounded-[6px]">
                                  {card.icon}
                                  <input id={card.id} type="text" placeholder={card.inf} className="flex-1 text-[14px] text-black outline-none placeholder:text-[#6B7280]" />
                              </div>
                          </div>
                      ))}
                  </div>
                  <div className="flex justify-end text-[18px] font-medium text-[#373737]">Forgot Password?</div>

                  <div className="w-full h-[56px] flex items-center justify-center bg-[#1E429F] text-[20px] font-semibold text-white rounded-[10px] cursor-pointer transition duration-200 hover:bg-[#163a8c] hover:scale-[1.03]">
                      Sign Up
                  </div>
                  <div>
                      <img src="../../../public/images/Frame 61.png" alt="" />
                  </div>
                  <div className="flex items-center justify-between">
                      <div
                          className="w-[160px] h-[62px] border border-[#0069AB] rounded-[10px] flex items-center justify-center 
        transition duration-200 hover:bg-[#E6F4FF] hover:scale-[1.03] cursor-pointer">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_742_27068)">
                                  <path
                                      d="M29.7083 15.3448C29.7083 14.3252 29.6256 13.3 29.4493 12.2969H15.3008V18.0731H23.4029C23.0667 19.936 21.9864 21.584 20.4046 22.6312V26.3792H25.2383C28.0768 23.7667 29.7083 19.9085 29.7083 15.3448Z"
                                      fill="#4285F4"
                                  />
                                  <path
                                      d="M15.3009 30.0007C19.3464 30.0007 22.7581 28.6724 25.2439 26.3795L20.4102 22.6316C19.0653 23.5465 17.3292 24.0646 15.3064 24.0646C11.3931 24.0646 8.07506 21.4245 6.88454 17.875H1.89648V21.7387C4.44287 26.8039 9.62935 30.0007 15.3009 30.0007Z"
                                      fill="#34A853"
                                  />
                                  <path
                                      d="M6.87895 17.8744C6.25063 16.0115 6.25063 13.9942 6.87895 12.1313V8.26758H1.89641C-0.231095 12.506 -0.231095 17.4996 1.89641 21.7381L6.87895 17.8744Z"
                                      fill="#FBBC04"
                                  />
                                  <path
                                      d="M15.3009 5.93708C17.4394 5.90401 19.5063 6.70871 21.055 8.18583L25.3376 3.90327C22.6259 1.35688 19.0267 -0.0430825 15.3009 0.00101083C9.62935 0.00101083 4.44287 3.19778 1.89648 8.26851L6.87903 12.1322C8.06404 8.57716 11.3876 5.93708 15.3009 5.93708Z"
                                      fill="#EA4335"
                                  />
                              </g>
                              <defs>
                                  <clipPath id="clip0_742_27068">
                                      <rect width="30" height="30" fill="white" />
                                  </clipPath>
                              </defs>
                          </svg>
                      </div>
                      <div
                          className="w-[160px] h-[62px] border border-[#0069AB] rounded-[10px] flex items-center justify-center 
        transition duration-200 hover:bg-[#E6F4FF] hover:scale-[1.03] cursor-pointer">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_742_27070)">
                                  <path
                                      d="M30 15C30 6.71572 23.2843 0 15 0C6.71572 0 0 6.71572 0 15C0 22.4868 5.48525 28.6925 12.6562 29.8178V19.3359H8.84766V15H12.6562V11.6953C12.6562 7.93594 14.8957 5.85938 18.322 5.85938C19.9626 5.85938 21.6797 6.15234 21.6797 6.15234V9.84375H19.7883C17.925 9.84375 17.3438 11.0001 17.3438 12.1875V15H21.5039L20.8389 19.3359H17.3438V29.8178C24.5147 28.6925 30 22.4868 30 15Z"
                                      fill="#1877F2"
                                  />
                                  <path
                                      d="M20.8389 19.3359L21.5039 15H17.3438V12.1875C17.3438 11.0013 17.925 9.84375 19.7883 9.84375H21.6797V6.15234C21.6797 6.15234 19.9632 5.85938 18.322 5.85938C14.8957 5.85938 12.6562 7.93594 12.6562 11.6953V15H8.84766V19.3359H12.6562V29.8178C14.2093 30.0607 15.7907 30.0607 17.3438 29.8178V19.3359H20.8389Z"
                                      fill="white"
                                  />
                              </g>
                              <defs>
                                  <clipPath id="clip0_742_27070">
                                      <rect width="30" height="30" fill="white" />
                                  </clipPath>
                              </defs>
                          </svg>
                      </div>
                      <div
                          className="w-[160px] h-[62px] border border-[#0069AB] rounded-[10px] flex items-center justify-center 
        transition duration-200 hover:bg-[#E6F4FF] hover:scale-[1.03] cursor-pointer">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M26.0533 21.4308C25.6374 22.3916 25.1451 23.276 24.5748 24.0891C23.7973 25.1976 23.1608 25.9648 22.6702 26.3909C21.9097 27.0902 21.095 27.4484 20.2225 27.4688C19.5961 27.4688 18.8407 27.2905 17.9614 26.929C17.0792 26.5691 16.2685 26.3909 15.5272 26.3909C14.7498 26.3909 13.916 26.5691 13.0241 26.929C12.1309 27.2905 11.4114 27.479 10.8612 27.4976C10.0245 27.5333 9.19055 27.1649 8.35811 26.3909C7.8268 25.9275 7.16224 25.1331 6.36612 24.0076C5.51195 22.8058 4.80971 21.4122 4.25955 19.8233C3.67036 18.1072 3.375 16.4454 3.375 14.8365C3.375 12.9935 3.77323 11.404 4.57087 10.072C5.19775 9.00208 6.03172 8.15809 7.0755 7.53851C8.11928 6.91893 9.24708 6.6032 10.4616 6.583C11.1262 6.583 11.9977 6.78856 13.0807 7.19256C14.1606 7.59792 14.854 7.80349 15.158 7.80349C15.3853 7.80349 16.1556 7.56312 17.4615 7.08392C18.6964 6.63952 19.7387 6.45552 20.5925 6.528C22.9062 6.71472 24.6444 7.62678 25.8004 9.26994C23.7311 10.5237 22.7076 12.2797 22.7279 14.5325C22.7466 16.2871 23.3832 17.7473 24.6342 18.9067C25.2011 19.4448 25.8343 19.8607 26.5388 20.156C26.386 20.5991 26.2247 21.0235 26.0533 21.4308ZM20.747 0.550157C20.747 1.92547 20.2445 3.2096 19.243 4.39817C18.0344 5.81115 16.5725 6.62764 14.9873 6.4988C14.9671 6.33381 14.9554 6.16016 14.9554 5.97768C14.9554 4.65738 15.5301 3.2444 16.5508 2.08909C17.0604 1.50414 17.7085 1.01776 18.4944 0.629768C19.2787 0.247563 20.0205 0.0361957 20.7181 0C20.7385 0.183858 20.747 0.367728 20.747 0.550139V0.550157Z"
                                  fill="black"
                              />
                          </svg>
                      </div>
                  </div>
                  <div className="text-[18px] font-medium text-[#111928] text-center">
                      Don't have an account?<span className="text-[18px] font-semibold text-[#1E429F] cursor-pointer"> sign Up</span>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Login