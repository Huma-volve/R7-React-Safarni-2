

function ProfileInformation() {
    const cards = [{
        id: 1,
        name: "Name",
        icon: (<svg width="15" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1241 3.875C10.1241 5.60089 8.72494 7 6.99905 7C5.27316 7 3.87405 5.60089 3.87405 3.875C3.87405 2.14911 5.27316 0.75 6.99905 0.75C8.72494 0.75 10.1241 2.14911 10.1241 3.875Z" fill="white" />
            <path d="M0.75 15.6402C0.808588 12.2391 3.58395 9.5 6.99905 9.5C10.4142 9.5 13.1897 12.2392 13.2481 15.6404C11.3458 16.5133 9.22938 17 6.99932 17C4.76905 17 2.65247 16.5133 0.75 15.6402Z" fill="white" />
            <path d="M10.1241 3.875C10.1241 5.60089 8.72494 7 6.99905 7C5.27316 7 3.87405 5.60089 3.87405 3.875C3.87405 2.14911 5.27316 0.75 6.99905 0.75C8.72494 0.75 10.1241 2.14911 10.1241 3.875Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M0.75 15.6402C0.808588 12.2391 3.58395 9.5 6.99905 9.5C10.4142 9.5 13.1897 12.2392 13.2481 15.6404C11.3458 16.5133 9.22938 17 6.99932 17C4.76905 17 2.65247 16.5133 0.75 15.6402Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>),
        inf: "Knee Due"
    },
    {
        id: 2,
        name: "Email",
        icon: (<svg width="15" height="18" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 2.625V11.375C17 12.4105 16.1605 13.25 15.125 13.25H2.625C1.58947 13.25 0.75 12.4105 0.75 11.375V2.625M17 2.625C17 1.58947 16.1605 0.75 15.125 0.75H2.625C1.58947 0.75 0.75 1.58947 0.75 2.625M17 2.625V2.82726C17 3.47837 16.6622 4.08287 16.1077 4.42412L9.85768 8.27027C9.25504 8.64113 8.49496 8.64113 7.89232 8.27027L1.64232 4.42412C1.08779 4.08287 0.75 3.47837 0.75 2.82726V2.625" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>),
        inf: "kneeDue@untitledui.com"

    },
    {
        id: 3,
        name: "Location",
        icon: (<svg width="15" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 7C9.5 8.38071 8.38071 9.5 7 9.5C5.61929 9.5 4.5 8.38071 4.5 7C4.5 5.61929 5.61929 4.5 7 4.5C8.38071 4.5 9.5 5.61929 9.5 7Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.25 7C13.25 12.9518 7 16.375 7 16.375C7 16.375 0.75 12.9518 0.75 7C0.75 3.54822 3.54822 0.75 7 0.75C10.4518 0.75 13.25 3.54822 13.25 7Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        ),
        inf: "200-298 Clipper St San Francisco"
    }, {
        id: 4,
        name: "Phone Number",
        icon: (<svg width="15" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1241 3.875C10.1241 5.60089 8.72494 7 6.99905 7C5.27316 7 3.87405 5.60089 3.87405 3.875C3.87405 2.14911 5.27316 0.75 6.99905 0.75C8.72494 0.75 10.1241 2.14911 10.1241 3.875Z" fill="white" />
            <path d="M0.75 15.6402C0.808588 12.2391 3.58395 9.5 6.99905 9.5C10.4142 9.5 13.1897 12.2392 13.2481 15.6404C11.3458 16.5133 9.22938 17 6.99932 17C4.76905 17 2.65247 16.5133 0.75 15.6402Z" fill="white" />
            <path d="M10.1241 3.875C10.1241 5.60089 8.72494 7 6.99905 7C5.27316 7 3.87405 5.60089 3.87405 3.875C3.87405 2.14911 5.27316 0.75 6.99905 0.75C8.72494 0.75 10.1241 2.14911 10.1241 3.875Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M0.75 15.6402C0.808588 12.2391 3.58395 9.5 6.99905 9.5C10.4142 9.5 13.1897 12.2392 13.2481 15.6404C11.3458 16.5133 9.22938 17 6.99932 17C4.76905 17 2.65247 16.5133 0.75 15.6402Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>),
        inf: "kneeDue@untitledui.com"
    }]
    return (
        <div className="mt-10 max-w-[1240px] mx-auto flex flex-col gap-[20px]">
            <div className="w-[60px] h-[60px] rounded-full bg-[#F3F4F6] flex items-center justify-center cursor-pointer">
                <svg width="17" height="15" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 18.25L0.75 9.5L9.5 0.75" stroke="#0D0D0D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div className="w-full h-[551px] flex flex-col gap-[32px] border-gradient mt-[30px] p-[32px]">
                <div className="font-medium text-[26px] text-[#111928] text-center">personal information</div>
                <div className="w-full h-[84px] flex flex-col gap-2 ">
                    {cards.map((card) => (
                        <div
                            key={card.id} className="mt-2">
                            <p className=" h-[20px] text-[18px] font-medium text-[#373737]">{card.name}</p>
                            <div className="mt-3 w-full h-[56px] px-[16px] py-[8px] flex items-center gap-2 border border-[#D0D5DD] ">
                                {card.icon}
                                <div className="text-[14px] font-normal text-[#6B7280]">{card.inf}</div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ProfileInformation