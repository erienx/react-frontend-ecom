const CookiePolicy = () => {
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
                            <h1 className="text-4xl font-bold">Cookie Policy</h1>
                        </div>
                        <p className="text-gray-300 text-lg">
                            Electronics Store - How We Use Cookies
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                            Last updated: June 6, 2025
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">What Are Cookies?</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our site.</p>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">Types of Cookies We Use</h2>
                            <div className="text-gray-300 space-y-4">
                                <div className="border-l-4 border-accent1 pl-4">
                                    <h3 className="font-semibold text-white mb-2">Essential Cookies</h3>
                                    <p>These cookies are necessary for the website to function and cannot be switched off. They include:</p>
                                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                        <li>Login session cookies</li>
                                        <li>Shopping cart cookies</li>
                                        <li>Security cookies</li>
                                    </ul>
                                </div>

                                <div className="border-l-4 border-blue-400 pl-4">
                                    <h3 className="font-semibold text-white mb-2">Performance Cookies</h3>
                                    <p>These cookies help us analyze how visitors use our website:</p>
                                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                        <li>Google Analytics cookies</li>
                                        <li>Page load time tracking</li>
                                        <li>Error reporting cookies</li>
                                    </ul>
                                </div>

                                <div className="border-l-4 border-green-400 pl-4">
                                    <h3 className="font-semibold text-white mb-2">Functional Cookies</h3>
                                    <p>These cookies enhance functionality and personalization:</p>
                                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                        <li>Language preferences</li>
                                        <li>Recently viewed products</li>
                                        <li>Wishlist items</li>
                                    </ul>
                                </div>

                                <div className="border-l-4 border-yellow-400 pl-4">
                                    <h3 className="font-semibold text-white mb-2">Marketing Cookies</h3>
                                    <p>These cookies are used to deliver relevant advertisements:</p>
                                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                        <li>Facebook Pixel</li>
                                        <li>Google Ads cookies</li>
                                        <li>Retargeting cookies</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">Third-Party Cookies</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>We may use third-party services that place cookies on your device:</p>
                                <ul className="list-disc list-inside ml-4 space-y-2">
                                    <li><strong>Google Analytics:</strong> To understand website usage and improve our services</li>
                                    <li><strong>Facebook:</strong> For social media integration and advertising</li>
                                    <li><strong>PayPal:</strong> For secure payment processing</li>
                                    <li><strong>Shopify:</strong> For e-commerce functionality</li>
                                </ul>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">Managing Your Cookies</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>You can control cookies through your browser settings. Here's how to manage cookies in popular browsers:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-gray-700/50 rounded p-3">
                                        <h4 className="font-semibold text-white mb-2">Chrome</h4>
                                        <p className="text-sm">Settings → Privacy and Security → Cookies</p>
                                    </div>
                                    <div className="bg-gray-700/50 rounded p-3">
                                        <h4 className="font-semibold text-white mb-2">Firefox</h4>
                                        <p className="text-sm">Preferences → Privacy & Security</p>
                                    </div>
                                    <div className="bg-gray-700/50 rounded p-3">
                                        <h4 className="font-semibold text-white mb-2">Safari</h4>
                                        <p className="text-sm">Preferences → Privacy → Cookies</p>
                                    </div>
                                    <div className="bg-gray-700/50 rounded p-3">
                                        <h4 className="font-semibold text-white mb-2">Edge</h4>
                                        <p className="text-sm">Settings → Cookies and site permissions</p>
                                    </div>
                                </div>
                                <p className="text-yellow-300 text-sm mt-4">
                                    <span className="font-semibold">Note:</span> Disabling certain cookies may affect website functionality.
                                </p>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">Cookie Consent</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>When you first visit our website, you'll see a cookie consent banner. You can:</p>
                                <ul className="list-disc list-inside ml-4 space-y-2">
                                    <li>Accept all cookies for the best experience</li>
                                    <li>Customize your cookie preferences</li>
                                    <li>Reject non-essential cookies</li>
                                </ul>
                                <p>You can change your preferences at any time by clicking the "Cookie Settings" link in our footer.</p>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">Updates to This Policy</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please check this page periodically for updates.</p>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">Contact Us</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>If you have any questions about our use of cookies, please contact us:</p>
                                <div className="space-y-2 mt-4">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-accent1">✉️</span>
                                        <span>cookies@electronics.com</span>
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

export default CookiePolicy