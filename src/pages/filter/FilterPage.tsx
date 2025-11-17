import AdventureStyle from '@/Components/sections/filterPageSection/adventureStyle/AdventureStyle';
import BudgetRangeSection from '@/Components/sections/filterPageSection/budgetRange/BudgetRangeSection';
import LocationSection from '@/Components/sections/filterPageSection/location/LocationSection';
import Rating from '@/Components/sections/filterPageSection/rating/Rating';
import SortBySection from '@/Components/sections/filterPageSection/sortBySection/SortBySection';
import { Container } from '@/Components/ui/Container';
import PreviousPageBtn from '@/Components/ui/previousPageBtn/PreviousPageBtn';
import React from 'react';

const FilterPage: React.FC = () => {
    // back to previous page

    return (
        <div className="relative py-5">
            <Container>
                {/* Go Back Button */}
                <PreviousPageBtn />

                {/* Main content */}
                {/* Sort By Section */}
                <SortBySection />

                {/* Budget Range Section */}
                <BudgetRangeSection />

                {/* Adventure Style Section */}
                <AdventureStyle />

                {/* Location Section */}
                <LocationSection />

                {/* Rating Section */}
                <Rating />

                {/* bottom button */}
                <div className="flex items-center gap-7">
                    <button className="w-full py-4 cursor-pointer duration-300 bg-white border border-[#1E429F] text-[#1E429F] rounded-lg font-medium text-lg mt-10 hover:bg-[#1E429F] hover:text-white">
                        Clear All
                    </button>
                    <button className="w-full py-4 cursor-pointer bg-[#1E429F] border border-[#1E429F] text-white rounded-lg font-medium text-lg mt-10 duration-300 hover:bg-white hover:text-[#1E429F]">
                        56 Tours Found
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default FilterPage;
