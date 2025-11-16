import { useState } from "react";

function Seacurity() {
    const [isOn, setIsOn] = useState(false);
    const [faceOn, setFaceOn] = useState(false);

    const cards = [
        {
            id: 1,
            title: "Deactivate Account",
            desc: "Manage your account on the various devices you own."
        },
        {
            id: 2,
            title: "Device Management",
            desc: "Temporarily deactivate your account. Easily reactivate when you're ready."
        },
        {
            id: 3,
            title: "Delete Account",
            desc: "Permanently remove your account and data from Tripmate. Proceed with caution."
        }
    ];

    return (
        <div className="mt-10 max-w-[1240px] mx-auto flex flex-col gap-[20px]">
            <div className="w-[60px] h-[60px] rounded-full bg-[#F3F4F6] flex items-center justify-center cursor-pointer">
                <svg width="17" height="15" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 18.25L0.75 9.5L9.5 0.75" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <div className="w-full min-h-[611px] flex flex-col gap-[32px] border-gradient mt-[30px] p-[32px]">

                <div className="font-medium text-[26px] text-[#111928] text-center">
                    Account & Security
                </div>

                {/* Biometric ID */}
                <div className="flex items-center justify-between">
                    <p className="text-[24px] font-medium text-[#111928]">Biometric ID</p>

                    <div
                        onClick={() => setIsOn(!isOn)}
                        className={`
                            w-[30px] h-[18px] rounded-full cursor-pointer relative transition-all duration-300
                            ${isOn ? "bg-green-500" : "bg-[#F2F4FC]"}
                        `}
                    >
                        <div
                            className={`
                                w-[14px] h-[14px] bg-white rounded-full absolute top-[2px] transition-all duration-300
                                ${isOn ? "right-[2px]" : "left-[2px]"}
                            `}
                        ></div>
                    </div>
                </div>

                {/* Face ID */}
                <div className="flex items-center justify-between">
                    <p className="text-[24px] font-medium text-[#111928]">Face ID</p>

                    <div
                        onClick={() => setFaceOn(!faceOn)}
                        className={`
                            w-[30px] h-[18px] rounded-full cursor-pointer relative transition-all duration-300
                            ${faceOn ? "bg-green-500" : "bg-[#F2F4FC]"}
                        `}
                    >
                        <div
                            className={`
                                w-[14px] h-[14px] bg-white rounded-full absolute top-[2px] transition-all duration-300
                                ${faceOn ? "right-[2px]" : "left-[2px]"}
                            `}
                        ></div>
                    </div>
                </div>

                
                <div className="flex flex-col gap-4">
                    {cards.map(card => (
                        <div
                            key={card.id}
                            className="w-full rounded-[8px] py-[24px] px-[18px] flex items-center justify-between 
                                       bg-[#FFFFFF] shadow-md transition-all duration-300 
                                       hover:shadow-lg hover:scale-[1.01] cursor-pointer"
                        >
                            <div className="flex flex-col gap-2">
                                <div className={`text-[24px] font-medium ${card.title === "Delete Account" ? "text-[#F52930]" : "text-[#111928]"}`}>{card.title}</div>
                                <span className="text-[16px] font-normal text-[#4B5563]">
                                    {card.desc}
                                </span>
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
        </div>
    );
}

export default Seacurity;
