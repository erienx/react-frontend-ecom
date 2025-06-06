const contactData = [
    {
        title: "Visit Our Store",
        details: [
            "123 Electronics Street",
            "Tech District, Warsaw",
            "Poland 00-001"
        ],
        icon: "📍"
    },
    {
        title: "Call Us",
        details: [
            "+48 123 456 789",
            "+48 987 654 321",
            "Mon-Fri: 9AM-6PM"
        ],
        icon: "📞"
    },
    {
        title: "Email Us",
        details: [
            "info@electronics.com",
            "support@electronics.com",
            "sales@electronics.com"
        ],
        icon: "✉️"
    },
    {
        title: "Follow Us",
        details: [
            "Facebook: @electronics",
            "Instagram: @electronics_store",
            "Twitter: @electronics"
        ],
        icon: "🌐"
    }
];

const ContactInfo = () => {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold text-dark mb-6">
                    Contact Information
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                    We're here to help! Reach out to us through any of the following channels.
                </p>
            </div>

            <div className="space-y-6">
                {contactData.map((contact, index) => (
                    <div
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                        <div className="text-2xl">{contact.icon}</div>
                        <div>
                            <h3 className="font-semibold text-dark mb-2">
                                {contact.title}
                            </h3>
                            <div className="space-y-1">
                                {contact.details.map((detail, idx) => (
                                    <p key={idx} className="text-gray-600">
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-6 bg-accent1/10 rounded-lg">
                <h3 className="font-semibold text-dark mb-2">
                    Business Hours
                </h3>
                <div className="space-y-1 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo