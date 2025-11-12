import { Container } from '@/Components/ui/Container';
import React from 'react';

const HeroSections: React.FC = () => {
    return (
        <div className="relative py-5 lg:py-8">
            <Container>
                <div className="grid grid-cols-12 gap-6 items-center">
                    <div className="col-span-12 lg:col-span-6 space-y-6">
                        <div className="text">
                            <h1 className="text-[51px] font-semibold lg:text-6xl text-(--main-text)">
                                <span className="block mb-5">Visit The Most</span>
                                <span className="block mb-5">
                                    <span className="text-(--color-main)">Beautiful Places </span>
                                    In
                                </span>
                                <span className="block">The World</span>
                            </h1>
                            <p className="mt-4 text-[20px] text-(--second-text) max-w-124">
                                "Explore stunning destinations around the globe. Find travel
                                inspiration, top attractions, and plan your next adventure—all from
                                one platform."
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 space-y-6">
                        <div className="grid grid-cols-12 gap-3 items-end">
                            <div className="col-span-5">
                                <div className="image1 flex flex-col gap-3">
                                    <img
                                        src="/image/hero-img-1.png"
                                        alt="Hero1"
                                        className="w-full h-auto"
                                    />
                                    <img
                                        src="/image/hero-img-2.png"
                                        alt="Hero2"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                            <div className="col-span-4">
                                <div className="image2 flex flex-col gap-3">
                                    <img
                                        src="/image/hero-img-3.png"
                                        alt="Hero3"
                                        className="w-full h-auto"
                                    />
                                    <img
                                        src="/image/hero-img-4.png"
                                        alt="Hero4"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                            <div className="col-span-3">
                                <div className="image3">
                                    <img
                                        src="/image/hero-img-5.png"
                                        alt="Hero5"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HeroSections;
