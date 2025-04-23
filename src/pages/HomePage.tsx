import FeaturesInfo from "../components/FeaturesInfo"
import HeroSection from "../components/HeroSection"
import AllCards from "../components/HomeCards"
import SearchInput from "../components/ui/SearchInput"

const HomePage = () => {
    return (
        <main>
            <SearchInput/>
            <HeroSection />
            <AllCards />
            <FeaturesInfo />
        </main>
    )
}

export default HomePage