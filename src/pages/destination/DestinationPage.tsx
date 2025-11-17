import GallerySection from '@/Components/sections/destinationSections/gallery/GallerySection';
import ReviewSection from '@/Components/sections/destinationSections/review/ReviewSection';
import TopActivate from '@/Components/sections/destinationSections/topActivate/TopActivate';
import { Container } from '@/Components/ui/Container';
import PreviousPageBtn from '@/Components/ui/previousPageBtn/PreviousPageBtn';
import React, { useEffect, useState } from 'react';

const DestinationPage: React.FC = () => {
    // Hover Effect State
    const [backgroundPos, setBackgroundPos] = useState('center');
    const [isHovering, setIsHovering] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setBackgroundPos(`${x}% ${y}%`);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
        setIsHovering(false);
        setBackgroundPos('center');
    };

    return (
        <div className="relative py-5">
            <Container>
                {/* Go Back Button */}
                <PreviousPageBtn />

                {/* Main content */}
                <div className="content mt-8">
                    <div
                        className={`relative w-full overflow-hidden mb-3 rounded-2xl ${
                            isHovering ? 'cursor-zoom-in' : ''
                        } bg-no-repeat bg-center transition-all duration-500 ease-out
  h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]`}
                        onMouseMove={isHovering && isLargeScreen ? handleMouseMove : undefined}
                        onMouseEnter={isLargeScreen ? handleMouseEnter : undefined}
                        onMouseLeave={isLargeScreen ? handleMouseLeave : undefined}
                        style={{
                            backgroundImage: "url('/image/EiffelTower-destination.png')",
                            backgroundPosition: backgroundPos,
                            backgroundSize: isHovering && isLargeScreen ? '200%' : 'cover',
                            transition: 'background-size 0.4s ease, background-position 0.1s ease'
                        }}
                    ></div>

                    <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                        <h3 className="lg:text-[32px] text-[25px] font-semibold text-(--main-text)">
                            Eiffel Tower
                        </h3>
                        <div className="rate flex items-center gap-1">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <img src="/icons/full-star.svg" alt="full-star" key={index} />
                            ))}
                            <img src="/icons/half-star.svg" alt="half-star" />
                            <div className="rate-count">
                                <span className="text-[#4B4F63] font-semibold">4.5</span>
                                <span className="text-[#6B6E80] font-semibold">(675)</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-10 flex-wrap gap-3">
                        <p className="lg:text-[25px] text-[20px] font-semibold text-(--second-text)">
                            City Breaks
                        </p>
                        <p className="lg:text-[26px] text-[20px] font-medium text-(--second-text)">
                            Cultural Tours
                        </p>
                        <p className="lg:text-[26px] text-[20px] font-medium text-(--second-text)">
                            Adventure Trips
                        </p>
                    </div>

                    {/* Top Activates Section */}
                    <TopActivate />

                    <div className="side-note lg:mb-10 mb-7">
                        <h4 className="font-medium text-(--main-text) md:text-[25px] text-[18px] mb-2">
                            Best Time to Visit
                        </h4>
                        <p className="text-[#4B5563] md:text-[22px] text-[16px] p-2 rounded-lg border border-gray-300">
                            Spring (April–June) and autumn (September–October) are perfect times to
                            visit Paris, with mild weather and fewer tourists.
                        </p>
                    </div>

                    {/* Gallery Section */}
                    <GallerySection />

                    {/* Review Section */}
                    <ReviewSection />
                </div>
            </Container>
        </div>
    );
};

export default DestinationPage;
