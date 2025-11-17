import { Container } from '@/Components/ui/Container';
import PreviousPageBtn from '@/Components/ui/previousPageBtn/PreviousPageBtn';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { CiCalendarDate } from 'react-icons/ci';

const CheckOut: React.FC = () => {
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

    const methods = [
        { name: 'Paypal', icon: '/icons/logos_paypal.svg' },
        { name: 'Mastercard', icon: '/icons/Mastercard.svg' },
        { name: 'Visa', icon: '/icons/Visa.svg' }
    ];

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [validDate, setValidDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = () => {
        if (!fullName || !email || !validDate || !cvv) {
            toast.error('Please fill all required fields!');
            return;
        }

        toast.success('Booking confirmed!');
    };

    return (
        <div className="relative py-6">
            <Container>
                <PreviousPageBtn />
                <div className="grid md:grid-cols-2 gap-4 mt-5">
                    <div className="image">
                        <img src="/image/checkout-1.png" alt="checkout" />
                    </div>

                    <div className="details">
                        <h2 className="text-[26px] text-center font-medium mb-10 text-[#111928] ">
                            Payment Method
                        </h2>

                        <div className="px-8">
                            <p className="mb-4 ms-10">Add Your Payment Method</p>

                            {/* Payment Methods */}
                            <div className="flex items-center justify-center lg:gap-4 gap-3 flex-wrap">
                                {methods.map((m) => (
                                    <div
                                        key={m.name}
                                        onClick={() => setSelectedMethod(m.name)}
                                        className={`flex items-center gap-2 rounded-[30px] border-0 bg-[#F3F4F6] lg:py-3 lg:px-5 py-2 px-4 cursor-pointer border
                                        ${selectedMethod === m.name ? 'bg-blue-100' : ''}`}
                                    >
                                        <img src={m.icon} alt={m.name} />
                                        <p>{m.name}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Show Form Only If Method Selected */}
                            {/* Show Form Only If Method Selected */}
                            {selectedMethod && (
                                <div className="mt-8 space-y-5">
                                    {/* Full Name */}
                                    <div className="flex flex-col">
                                        <label className="font-medium mb-1">Full Name</label>
                                        <div className="relative">
                                            <img
                                                src="/icons/person-name.svg"
                                                alt="person-name"
                                                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                                            />
                                            <input
                                                type="text"
                                                className="border border-[#7a7a7a] focus:outline-none focus:border-[#7a7a7a] rounded-md p-3 ps-10 w-full"
                                                placeholder="kneeDue"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    {/* Email */}
                                    <div className="flex flex-col">
                                        <label className="font-medium mb-1">Your Email</label>
                                        <div className="relative">
                                            <img
                                                src="/icons/person-email.svg"
                                                alt="person-email"
                                                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                                            />
                                            <input
                                                type="email"
                                                className="border border-[#7a7a7a] focus:outline-none focus:border-[#7a7a7a] rounded-md p-3 ps-10 w-full"
                                                placeholder="kneeDue@untitledui.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    {/* Date + CVV */}
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="col-span-2 flex flex-col">
                                            <label className="font-medium mb-1">Valid Date</label>
                                            <div className="relative">
                                                <CiCalendarDate className="absolute left-3 text-[#7a7a7a] top-1/2 -translate-y-1/2 text-[22px]" />
                                                <input
                                                    type="text"
                                                    className="border border-[#7a7a7a] focus:outline-none focus:border-[#7a7a7a] rounded-md p-3 ps-10 w-full"
                                                    placeholder="12-6-2024"
                                                    value={validDate}
                                                    onChange={(e) => setValidDate(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="font-medium mb-1">CVV</label>
                                            <div className="relative">
                                                <img
                                                    src="/icons/Cvv.svg"
                                                    alt="cvv"
                                                    className="absolute left-3 text-[#7a7a7a] top-1/2 -translate-y-1/2 text-[22px]"
                                                />
                                                <input
                                                    type="number"
                                                    className="border border-[#7a7a7a] focus:outline-none focus:border-[#7a7a7a] rounded-md p-3 ps-10 w-full"
                                                    placeholder="522"
                                                    value={cvv}
                                                    onChange={(e) => setCvv(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        className="w-full bg-blue-700 cursor-pointer duration-300 hover:bg-white hover:text-blue-700 border border-blue-700 text-white p-3 rounded-lg mt-4"
                                    >
                                        Confirm Booking
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CheckOut;
