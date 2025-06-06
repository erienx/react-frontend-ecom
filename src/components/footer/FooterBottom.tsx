import { Link } from 'react-router-dom'

const paymentMethods = [
    {
        name: "Visa",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
    },
    {
        name: "Mastercard",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
    },
    {
        name: "PayPal",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
    }
];


const FooterBottom = () => {
    return (
        <div className="border-t border-gray-700 px-10 sm:px-20 py-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Copyright */}
                    <div className="text-center md:text-left">
                        <p className="text-gray-400 text-sm">
                            © 2025 Electronics Store. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-xs">
                            <Link to="/privacy-policy" className="text-gray-400 hover:text-accent1 transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <Link to="/terms-of-service" className="text-gray-400 hover:text-accent1 transition-colors duration-200">
                                Terms of Service
                            </Link>
                            <Link to="/cookie-policy" className="text-gray-400 hover:text-accent1 transition-colors duration-200">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="flex flex-col items-center md:items-end gap-2">
                        <p className="text-gray-400 text-sm">We Accept</p>
                        <div className="flex items-center gap-3">
                            {paymentMethods.map((method, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-md p-2 hover:shadow-lg transition-shadow duration-200"
                                >
                                    <img
                                        src={method.logo}
                                        alt={method.name}
                                        className="h-6 max-w-[60px] object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Security & Trust */}
                <div className="mt-6 pt-6 border-t border-gray-700 text-center">
                    <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <span className="text-green-400">🔒</span>
                            <span>Secure Shopping</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-400">🚚</span>
                            <span>Fast Delivery</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-yellow-400">⭐</span>
                            <span>Customer Satisfaction</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-purple-400">🛡️</span>
                            <span>Quality Guarantee</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom