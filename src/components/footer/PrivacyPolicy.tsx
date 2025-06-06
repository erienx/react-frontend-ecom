const PrivacyPolicy = () => {
    return (
        <div className="bg-white text-gray-900 min-h-screen">
            <div className="px-10 sm:px-20 py-12">
            <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center space-x-3 mb-6">
                            <div className="bg-gradient-to-br from-accent1 to-accent1-hover text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                                E
                            </div>
                            <h1 className="text-4xl font-bold">Privacy Policy</h1>
                        </div>
                        <p className="text-gray-300 text-lg">
                            Electronics Store - Protecting Your Privacy
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                            Last updated: June 6, 2025
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">1. Information We Collect</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>We collect information you provide directly to us, such as when you:</p>
                                <ul className="list-disc list-inside ml-4 space-y-2">
                                    <li>Create an account or make a purchase</li>
                                    <li>Subscribe to our newsletter</li>
                                    <li>Contact our customer support</li>
                                    <li>Participate in surveys or promotions</li>
                                </ul>
                                <p>This may include your name, email address, phone number, shipping address, and payment information.</p>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">2. How We Use Your Information</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>We use the information we collect to:</p>
                                <ul className="list-disc list-inside ml-4 space-y-2">
                                    <li>Process and fulfill your orders</li>
                                    <li>Provide customer support and respond to inquiries</li>
                                    <li>Send you promotional communications (with your consent)</li>
                                    <li>Improve our products and services</li>
                                    <li>Prevent fraud and ensure security</li>
                                </ul>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">3. Information Sharing</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only:</p>
                                <ul className="list-disc list-inside ml-4 space-y-2">
                                    <li>With service providers who assist us in operating our business</li>
                                    <li>When required by law or to protect our rights</li>
                                    <li>In connection with a business transaction (merger, acquisition, etc.)</li>
                                </ul>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">4. Data Security</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">5. Your Rights</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>You have the right to:</p>
                                <ul className="list-disc list-inside ml-4 space-y-2">
                                    <li>Access, update, or delete your personal information</li>
                                    <li>Opt-out of marketing communications</li>
                                    <li>Request a copy of your data</li>
                                    <li>Lodge complaints with relevant authorities</li>
                                </ul>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">6. Contact Us</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                                <div className="space-y-2 mt-4">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-accent1">✉️</span>
                                        <span>privacy@electronics.com</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-accent1">📞</span>
                                        <span>+48 123 456 789</span>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-accent1 mt-1">📍</span>
                                        <div>
                                            <p>123 Electronics Street</p>
                                            <p>Warsaw, Poland 00-001</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Back to Home Button */}
                    <div className="text-center mt-12">
                        <a
                            href="/"
                            className="inline-flex items-center px-6 py-3 bg-accent1 hover:bg-accent1-hover text-white font-semibold rounded-lg transition-colors duration-200"
                        >
                            ← Back to Home
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy