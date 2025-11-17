import AvailableTours from '@/Components/sections/homeSections/availableTour/AvailableTours';
import CategoriesSection from '@/Components/sections/homeSections/categories/CategoriesSection';
import HeroSections from '@/Components/sections/homeSections/heroSection/HeroSections';
import Recommendation from '@/Components/sections/homeSections/recommendation/Recommendation';

const Home = () => {
    return (
        <>
            {/* Navbar */}

            {/* Hero Section */}
            <HeroSections />

            {/* Categories Section */}
            <CategoriesSection />

            {/* Recommendation Section */}
            <Recommendation />

            {/* Available Tours Section */}
            <AvailableTours />
        </>
    );
};

export default Home;
