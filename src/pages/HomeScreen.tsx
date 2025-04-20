import FeaturesInfo from "../components/FeaturesInfo"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import AllCards from "../components/HomeCards"

const HomeScreen = () => {
    return (
        <main>
            <Header />
            <HeroSection />
            <AllCards />
            <FeaturesInfo />
            <Footer />
        </main>
    )
}

export default HomeScreen