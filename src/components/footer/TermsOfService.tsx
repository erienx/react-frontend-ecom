const TermsOfService = () => {
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
                            <h1 className="text-4xl font-bold">Terms of Service</h1>
                        </div>
                        <p className="text-gray-300 text-lg">
                            Electronics Store - Terms and Conditions
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                            Last updated: June 6, 2025
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">1. Acceptance of Terms</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our service.</p>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">2. Use License</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>Permission is granted to temporarily download one copy of the materials on Electronics Store's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                                <ul className="list-disc list-inside ml-4 space-y-2">
                                    <li>Modify or copy the materials</li>
                                    <li>Use the materials for any commercial purpose</li>
                                    <li>Attempt to reverse engineer any software</li>
                                    <li>Remove any copyright or proprietary notations</li>
                                </ul>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">3. Product Information</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>We make every effort to display product information accurately. However, we cannot guarantee that all information is complete, accurate, or error-free. We reserve the right to:</p>
                                <ul className="list-disc list-inside ml-4 space-y-2">
                                    <li>Correct any errors or inaccuracies</li>
                                    <li>Update product information without notice</li>
                                    <li>Limit quantities available for purchase</li>
                                    <li>Discontinue products at any time</li>
                                </ul>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">4. Pricing and Payment</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>All prices are subject to change without notice. We reserve the right to modify prices at any time. Payment must be received by us before products are shipped. We accept major credit cards, PayPal, and other payment methods as displayed on our website.</p>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">5. Shipping and Delivery</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>We will make every effort to ship products within the timeframe specified. However, delivery dates are estimates and we are not responsible for delays caused by:</p>
                                <ul className="list-disc list-inside ml-4 space-y-2">
                                    <li>Shipping carriers</li>
                                    <li>Weather conditions</li>
                                    <li>Customs processing</li>
                                    <li>Other circumstances beyond our control</li>
                                </ul>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">6. Returns and Refunds</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>We offer a 30-day return policy for most products. Items must be in original condition with all packaging and accessories. Some restrictions may apply. Custom or personalized items may not be returnable.</p>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">7. Warranty</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>All products come with manufacturer warranties as specified. We do not provide additional warranties beyond those provided by manufacturers. Warranty claims must be processed according to manufacturer guidelines.</p>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">8. Limitation of Liability</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>In no event shall Electronics Store be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use our products or services.</p>
                            </div>
                        </section>

                        <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                            <h2 className="text-2xl font-semibold text-accent1 mb-4">9. Contact Information</h2>
                            <div className="text-gray-300 space-y-3">
                                <p>For questions about these Terms of Service, please contact us:</p>
                                <div className="space-y-2 mt-4">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-accent1">✉️</span>
                                        <span>legal@electronics.com</span>
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

export default TermsOfService