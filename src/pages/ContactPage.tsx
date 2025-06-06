import ContactForm from "../components/contactUsComponents/ContactForm"
import ContactHero from "../components/contactUsComponents/ContactHero"
import ContactInfo from "../components/contactUsComponents/ContactInfo"
import ContactMap from "../components/contactUsComponents/ContactMap.tsx"

const ContactPage = () => {
    return (
        <main>
            <ContactHero />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-10 sm:mx-20 py-16">
                <ContactInfo />
                <ContactForm />
            </div>
            <ContactMap />
        </main>
    )
}

export default ContactPage