const FooterTop = () => {
    return (
        <div className="px-10 sm:px-20 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Brand Section */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-gradient-to-br from-accent1 to-accent1-hover text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                            E
                        </div>
                        <h3 className="text-2xl font-bold">Electronics Store</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                        Your trusted partner for cutting-edge electronics and innovative technology solutions.
                        We bring you the future of digital lifestyle with premium quality products.
                    </p>
                    <div className="flex space-x-4 pt-4">
                        <a href="https://www.facebook.com/" className="w-10 h-10 bg-accent1 hover:bg-accent1-hover rounded-full flex items-center justify-center transition-colors duration-200">
                            <span className="text-sm font-bold">f</span>
                        </a>
                        <a href="https://x.com/i/flow/login?lang=en" className="w-10 h-10 bg-accent1 hover:bg-accent1-hover rounded-full flex items-center justify-center transition-colors duration-200">
                            <span className="text-sm font-bold">𝕏</span>
                        </a>
                        <a href="https://www.linkedin.com/" className="w-10 h-10 bg-accent1 hover:bg-accent1-hover rounded-full flex items-center justify-center transition-colors duration-200">
                            <span className="text-sm font-bold">in</span>
                        </a>
                        <a href="https://www.instagram.com/" className="w-10 h-10 bg-accent1 hover:bg-accent1-hover rounded-full flex items-center justify-center transition-colors duration-200">
                            <span className="text-sm font-bold">ig</span>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-3">
                        <li><a href="/" className="text-gray-300 hover:text-accent1 transition-colors duration-200">Home</a></li>
                        <li><a href="/about" className="text-gray-300 hover:text-accent1 transition-colors duration-200">About Us</a></li>
                        <li><a href="/search/term/a" className="text-gray-300 hover:text-accent1 transition-colors duration-200">Products</a></li>
                        <li><a href="/contact" className="text-gray-300 hover:text-accent1 transition-colors duration-200">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
                    <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                            <span className="text-accent1 mt-1">📍</span>
                            <div>
                                <p className="text-gray-300">123 Electronics Street</p>
                                <p className="text-gray-300">Warsaw, Poland 00-001</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-accent1">📞</span>
                            <p className="text-gray-300">+48 123 456 789</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-accent1">✉️</span>
                            <p className="text-gray-300">info@electronics.com</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-accent1">⏰</span>
                            <p className="text-gray-300">Mon-Fri: 9AM-6PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTop