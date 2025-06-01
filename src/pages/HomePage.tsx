import FeaturesInfo from "../components/FeaturesInfo"
import HeroSection from "../components/HeroSection"
import AllCards from "../components/HomeCards"
import SearchInput from "../components/ui/SearchInput"
import LatestNews from "../components/LatestNews.tsx";

const HomePage = () => {
    return (
        <main>
            <SearchInput/>
            <HeroSection />
            <AllCards />
            <FeaturesInfo />
            <LatestNews />

        </main>
    )
}

export default HomePage