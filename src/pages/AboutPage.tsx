import AboutHero from "../components/aboutUsComponents/AboutHero"
import AboutContent from "../components/aboutUsComponents/AboutContent"
import TeamSection from "../components/aboutUsComponents/TeamSection"
import CompanyStats from "../components/aboutUsComponents/CompanyStats"
import FeaturesInfo from "../components/FeaturesInfo"

const AboutPage = () => {
    return (
        <main>
            <AboutHero />
            <AboutContent />
            <CompanyStats />
            <TeamSection />
            <FeaturesInfo />
        </main>
    )
}

export default AboutPage