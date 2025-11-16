

function Profile() {
    const cards = [
        {
            id: 1,
            title: "Personal Info",
            icon: (
                <svg width="18" height="24" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8111 5.4375C14.8111 8.02633 12.7124 10.125 10.1236 10.125C7.53475 10.125 5.43608 8.02633 5.43608 5.4375C5.43608 2.84867 7.53475 0.75 10.1236 0.75C12.7124 0.75 14.8111 2.84867 14.8111 5.4375Z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.75 23.0853C0.837881 17.9836 5.00092 13.875 10.1236 13.875C15.2464 13.875 19.4095 17.9838 19.4972 23.0857C16.6437 24.395 13.4691 25.125 10.124 25.125C6.77858 25.125 3.6037 24.3949 0.75 23.0853Z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 2,
            title: "My Booking",
            icon: (
                <svg width="18" height="24" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 6.375V18.5625C0.75 20.1158 2.0092 21.375 3.5625 21.375H20.4375C21.9908 21.375 23.25 20.1158 23.25 18.5625V6.375M0.75 6.375V3.5625C0.75 2.0092 2.0092 0.75 3.5625 0.75H20.4375C21.9908 0.75 23.25 2.0092 23.25 3.5625V6.375M0.75 6.375H23.25M3.5625 3.5625H3.57188V3.57188H3.5625V3.5625ZM6.375 3.5625H6.38438V3.57188H6.375V3.5625ZM9.1875 3.5625H9.19688V3.57188H9.1875V3.5625Z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 3,
            title: "App Language",
            icon: (
                <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 23.25C17.2407 23.25 21.6445 19.6665 22.8946 14.8162M12 23.25C6.75928 23.25 2.35552 19.6665 1.10537 14.8162M12 23.25C15.1066 23.25 17.625 18.2132 17.625 12C17.625 5.7868 15.1066 0.75 12 0.75M12 23.25C8.8934 23.25 6.375 18.2132 6.375 12C6.375 5.7868 8.8934 0.75 12 0.75M12 0.75C16.2065 0.75 19.8738 3.05867 21.8038 6.47806M12 0.75C7.79351 0.75 4.12624 3.05867 2.19616 6.47806M21.8038 6.47806C19.1747 8.75049 15.7478 10.125 12 10.125C8.25215 10.125 4.82534 8.75049 2.19616 6.47806M21.8038 6.47806C22.7246 8.10929 23.25 9.99329 23.25 12C23.25 12.9725 23.1266 13.9161 22.8946 14.8162M22.8946 14.8162C19.6667 16.6059 15.9524 17.625 12 17.625C8.04763 17.625 4.33328 16.6059 1.10537 14.8162M1.10537 14.8162C0.873392 13.9161 0.75 12.9725 0.75 12C0.75 9.99329 1.27541 8.10929 2.19616 6.47806" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Account & Security",
            icon: (
                <svg width="18" height="24" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 11.0625V6.375C15.75 3.2684 13.2316 0.75 10.125 0.75C7.0184 0.75 4.5 3.2684 4.5 6.375V11.0625M3.5625 25.125H16.6875C18.2408 25.125 19.5 23.8658 19.5 22.3125V13.875C19.5 12.3217 18.2408 11.0625 16.6875 11.0625H3.5625C2.0092 11.0625 0.75 12.3217 0.75 13.875V22.3125C0.75 23.8658 2.0092 25.125 3.5625 25.125Z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 5,
            title: "Logout",
            icon: (
                <svg width="18" height="24" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 5.75V2.625C9.5 1.58947 8.66053 0.75 7.625 0.75L2.625 0.75C1.58947 0.75 0.750001 1.58947 0.75 2.625L0.75 13.875C0.75 14.9105 1.58947 15.75 2.625 15.75H7.625C8.66053 15.75 9.5 14.9105 9.5 13.875V10.75M6.375 5.75L3.875 8.25M3.875 8.25L6.375 10.75M3.875 8.25L14.5 8.25" stroke="#F52930" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
    ];

    return (
        <div className="mt-10 max-w-[1240px] mx-auto flex flex-col gap-[20px]">
            {/* Profile Header */}
            <div className="w-full h-[190px] rounded-[12px] p-[32px] border-gradient">
                <div className="flex items-center gap-[32px]">
                    <div className="cursor-pointer relative w-[126px] h-[126px] rounded-full p-[1px] bg-gradient-to-b from-[#3F52B4] to-[#B22459]">
                        <img
                            src="../../../public/images/Avatar.png"
                            alt="Avatar"
                            className="w-full h-full rounded-full object-cover"
                        />
                        <div className="cursor-pointer absolute bottom-[40px] right-[-15px] w-[43px] h-[43px] rounded-full border-2 border-white bg-white">
                            <img
                                src="../../../public/images/Button Icon.png"
                                alt="Button Icon"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[8px] w-[261px] h-[97px]">
                        <h1 className="text-[35px] font-semibold text-[#4B5563]">Knee Due</h1>
                        <p className="text-[24px] font-medium text-[#4B5563]">kneedue@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className="w-full border-gradient flex flex-col rounded-[12px] p-[32px] gap-[24px]">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="w-[1176px] h-[84px] rounded-[8px] p-[24px] flex items-center justify-between bg-[#FFFFFF] shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.01] cursor-pointer"
                    >
                        <div className="flex items-center gap-[16px]">
                            <div className="w-[30px] h-[30px]">{card.icon}</div>
                            <div className={`text-[24px] font-medium ${card.title === "Logout" ? "text-[#F52930]" : "text-[#111928]"}`}>
                                {card.title}
                            </div>
                        </div>
                        <div className="w-[30px] h-[30px] mt-[10px]">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.75 0.75L6.9569 6.9569L0.75 13.1638" stroke="#4B4F63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Profile;
