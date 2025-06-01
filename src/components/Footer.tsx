
const Footer = () => {
    return (
        <>
            <footer className="bg-blue-300 p-10 text-sm text-black font-sans">
                <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between gap-y-8">
                    {/* Left section */}
                    <div className="flex flex-col min-w-[250px]">
                        <div className="flex items-center mb-3">
                            <div className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl mr-2">◊</div>
                            <strong>E-Comm</strong>
                        </div>
                        <p className="leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
                            Since the 1500s, when an unknown printer.
                        </p>
                    </div>

                    {/* Follow Us */}
                    <div className="min-w-[150px] text-center">
                        <h4 className="font-semibold mb-2">Follow Us</h4>
                        <p className="text-xs mb-4 max-w-[180px] mx-auto">
                            Since the 1500s, when an unknown printer took a galley of type and scrambled.
                        </p>
                        <div className="flex justify-center space-x-6 text-blue-700 text-lg">
                            <a href="#!" aria-label="Facebook" className="hover:underline">f</a>
                            <a href="#!" aria-label="Twitter" className="hover:underline">t</a>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="min-w-[200px]">
                        <h4 className="font-semibold mb-2">Contact Us</h4>
                        <address className="not-italic leading-relaxed">
                            E-Comm , 4578 Marmora Road,<br />
                            Glasgow D04 89GR
                        </address>
                    </div>
                </div>

                {/* Bottom link sections */}
                <div className="max-w-[900px] mx-auto mt-10 mb-6 flex flex-wrap justify-around gap-6">
                    {[
                        "Infomation",
                        "Service",
                        "My Account",
                        "Our Offers",
                    ].map((section) => (
                        <div key={section} className="min-w-[140px]">
                            <h5 className="font-semibold mb-2">{section}</h5>
                            <ul className="list-none p-0 m-0 space-y-1">
                                <li>About Us</li>
                                <li>Infomation</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                    ))}
                </div>

                <hr className="border-blue-200" />

                {/* Footer bottom */}
                <div className="max-w-[1200px] mx-auto mt-6 flex flex-wrap justify-between items-center gap-4 text-blue-100 text-xs">
                    <p>
                        © 2018 Ecommerce theme by{" "}
                        <a href="http://www.bisenbaev.com" target="_blank" rel="noopener noreferrer" className="underline">
                            www.bisenbaev.com
                        </a>
                    </p>
                    <div className="flex space-x-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Western_Union_Logo.svg/120px-Western_Union_Logo.svg.png" alt="Western Union" className="h-8" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mastercard-logo.png/80px-Mastercard-logo.png" alt="MasterCard" className="h-8" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/120px-PayPal.svg.png" alt="PayPal" className="h-8" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/120px-Visa_Inc._logo.svg.png" alt="Visa" className="h-8" />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
